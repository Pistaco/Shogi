import {createStore, applyMiddleware} from "redux";
import indexReducer from "./reducers";
import { createEpicMiddleware } from "redux-observable";
import RootEpic from "./reactive";

const epicMiddleware = createEpicMiddleware()
export default function configureStore() {
    const store = createStore(indexReducer, applyMiddleware(epicMiddleware))
    epicMiddleware.run(RootEpic)
    return store
}


