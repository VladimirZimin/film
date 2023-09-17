import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "services/apiConst";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers, { getState }) => {
      const { token = "" } = getState().auth;
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    createToken: builder.query({
      query: () => `/authentication/token/new?api_key=${API_KEY}`,
      providesTags: ["Users"],
    }),

    validateUser: builder.mutation({
      query: (credentials) => ({
        url: `/authentication/token/validate_with_login?api_key=${API_KEY}`,
        method: "POST",
        body: credentials,
      }),
      providesTags: ["Users"],
    }),

    createSession: builder.mutation({
      query: (credentials) => ({
        url: `/authentication/session/new?api_key=${API_KEY}`,
        method: "POST",
        body: credentials,
      }),
      providesTags: ["Users"],
    }),

    getUserId: builder.query({
      query: (id) => `/account?api_key=${API_KEY}&session_id=${id}`,
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useCreateTokenQuery,
  useValidateUserMutation,
  useCreateSessionMutation,
  useGetUserIdQuery,
} = userApi;

/** =============== redux toolkit ====================================
 * 
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const set = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Создайте временный токен запроса, который можно использовать для проверки входа пользователя TMDb.
export const createToken = createAsyncThunk("auth/signup", async (thunkAPI) => {
  try {
    const response = await axios.get(
      `/authentication/token/new?api_key=${API_KEY}`
    );
    set(response.data.request_token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Этот метод позволяет приложению проверять токен запроса, вводя имя пользователя и пароль.
//  {
//   username: "qwe",
//   password: "qwe",
//   request_token: token,
// }
export const validateUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `/authentication/token/validate_with_login?api_key=${API_KEY}`,
        credentials
      );
      set(response.data.request_token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Вы можете использовать этот метод для создания полностью действительного идентификатора сеанса после того, как пользователь подтвердит токен запроса.
//  {
//   request_token: token,
// }
export const createSession = createAsyncThunk(
  "auth/session",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `/authentication/session/new?api_key=${API_KEY}`,
        credentials
      );
      set(response.data.request_token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserId = createAsyncThunk("auth/id", async (id, thunkAPI) => {
  try {
    const response = await axios.get(
      `/account?api_key=${API_KEY}&session_id=${id}`
    );
    set(response.data.request_token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

 ======================================================*/
