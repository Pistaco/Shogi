import react, { createContext, useContext, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Casilla from "./casilla"

import CoordenadaProvider from "./../contexts/contextCoordenada";


const TableroS = styled.div`
display: flex;
padding: 0;
`

const ColumnaS = styled.div`
display: flex;
flex-direction: column;
`



const Tablero = () => {


    return(
        <TableroS>
            <ListaColumna>
        <CoordenadaProvider>
            <Columna column={1}></Columna>
            <Columna column={2}></Columna>
            <Columna column={3}></Columna>
            <Columna column={4}></Columna>
            <Columna column={5}></Columna>
            <Columna column={6}></Columna>
            <Columna column={7}></Columna>
            <Columna column={8}></Columna>
            <Columna column={9}></Columna>
        </CoordenadaProvider>
            </ListaColumna>
        </TableroS>
    )

}

const ListaColumna = (props) => {
    return (
        props.children
    )
}


const Columna = ({column}) => {
    return ( 
        <ColumnaS>
            <Casilla column={column} row={1}></Casilla>
            <Casilla column={column} row={2}></Casilla>
            <Casilla column={column} row={3}></Casilla>
            <Casilla column={column} row={4}></Casilla>
            <Casilla column={column} row={5}></Casilla>
            <Casilla column={column} row={6}></Casilla>
            <Casilla column={column} row={7}></Casilla>
            <Casilla column={column} row={8}></Casilla>
            <Casilla column={column} row={9}></Casilla>
        </ColumnaS>

    )
}


export default Tablero;