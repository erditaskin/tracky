import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import generalReducer from "store/reducers/general";
import authReducer from "store/reducers/auth";
import timelineReducer from "store/reducers/timeline";
import dialogReducer from "store/reducers/dialog";

const reducers = combineReducers({
  generalStore: generalReducer,
  authStore: authReducer,
  timelineStore: timelineReducer,
  dialogStore: dialogReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authStore", "timelineReducer"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(reduxThunk))
);
const persistor = persistStore(
  store,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
export { persistor };
