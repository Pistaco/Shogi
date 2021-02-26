import react, {useEffect, useMemo, useState} from "react";
import { debounce, debounceTime, delay, map, tap } from "rxjs/operators";
import styled from "styled-components";
 
import { Color } from "../redux/actions";
import state_export from "../redux/index";

import $Casilla, { $Color } from "../redux/streams/subjectColor";
import { START_COLOR } from "./../redux/epics/colorEpic";

// ESTILOS 


const Pieza = styled.div`
display: flex;
justify-content: center;
font-size: 3rem;

`

const CasillaS = styled.div`
width: 6.5em;
height: 6.5em;
border: 1px solid black;
`;

// STATE
const state = state_export()

// HOOKS

const usePieza = (state, row, column) => {
        const {tablero} = state.getState()
        const inicial = tablero[row][column]
        return useState(inicial)
}

// COMPONENTES

// SUBSCRIBER 


const CasillaUI = ({pieza, colorS, onClick}) => {

    const color = useMemo(() => ({
        backgroundColor: colorS ? "#EFE46B" : "#DCC27F"
    }), [colorS])


    return (
        <CasillaS style={color} onClick={onClick}>
            <Pieza>
                {pieza}
            </Pieza>
        </CasillaS>
    )
}
const CasillaCont = ({row, column}) => {


    const [pieza, HandPieza] = usePieza(state, row, column);
    const [color, HandColor] = useState(false);

    const colorChange = () => color ? HandColor(false): HandColor(true)

    const logic = () => {
        colorChange()
        $Casilla.next([row, column])
        START_COLOR(state)
    }

    useEffect(() => {
        $Color.subscribe(() => 
            HandColor(false)
        )
        return () => Color.unsubscribe()
    }, [])


    return <CasillaUI  pieza={pieza} colorS={color} onClick={logic}/>
}

// SUBSCRIBER



export default CasillaCont;