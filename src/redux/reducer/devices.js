import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'devices',
  initialState: { devices: [] },
  reducers: {
    onGetDeviceToken: (state, { payload }) => {
      state.deviceToken = payload
    },
  }
})

export const { onGetDeviceToken } = userSlice.actions

export default userSlice.reducer
