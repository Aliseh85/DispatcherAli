import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase/AuthService';



const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      isLoggedIn: false,
      loading: false,
      error: null,
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      },
      unsetUser: (state) => {
        state.user = null;
        state.isLoggedIn = false;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      clearError: (state) => {
        state.error = null;
      },
    },
  });

// Async action to listen to the user's authentication status and update the user state accordingly
export const listenToAuthChanges = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
    }
  });
};

export const { setUser, clearUser } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
