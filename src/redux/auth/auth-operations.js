import { createAsyncThunk } from '@reduxjs/toolkit';
import signupApi from 'services/authApi';

export const signupOperations = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const result = await signupApi(data);
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

// catch ({ response }) {
//       const { status, data } = response;
//       const error = {
//         status,
//         message: data.message,
//       };
//       return rejectWithValue(error);
//     }
