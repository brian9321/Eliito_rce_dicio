import { combineReducers, configureStore } from "@reduxjs/toolkit";

//Reducers
import userReducer from './reducers/userSlice';
import appReducer from './reducers/appSlice';

//ReduxPersist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const reducer = combineReducers({
    user : userReducer,
    app: appReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer : persistedReducer,
});

export const persistor = persistStore(store);

export default store;