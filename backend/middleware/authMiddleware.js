import jwt from "jsonwebtoken";
import asyncHandler  from './asyncHandler';
import User from '../models/userModel';

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // read the jwt from the cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findByID(decoded.userId).select('-password');
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorised, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorised, no token found');
  }
});

// Admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorised as admin');   
  }
}

export { protect, admin };