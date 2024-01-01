import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Authorise the user & get the token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req,res) => {
  res.send ('auth user');
});

// @desc Register the user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req,res) => {
  res.send ('register user');
});

// @desc Log the user out / clear the cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req,res) => {
  res.send ('logout user');
});

// @desc Get the user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req,res) => {
  res.send ('get user profile');
});

// @desc Update the user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req,res) => {
  res.send ('update user profile');
});

// @desc Get users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req,res) => {
  res.send ('get users');
});

// @desc Delete users
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUsers = asyncHandler(async (req,res) => {
  res.send ('delete users');
});