import { of } from "rxjs";
import {map, tap, mergeMap, filter,  concatMap, concat, pluck} from "rxjs/operators";

import { combineEpics, ofType } from "redux-observable";
import { Color, Piezas, Seleccion } from "../actions";

import CasillaOBS, {offColor} from "../../casilla/CasillaOBS";
import {sendOFF} from "./EpicActions";

const PrototypeData = {
    type: "COLOR_ADD",
    data: {
        coordenada: [0, 0]
    }
}

const color  = {
    "START": "START",
    "CHECK": "CHECK",
    "SEND_OFF": "SEND_OFF"
}

const ColorAdminEpic = ($value, $store) => $value.pipe(
    ofType("START"),
    tap(value => console.log("COLOR_START")),
    mergeMap(value =>
        of(
            Seleccion(value.data.coordenada),
            Color("add")
        )
    )
)


const checkEpic = ($value, $store) => $value.pipe(
    ofType(color.CHECK),
    mergeMap(value =>
        $store.pipe(
            tap(value => console.log("CHECK")),
            pluck("color", "cantidad"),
            tap(console.log),
            filter(value => value === 2)
        )
    ),
    mergeMap(value =>
        of(
            Color("reset"),
            sendOFF()
        )
    )
)

const OffSendEpic = ($value, $store)  => $value.pipe(
    ofType("SEND_OFF"),
    tap(value => console.log("COLOR_OFF")),
    mergeMap(value =>
        $store.pipe(
            pluck("tablero"),
            map(value => value.map(value => value.filter(value => value.seleccion)).filter(value => value.length)),
            tap(value => value.map(value => value.map(value => CasillaOBS.dispatch(offColor(value.coordenada))))),
            map(value => ({type: null}))
        )
    ),

)


const MainColorEpic = combineEpics(ColorAdminEpic, checkEpic, OffSendEpic)
export default MainColorEpic