import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { notesReducer } from "./reducers/notesReducer";
import { authReducer } from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({ notes: notesReducer, auth: authReducer })
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));