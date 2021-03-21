import {useState, useEffect} from "react";
import { state } from "../components/tablero";
import { START_COLOR } from "../redux/epics/colorEpic";
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

    const colorChange = () => color ? HandColor(false): HandColor(true)

    useEffect(() => {
        const Sub = CasillaOBS.listen({
            OFF_COLOR: () => {console.log("OBS OFF"); HandColor(false)}
        }, [row, column])
        return () => Sub.unsubscribe()
    },[])

    const logic = () => {
        colorChange()
        state.dispatch({
            type: "START",
            data: {
                coordenada: [row, column]
            }
        })
        state.dispatch({
            type: "CHECK",
            data: {
                coordenada: [row, column]
            }
        })
    }


    return <CasillaUI  pieza={pieza} colorS={color} onClick={logic}/>
}

// SUBSCRIBER



export default CasillaCont;