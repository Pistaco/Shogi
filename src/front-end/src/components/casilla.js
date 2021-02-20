import react, {useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import state_export from "../redux/redux";
import { epicAction } from "../redux/reactive";
import { Color } from "../redux/actions";

const test = () => ({
    type: "test"
})

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

const state = state_export()

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
    const [pieza, HandPieza] = useState(null);
    const [color, HandColor] = useState(false);
    const colorChange = () => color ? HandColor(false): HandColor(true)
    const logic = () => {
        colorChange()
        state.dispatch(test())
    }

    return <CasillaUI  pieza={pieza} colorS={color} onClick={logic}/>
}

    


export default CasillaCont;