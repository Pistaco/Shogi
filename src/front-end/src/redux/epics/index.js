import MainColorEpic  from "./colorEpic";
import MainTableroEpic from "./tableroEpic";

import {combineEpics} from "redux-observable";

const RootEpic = combineEpics(
    MainColorEpic,
    MainTableroEpic
)

export default RootEpic