import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

//Reduxで何がどう変わってるのかを御覧いただけるように
const middlewares = [logger];

//ストアの状態をローカルストレージで保存
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
const Store = { store, persistor };

export default Store;
