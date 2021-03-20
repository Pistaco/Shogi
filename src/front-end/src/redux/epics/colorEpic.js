import { of } from "rxjs";
import {map, tap, mergeMap, concatMap } from "rxjs/operators";

import { combineEpics, ofType } from "redux-observable";
import { Color, Piezas } from "../actions";


const ColorADDEpic = ($action, $store) => (
    $action.pipe(
        ofType(color.ADD),
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