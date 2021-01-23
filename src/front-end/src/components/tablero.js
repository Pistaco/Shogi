import react, { createContext, useContext, useState } from "react";
import styled from "styled-components"

const for_helper = (element) => {
    const retu = []
    for(let i = 1; i < 10; i++) {
        retu.push(element);
    }
    return retu;
}

const Tablero = () => {

    const TableroS = styled.div`
    display: flex;
    padding: 0;
    `

    return(
        <TableroS>
            <Columna></Columna>
            <Columna></Columna>
            <Columna></Columna>
            <Columna></Columna>
            <Columna></Columna>
            <Columna></Columna>
            <Columna></Columna>
            <Columna></Columna>
            <Columna></Columna>
        </TableroS>
    )
}

const Columna = () => {
    const ColumnaS = styled.div`
    display: flex;
    flex-direction: column;
    `
    return ( 
        <ColumnaS>{for_helper(<Casilla/>)}</ColumnaS>
    )
}

const Casilla = () => {

    const pieza = useState(null);
    const colorS = (seleccion) => {
        let variable = ""
        if (seleccion === "black"){
            variable = "white"
            return;
        }
        variable = "black"
    }
    colorS();

    const CasillaS = styled.div`
    width: 6em;
    height: 6em;
    background-color: black;
`
    return (
        <CasillaS>
        </CasillaS>
    )

}

export default Tablero;