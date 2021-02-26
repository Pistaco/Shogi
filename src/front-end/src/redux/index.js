import {createStore, applyMiddleware} from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
import RootEpic from "./epics/index";
import indexReducer from "./reducers";

const epicMiddleware = createEpicMiddleware()

export default function configureStore() {
    const store = createStore(indexReducer,
        composeWithDevTools(
        applyMiddleware(epicMiddleware))
    )
    epicMiddleware.run(RootEpic)
    return store
}


