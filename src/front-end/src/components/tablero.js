import react, { useState } from "react";
import styled from "styled-components"

const Aa = styled.p`
width: 50px;
background-color: red;
`

const for_helper = element => {
    const retu = []
    for(let i = 1; i < 10; i++) {
        retu.push(element);
    }
    return retu;
}

const Tablero = () => {
    return(
        <div>
            <CasillaS>
            </CasillaS>
        </div>
    )
}

const Columna = () => {
    return (
        Casilla
    )
}

const Casilla = ({color}) => {

    const pieza = useState(null);

    const CasillaS = styled.div`
    width: 6em;
    height: 6em;
    background-color: ${color};
`
    return (
        <CasillaS>
        </CasillaS>
    )

}

export default Tablero;