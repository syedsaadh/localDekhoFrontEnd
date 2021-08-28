import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import themeSlice from "./theme/theme-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
