import {useState, useEffect} from "react";
import CasillaUI from "./../casilla/casilla_ui"
import ObsCasilla from "./CasillaOBsTEST";

const $Receptor = ObsCasilla()

const CasillaCont = ({row, column, set, piezaCont}) => {

    const [pieza, HandPieza] = useState(0)
    const [color, HandColor] = useState(false)

    const colorChange = () => color ? HandColor(false): HandColor(true)

    const logic = () => {
        colorChange()
    }
     useEffect(() => {
         const Subs = $Receptor.subscribe()
         return () => Subs.unsubscribe()
     }, [])

    return <CasillaUI  pieza={pieza} colorS={color} onClick={logic}/>
}

export const dispatch = next => $Receptor.next(next)
export default CasillaCont;
