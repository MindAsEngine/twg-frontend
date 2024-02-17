import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/Counter.js";
import changeSlice from "./slices/Tour.js";
import mapPanelSlice from "./slices/MapPanel.js"

export default configureStore({
  reducer: {
    // cunter: counterReducer,
    // tour: changeSlice
    // language: languageSlice
    mapPanel: mapPanelSlice,
  },
});
