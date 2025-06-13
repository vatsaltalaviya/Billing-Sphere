import { configureStore } from '@reduxjs/toolkit'
import itemReducer from '../feature/itemSlice'

export const store = configureStore({
  reducer: {
    items: itemReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,             // this enables redux-thunk
      serializableCheck: false // optional, avoids warnings for non-serializable values
    }),
})