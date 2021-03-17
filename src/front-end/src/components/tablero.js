import styled from "styled-components";

import Casilla from "./../casilla/index"
import UseAlert from "./Alert";
import Reset from "./reset_button";

import state_managent from "./../redux/index";

const TableroS = styled.div`
display: flex;
padding: 0;
`

const ColumnaS = styled.div`
display: flex;
flex-direction: column;
`

export const state = state_managent()

const Tablero = () => {
    const [Alert, display1, handMens] = UseAlert()
    const [display, Handisplay] = display1

    return(
        <>
            <Reset/>
            {display ? <Alert/> : null}
            <TableroS>
                <Columna column={0}/>
                <Columna column={1}/>
                <Columna column={2}/>
                <Columna column={3}/>
                <Columna column={4}/>
                <Columna column={5}/>
                <Columna column={6}/>
                <Columna column={7}/>
                <Columna column={8}/>
            </TableroS>
        </>
    )

}


const Columna = ({column}) => {
    return ( 
        <ColumnaS>
            <Casilla column={column} row={0}/>
            <Casilla column={column} row={1}/>
            <Casilla column={column} row={2}/>
            <Casilla column={column} row={3}/>
            <Casilla column={column} row={4}/>
            <Casilla column={column} row={5}/>
            <Casilla column={column} row={6}/>
            <Casilla column={column} row={7}/>
            <Casilla column={column} row={8}/>
        </ColumnaS>

    )
}

export default Tablero;