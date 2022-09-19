import { createSlice } from '@reduxjs/toolkit';
import {
  signupOperations,
  loginOperations,
  logoutOperations,
  currentOperations,
} from './auth-operations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signupOperations.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signupOperations.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signupOperations.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [loginOperations.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [loginOperations.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [loginOperations.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [logoutOperations.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logoutOperations.fulfilled]: store => {
      store.loading = false;
      store.user = {};
      store.token = '';
      store.isLogin = false;
    },
    [logoutOperations.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [currentOperations.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [currentOperations.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      // store.token = payload.token;
      store.isLogin = true;
    },
    [currentOperations.rejected]: (store, { payload }) => {
      store.loading = false;
      store.token = '';
      store.error = null;
      // store.error = payload;
    },
  },
});

export default authSlice.reducer;
