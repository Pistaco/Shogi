import react, {useContext, useState} from "react";
import {CoordenadaContext} from "./../contexts/contextCoordenada";
import styled from "styled-components";


const Casilla = ({row, column}) => {


    const {handCoo} = useContext(CoordenadaContext);
    const [coordenada, _] = useState([row, column])
    const [pieza, moverPieza] = useState(null);
    const [color, HandColor] = useState(false);

const CasillaS = styled.div`
width: 6.5em;
height: 6.5em;
background-color: ${color ? "#EFE46B" : "#DCC27F"};
border: 1px solid black;
`;
    const HandClick = () => {
        if (color === false) {
            HandColor(true);
        }
        else {
        HandColor(false);
        }
    }


    return (
        <CasillaS onClick={HandClick} >
            {pieza}
        </CasillaS>
    )

}


export default Casilla;