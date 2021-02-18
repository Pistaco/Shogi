import styled from "styled-components";
import Casilla from "./casilla"
import CoordenadaProvider from "./../contexts/contextCoordenada";
import UseAlert from "./Alert";
import Reset from "./reset_button";


const TableroS = styled.div`
display: flex;
padding: 0;
`

const ColumnaS = styled.div`
display: flex;
flex-direction: column;
`



const Tablero = () => {
    const [Alert, display1, handMens] = UseAlert()
    const [display, Handisplay] = display1
    return(
        <>
            <Reset/>
            {display ? <Alert/> : null}
            <TableroS>
                <CoordenadaProvider Hand={[Handisplay, handMens]}>
                    <Columna column={0}></Columna>
                    <Columna column={1}></Columna>
                    <Columna column={2}></Columna>
                    <Columna column={3}></Columna>
                    <Columna column={4}></Columna>
                    <Columna column={5}></Columna>
                    <Columna column={6}></Columna>
                    <Columna column={7}></Columna>
                    <Columna column={8}></Columna>
                </CoordenadaProvider>
            </TableroS>
        </>
    )

}


const Columna = ({column}) => {
    return ( 
        <ColumnaS>
            <Casilla column={column} row={0}></Casilla>
            <Casilla column={column} row={1}></Casilla>
            <Casilla column={column} row={2}></Casilla>
            <Casilla column={column} row={3}></Casilla>
            <Casilla column={column} row={4}></Casilla>
            <Casilla column={column} row={5}></Casilla>
            <Casilla column={column} row={6}></Casilla>
            <Casilla column={column} row={7}></Casilla>
            <Casilla column={column} row={8}></Casilla>
        </ColumnaS>

    )
}


export default Tablero;