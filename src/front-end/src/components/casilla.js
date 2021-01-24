import react, {useContext, useState} from "react";
import {CoordenadaContext} from "./../contexts/contextCoordenada";
import styled from "styled-components";

const Pieza = styled.div`
display: flex;
justify-content: center;
font-size: 3rem;

`

const Casilla = ({row, column}) => {

    const {handCoo, Tablero_matrix, hand_matrix} = useContext(CoordenadaContext);
    const [coordenada, _] = useState([row, column])
    const [pieza, HandPieza] = useState(null);
    const [color, HandColor] = useState(false);

    const CasillaS = styled.div`
    width: 6.5em;
    height: 6.5em;
    background-color: ${color ? "#EFE46B" : "#DCC27F"};
    border: 1px solid black;
    `;

    const help_pieza = () => {
        const [x, y] = coordenada;
        const tpieza = Tablero_matrix[x - 1][y - 1]
        HandPieza(tpieza);
    }
    
    const HandClick = () => {
        if (color === false) {
            HandColor(true);
            hand_matrix([coordenada, "P"]);
        }
        else {
        HandColor(false);
        hand_matrix([coordenada, null]);
        }
        help_pieza();
    }


    return (
        <CasillaS onClick={HandClick} >
            <Pieza>
               {pieza}
            </Pieza>
        </CasillaS>
    )

}


export default Casilla;