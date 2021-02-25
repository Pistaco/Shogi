import { of } from "rxjs";
import {map, tap, mergeMap, mapTo} from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";

import { Color, Piezas } from "../actions";

import $Casilla, {$Color} from "../streams/subjectColor";

export const color  = {
    "START": "START",
    "ADD": "ADD",
    "CHECK": "CHECK",
    "RESET": "RESET"
}


const pseudoList = {
    data: [],
    reset: () => pseudoList.data = [],
    push: action => pseudoList.data.push(action.getValue()),
    log: () => console.log("DESDE PSEUDO:   " + pseudoList.data) 
}

const conditional = ($store, $action) => {
    if ($store.value.color.cantidad === 2) {
        return {type: color.RESET}
    }
    return $action
}

const ColorEpic = ($action, $store) => (
    $action.pipe(
        ofType(color.START),
        tap(v => console.log("START")),
        mergeMap(data => of(
            {type: color.ADD},
            {type: color.CHECK}
        )),
    )
)

const ColorADDEpic = ($action, $store) => (
    $action.pipe(
        ofType(color.ADD),
        tap(v => console.log("ADD EPIC")),
        tap(v => pseudoList.push($Casilla)),
        mapTo(Color("add"))
    )
)

const CheckResetEpic = ($action, $store) => (
    $action.pipe(
        ofType("CHECK"),
        tap(v => console.log("CHECK EPIC")),
        map(action => action)
    )
)



const ResetEpic = ($action, $store) => (
    $action.pipe(
        ofType(color.RESET),
        tap(v => console.log("EPIC RESET")),
        tap(v => $Color.next(1)),
        mergeMap(v => of(
            Color("reset"),
            Piezas(pseudoList.data[0], "inicial", "X"),
            Piezas(pseudoList.data[1], "final", "Y"),
            )),
        tap(v => pseudoList.reset()),
    )
)

const MainColorEpic = combineEpics(ColorEpic, ResetEpic, ColorADDEpic, CheckResetEpic)
export default MainColorEpic