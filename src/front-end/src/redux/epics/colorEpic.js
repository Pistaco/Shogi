import { of } from "rxjs";
import {map, tap, mergeMap, concatMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";

import { Color, Piezas } from "../actions";

import $Send from "../../streams";

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

export const START_COLOR = (state) => {
    state.dispatch({
        type: "ADD"
    })
    state.dispatch({
        type: "CHECK"
    })
}

const Next = value => $Send.next(
    {
        type: "actualizar",
        data: value
    }
)


const ColorADDEpic = ($action, $store) => (
    $action.pipe(
        ofType(color.ADD),
        tap(v => pseudoList.push($Casilla)),
        map(v => Color("add"))
    )
)

const CheckResetEpic = ($action, $store) => (
    $action.pipe(
        ofType(color.CHECK),
        map(v =>  $store.value.color.cantidad == 2 ? {type: color.RESET} : {type: "NULL"})
))



const ResetEpic = ($action, $store) => (
    $action.pipe(
        ofType(color.RESET),
        tap(v => $Color.next(1)),
        mergeMap(v => of(
            Color("reset"),
            Piezas(pseudoList.data[0], "inicial", "X"),
            Piezas(pseudoList.data[1], "final", "Y"),
            ) ),
        tap(v => pseudoList.reset()),
    )
)

const MainColorEpic = combineEpics(CheckResetEpic, ResetEpic, ColorADDEpic)
export default MainColorEpic