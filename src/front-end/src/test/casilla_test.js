import {useState} from "react";
import CasillaUI from "./../casilla/casilla_ui"



const CasillaCont = ({row, column}) => {

    const [pieza, HandPieza] = useState(0)
    const [color, HandColor] = useState(false)

    const colorChange = () => color ? HandColor(false): HandColor(true)

    const logic = () => {
        colorChange()
    }

    
    return <CasillaUI  pieza={pieza} colorS={color} onClick={logic}/>
}
export default CasillaCont;