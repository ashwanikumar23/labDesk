import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
  labNo: string;
  Address: string;
  phone: string;
  email: string;

}

const initialState: AuthState = {
  isLoggedIn: false,
  username: null,
  labNo: '1',
  Address: 'Guru Kirpa Lab village:  , city: ',
  phone: '',
  email: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    setLabNoAndAddress(state, action: PayloadAction<{ labNo: string, Address: string, phone: string, email: string }>) {
      state.labNo = action.payload.labNo;
      state.Address = action.payload.Address;
      state.email = action.payload.email;
      state.phone = action.payload.phone
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

export const { login, logout, setLabNoAndAddress } = authSlice.actions;
export default authSlice.reducer;
