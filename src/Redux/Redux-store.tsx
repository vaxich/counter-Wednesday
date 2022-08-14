import {combineReducers, legacy_createStore as createStore} from "redux";
import {reduser} from "./Reduser";


const rootReduser = combineReducers({
    reduser: reduser

})

export const store = createStore(rootReduser);

export type AppRootStateType = ReturnType<typeof store.getState>


// @ts-ignore
window.store = store;