import { configureStore,combineReducers } from "@reduxjs/toolkit";
import scheduleReducer from "./scheduleSlice";
const rootReducer = combineReducers({
    schedule: scheduleReducer
});

const store = configureStore({
    reducer:rootReducer
})

export default store;