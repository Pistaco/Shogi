import { ofType, combineEpics} from "redux-observable"
import {mapTo, mergeMap, pluck, tap, filter, mergeMapTo, map} from "rxjs/operators"
import {of, from} from "rxjs";
import {sendOFF, sendActualizar} from "./EpicActions";
import {Mover_seleccionados} from "../actions";
import CasillaOBS, {piezasAct} from "../../casilla/CasillaOBS";

const TYPE_ACTION = {
    "GESTION_START": "GESTION_START",
    "SEND_ACTUALIZAR": "SEND_ACTUALIZAR"
}

const GestActionsEpic = ($action, $state) => $action.pipe(
    ofType("GESTION_START"),
    tap(value => console.log("GESTION")),
    mergeMap(value =>
        of(
            Mover_seleccionados(),
            sendActualizar(),
            sendOFF()
        )
    )
)

const sendActualizarEpic = ($action, $store) => $action.pipe(
    ofType("SEND_ACTUALIZAR"),
    mergeMapTo(from($store.value.tablero)),
    mergeMap(value => from(value).pipe(
        filter(value => value.seleccion),
        pluck("coordenada"),
        tap(value => CasillaOBS.dispatch(piezasAct(value)))
    )),
    map(value => ({type: "null"}))
    )

export default  combineEpics(GestActionsEpic, sendActualizarEpic)