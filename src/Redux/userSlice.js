import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: '',
  identifier: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.role = action.payload.role;
      state.identifier = action.payload.identifier;
    },
    clearUser(state) {
      state.role = '';
      state.identifier = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
