import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./phoneBook/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV === 'development',
  // devTools: process.env.NODE_ENV === 'production',
});

export default store;

// persist
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";
// import rootReducer from "./phoneBook/rootReducer";
// const store = configureStore({
//   reducer: rootReducer,
// });

// persistStore(store);

// export default store;
