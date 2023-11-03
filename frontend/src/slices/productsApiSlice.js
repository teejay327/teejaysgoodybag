import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  getProducts: (builder).query({
    query: () => ({
      url: PRODUCTS_URL,
    })
  })
});
