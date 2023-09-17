import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import { authPersistedReducer } from "./configureStore";
import { userApi } from "./auth/operations";
import { moviesApi } from "./movies/moviesApi";
import { movieSlice } from "./movies/moviesSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    auth: authPersistedReducer,
    movie: movieSlice.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(userApi.middleware)
      .concat(moviesApi.middleware);
  },
  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
