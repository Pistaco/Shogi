import {useState, useEffect} from "react";

import { state } from "../components/tablero";

import {START_COLOR} from "../redux/epics/EpicActions";
import {Seleccion} from "../redux/actions";

import CasillaUI from "./casilla_ui"
import CasillaOBS from "./CasillaOBS";


const usePieza = (state, row, column) => {
        const {tablero} = state.getState()
        const inicial = tablero[row][column].pieza
        return useState(inicial)
}

const CasillaCont = ({row, column}) => {

    const [pieza, HandPieza] = usePieza(state, row, column)
    const [color, HandColor] = useState(false)
    const coordenadas = [row, column]

    const colorChange = () => color ? HandColor(false): HandColor(true)

    useEffect(() => {
        const Sub = CasillaOBS.listen({
            OFF_COLOR: () => {
                HandColor(false)
                state.dispatch(Seleccion(coordenadas))
            }
        }, coordenadas)
        return () => Sub.unsubscribe()
    },[])

    const logic = () => {
        colorChange()
        START_COLOR(state, coordenadas)
    }


    return <CasillaUI  pieza={pieza} colorS={color} onClick={logic}/>
}

// SUBSCRIBER



export default CasillaCont;