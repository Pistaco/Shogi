import {useState} from "react";
import { state } from "../components/tablero";

import { $Receptor_pieza, $Epic } from "../streams";
import { START_COLOR } from "../redux/epics/colorEpic";

import CasillaUI from "./casilla_ui"

import useObserver from "./useSubscribe"

import rxjs from "rxjs"
import { filter, tap, map, iff, mergeMap } from "rxjs/operators"

import { ofType } from "redux-observable";

const usePieza = (state, row, column) => {
        const {tablero} = state.getState()
        const inicial = tablero[row][column]
        return useState(inicial)
}

const Acciones_casilla = {
    "ACTUALIZAR": "ACTUALIZAR",
    "OFF_COLOR": "OFF_COLOR"
}

const CasillaCont = ({row, column}) => {

    const [pieza, HandPieza] = usePieza(state, row, column);
    const [color, HandColor] = useState(false);
    const [check, handCheck] = useState(false);
    const [State$] = useState($Receptor_pieza)

    const colorChange = () => color ? HandColor(false): HandColor(true)

    const logic = () => {
        colorChange()
        $Send.next([row, column])
        START_COLOR(state)
    }

 
    useObserver(
        $Receptor_pieza.pipe(
            ofType("actualizar"),
            filter( ({data: [r1, c1]}) => r1 === row && c1 === column),
            map(value => state.getState().tablero ),
            tap(tablero => HandPieza(tablero[row][column]))
        )
    )

    useObserver(
       $Receptor_pieza.pipe(
            ofType("off_colors"),
            tap(value => HandColor(false))
       )
    )

    
    return <CasillaUI  pieza={pieza} colorS={color} onClick={logic}/>
}

// SUBSCRIBER



export default CasillaCont;