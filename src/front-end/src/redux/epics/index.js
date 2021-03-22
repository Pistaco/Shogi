import MainColorEpic  from "./colorEpic";
import MainTableroEpic from "./gestionEpic";

import {combineEpics} from "redux-observable";

const RootEpic = combineEpics(
    MainColorEpic,
    MainTableroEpic
)

export default RootEpic