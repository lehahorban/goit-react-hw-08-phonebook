import { createAsyncThunk } from '@reduxjs/toolkit';
import { signup, login, logout, getCurrent } from 'services/authApi';

export const signupOperations = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await signup(data);
      return result;
    } catch ({ status, message }) {
      const error = {
        status,
        message,
      };
      return rejectWithValue(error);
    }
  }
);

export const loginOperations = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      return result;
    } catch ({ status, message }) {
      const error = {
        status,
        message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logoutOperations = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logout();
      return result;
    } catch ({ status, message }) {
      const error = {
        status,
        message,
      };
      return rejectWithValue(error);
    }
  }
);

export const currentOperations = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();

      const result = await getCurrent(auth.token);
      return result;
    } catch ({ status, message }) {
      const error = {
        status,
        message,
      };
      return rejectWithValue(error);
    }
  }
);
