import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const auth = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = createAsyncThunk(
  'signup',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      auth.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      auth.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logOut = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    auth.unset();
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const refreshUser = createAsyncThunk('current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    auth.set(persistedToken);
    const response = await axios.get(`/users/current`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
