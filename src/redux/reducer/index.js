import { combineReducers } from '@reduxjs/toolkit'
import devices from './devices'

const appReducer = combineReducers({
  devices,
})

export default appReducer;
