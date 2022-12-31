import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthError: state => {
      state.error = null;
    },
  },

  extraReducers: {
    [register.pending]: handlePending,
    [logIn.pending]: handlePending,
    [logOut.pending]: handlePending,

    [register.rejected]: handleRejected,
    [logIn.rejected]: handleRejected,
    [logOut.rejected]: handleRejected,

    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [refreshUser.fulfilled](state, action) {
      const { name, email } = action.payload;
      state.user.name = name;
      state.user.email = email;
      state.isLoggedIn = true;
    },
  },
});

export const { resetAuthError } = authSlice.actions;

export default authSlice.reducer;
