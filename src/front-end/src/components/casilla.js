import react, {useContext, useState} from "react";
import styled from "styled-components";

const CasillaS = styled.div`
width: 6.5em;
height: 6.5em;
background-color: #DCC27F;
border: 1px solid black;
`;

const Casilla = ({row, column}) => {
    const [coordenada, _] = useState([row, column])
    const [pieza, moverPieza] = useState(null);


    return (
        <CasillaS>
            {pieza}
        </CasillaS>
    )

}


export default Casilla;