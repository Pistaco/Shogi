import react, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";


const CasillaS = styled.div`
width: 6.5em;
height: 6.5em;
background-color: #DCC27F;
border: 1px solid black;
`;

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
            <Columna column={1}></Columna>
            <Columna column={2}></Columna>
            <Columna column={3}></Columna>
            <Columna column={4}></Columna>
            <Columna column={5}></Columna>
            <Columna column={6}></Columna>
            <Columna column={7}></Columna>
            <Columna column={8}></Columna>
            <Columna column={9}></Columna>
        </TableroS>
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

const Casilla = ({row, column}) => {
    const [coordenada, _] = useState([row, column])
    const [pieza, moverPieza] = useState(null);


    return (
        <CasillaS>
            {pieza}
        </CasillaS>
    )

}


export default Tablero;