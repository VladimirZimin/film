import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { userApi } from "./auth/operations";

const authPersistConfig = {
  key: "filmAuth",
  storage,
  whitelist: ["token", "sessionId", "userId", "isLoggedIn"],
  blacklist: [userApi.reducerPath],
};

export const authPersistedReducer = persistReducer(
  authPersistConfig,
  authReducer
);
