import { createStore } from "redux";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import { todoReducer } from "./reducers/todoReducer";

const rootPersistConfig = {
    key: "root",
    storage: storage,
};

const rootReducer = combineReducers({
    todo: todoReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };
