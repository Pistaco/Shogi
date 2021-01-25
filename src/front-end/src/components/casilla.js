import react, {useContext, useEffect, useState} from "react";
import {CoordenadaContext} from "./../contexts/contextCoordenada";
import styled from "styled-components";
import Mover_pieza from "./../helpers/moverpieza";

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


const Casilla = ({row, column}) => {

    const {Tablero_matrix, handInicial, handFinal, ColorAlarm, AlarmHand } = useContext(CoordenadaContext);
    const [coordenada, _] = useState([row, column])
    const [pieza, HandPieza] = useState(null);
    const [color, HandColor] = useState(false);


    useEffect(() => {
        help_pieza();
        if(ColorAlarm === false) {
            HandColor(false);
        }
    })

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


    const style = {backgroundColor: color ? "#EFE46B" : "#DCC27F"}


    return (
        <CasillaS onClick={HandClick} style={style} >
            <Pieza>
               {pieza}
            </Pieza>
        </CasillaS>
    )

}


export default Casilla;