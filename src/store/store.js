import { configureStore } from '@reduxjs/toolkit';
import fackestoreSlice from '../features/fackestore/fackestoreSlice'

const store = configureStore({
  reducer: {
    fackestore: fackestoreSlice,
  }
});

export default store;