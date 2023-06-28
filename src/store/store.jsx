import { configureStore } from '@reduxjs/toolkit';
import usersReducers from "./users/usersSlice"

export const store = configureStore({
  reducer:{
    users : usersReducers
  }
}) 

