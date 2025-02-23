import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
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
import { Order } from "../../dashboard/admin/bicycle.order";

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
   
    [MainbaseApi.reducerPath]: MainbaseApi.reducer,
    auth: persistedAuthReducer,
    order:Order
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
