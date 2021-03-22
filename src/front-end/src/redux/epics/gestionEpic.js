import { ofType } from "redux-observable"
import {mergeMap} from "rxjs/operators"
import {of} from "rxjs";
import {sendOFF} from "./EpicActions";
import {Mover_seleccionados} from "../actions";

const TYPE_ACTION = {
    "GESTION_START": "GESTION_START"
}

const GestActionsEpic = ($action, $state) => $action.pipe(
    ofType("GESTION_START"),
    mergeMap(
        of(
            Mover_seleccionados(),
            sendOFF()
        )
    )
)

export default GestActionsEpic