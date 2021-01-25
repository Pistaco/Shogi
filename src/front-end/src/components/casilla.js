import react, {useContext, useEffect, useState} from "react";
import {CoordenadaContext} from "./../contexts/contextCoordenada";
import styled from "styled-components";
import Mover_pieza from "./../helpers/moverpieza";

const Pieza = styled.div`
display: flex;
justify-content: center;
font-size: 3rem;

`

const Casilla = ({row, column}) => {

    const {Tablero_matrix, handInicial, handFinal, ColorAlarm, AlarmHand } = useContext(CoordenadaContext);
    const [coordenada, _] = useState([row, column])
    const [pieza, HandPieza] = useState(null);
    const [color, HandColor] = useState(false);

    const CasillaS = styled.div`
    width: 6.5em;
    height: 6.5em;
    background-color: ${color ? "#EFE46B" : "#DCC27F"};
    border: 1px solid black;
    `;

    useEffect(() => {
        help_pieza();
    }, [])

    const help_pieza = () => {
        const [x, y] = coordenada;
        const tpieza = Tablero_matrix[x][y]
        HandPieza(tpieza);
    }
    
    const HandClick = () => {

        if (ColorAlarm === true) {
            ListenSecundElement();
            return;
        }

        if(color === false) {
            HandColor(true)
            ListenFirstElement();
        }
        help_pieza();
    };

    const ListenFirstElement = () => {
        console.log("PRIMERO");
        AlarmHand(true);
        handInicial(coordenada);
    };

    const ListenSecundElement = () => {
        console.log("SEGUNDO");
        handFinal(coordenada);
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