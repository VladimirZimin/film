export const selectToken = (state) => state.auth.token;

export const selectSessionId = (state) => state.auth.sessionId;

export const selectUser = (state) => state.auth.user;

export const selectUserId = (state) => state.auth.userId;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectQuery = (state) => state.movie.query;

export const selectSearch = (state) => state.movie.search;
