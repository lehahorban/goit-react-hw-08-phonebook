import { createAsyncThunk } from '@reduxjs/toolkit';
import { signup, login } from 'services/authApi';

export const signupOperations = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    console.log(data);
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
    console.log(data);
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
