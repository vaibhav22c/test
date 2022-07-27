import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'devices',
  initialState: { devices: [] },
  reducers: {
    addDevice: (state, { payload }) => {
      state.devices = [...state.devices, payload]
    },
    updateDevice: (state, { payload }) => {
      // const old = state?.devices?.filter(k => k?.id != payload?.id)
      // state.devices = [...old, payload]
      const old = state?.devices?.map(k => {
        if (k?.id != payload?.id) {
          return k
        }
        else {
          return payload
        }
      })
      state.devices = [...old]
    },
    deleteDevice: (state, { payload }) => {
      state.devices = state?.devices?.filter(k => k?.id != payload)
    }
  }
})

export const { addDevice, updateDevice, deleteDevice } = userSlice.actions

export default userSlice.reducer
