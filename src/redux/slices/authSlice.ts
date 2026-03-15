import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCookie } from '../../utils/cookies.utils';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    clearAuth: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    checkAuth: (state) => {
      const token = getCookie('token');
      state.token = token;
      state.isAuthenticated = !!token;
    },
  },
});

export const { setAuth, clearAuth, checkAuth } = authSlice.actions;
export default authSlice.reducer;
