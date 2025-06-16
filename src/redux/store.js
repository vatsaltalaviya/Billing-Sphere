import { configureStore } from '@reduxjs/toolkit'
import itemReducer from '../feature/itemSlice'
import ledgerSliceReducer from '../feature/ledgerSlice'

export const store = configureStore({
  reducer: {
    items: itemReducer,
    ledgers:ledgerSliceReducer
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,             // this enables redux-thunk
      serializableCheck: false // optional, avoids warnings for non-serializable values
    }),
})