import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import cartReducer from '../cardSlice/cartslice'; // 
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { MainbaseApi } from "../auth/mainBaseApi";

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
   
    [MainbaseApi.reducerPath]: MainbaseApi.reducer,
    auth: persistedAuthReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(MainbaseApi.middleware),

});

// 🔹 Persistor
export const persistor = persistStore(store);
// 🔹 Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
