import MainColorEpic  from "./colorEpic";
import {combineEpics} from "redux-observable";

const RootEpic = combineEpics(
    MainColorEpic,
)

export default RootEpic