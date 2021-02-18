import {createStore} from "redux";
import indexReducer from "./reducers";
import * as act from "./actions";

export { act }
export default createStore(indexReducer)


