import react, {useContext, useState} from "react";
import {CoordenadaContext} from "./../contexts/contextCoordenada";
import styled from "styled-components";

const CasillaS = styled.div`
width: 6.5em;
height: 6.5em;
background-color: #DCC27F;
border: 1px solid black;
`;

const Casilla = ({row, column}) => {
    const {coSelecionada, handCoo} = useContext(CoordenadaContext);
    const [coordenada, _] = useState([row, column])
    const [pieza, moverPieza] = useState(null);


    return (
        <CasillaS onClick={() => handCoo(coordenada)}>
            {pieza}
        </CasillaS>
    )

}


export default Casilla;