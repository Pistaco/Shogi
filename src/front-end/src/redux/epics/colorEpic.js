import { of, from} from "rxjs";
import {map, tap, mergeMap, filter, concatMap, concat, pluck, debounceTime} from "rxjs/operators";

import { combineEpics, ofType } from "redux-observable";
import { Color, Piezas, Seleccion } from "../actions";

import CasillaOBS, {offColor} from "../../casilla/CasillaOBS";
import {sendOFF} from "./EpicActions";
import {fromArray} from "rxjs/internal/observable/fromArray";

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
        of($store.value).pipe(
            pluck("color", "cantidad"),
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
    mergeMap(value => from($store.value.tablero)),
    mergeMap(value => from(value).pipe(
        filter(value => value.seleccion),
        tap(value => CasillaOBS.dispatch(offColor(value.coordenada))),
    )),
    debounceTime(0),
    map(value => Color("reset"))
)


const MainColorEpic = combineEpics(ColorAdminEpic, checkEpic, OffSendEpic)
export default MainColorEpic