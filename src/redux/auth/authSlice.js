import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./operations";

const initialState = {
  user: { username: null, password: null, request_token: null },
  token: null,
  sessionId: null,
  isLoggedIn: false,
  userId: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user.username = action.payload.username;
      state.user.password = action.payload.password;
    },
    getIsLoggedIn(state) {
      state.isLoggedIn = false;
      state.user = { username: null, password: null, request_token: null };
      state.token = null;
      state.sessionId = null;
      state.isLoggedIn = false;
      state.userId = {};
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.createToken.matchFulfilled,
      (state, action) => {
        state.token = action.payload.request_token;
      }
    );
    builder.addMatcher(
      userApi.endpoints.validateUser.matchFulfilled,
      (state, action) => {
        state.user.request_token = action.payload.request_token;
      }
    );
    builder.addMatcher(
      userApi.endpoints.createSession.matchFulfilled,
      (state, action) => {
        state.sessionId = action.payload.session_id;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      userApi.endpoints.getUserId.matchFulfilled,
      (state, action) => {
        state.userId = action.payload;
      }
    );
  },
});

export const authReducer = authSlice.reducer;
export const { addUser, getIsLoggedIn } = authSlice.actions;

/***************** redux toolkit **************************
builder
  .addCase(createToken.fulfilled, (state, action) => {
    state.token = action.payload.request_token;
  })
  .addCase(validateUser.fulfilled, (state, action) => {
    state.user.request_token = action.payload.request_token;
  })
  .addCase(createSession.fulfilled, (state, action) => {
    state.sessionId = action.payload.session_id;
    state.isLoggedIn = action.payload.success;
  })
  .addCase(getUserId.fulfilled, (state, action) => {
    state.userId = action.payload;
  });
*/
