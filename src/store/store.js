import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import mapPanelSlice from "./slices/MapPanel.js";
import languageSlice from "./slices/Language.js";
import HomePageVisibility from "./slices/HomePageVisibility.js";
import UserSlice from "./slices/User.js";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: UserSlice,
  language: languageSlice,
  mapPanel: mapPanelSlice,
  visibilityIndex: HomePageVisibility,
});

const persistantReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    persistantReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const peristed = persistStore(store);

export default store;
