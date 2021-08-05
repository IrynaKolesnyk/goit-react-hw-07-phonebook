import phoneBookReducer from "./phoneBookReducer";

const rootReducer = phoneBookReducer;

export default rootReducer;

// записываем данные в local storage с помощью persist

// import { combineReducers } from "redux";
// import phoneBookReducer from "./phoneBookReducer";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const configuration = {
//   key: "contacts",
//   storage: storage,
//   whitelist: ["items", "filter"],
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(configuration, phoneBookReducer),
// });

// export default rootReducer;
