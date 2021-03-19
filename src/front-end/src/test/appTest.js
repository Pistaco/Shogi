import styled from "styled-components";
import Casilla, {dispatch} from "./casilla_test"
import react, {useState} from "react"

const Tablero = styled.div`
    width: 500px;
    height: 500px;
    border: #11557C solid 10px;
    display: flex;
    
`

const BotonStyle = styled.button`
width: 100px;
height: 100px;
color: #9C1A1C;
border: burlywood solid 10px;
`


const Test = () => {
    const [piezaCont, set] = useState("")
    const [lista, handLista] = useState([])

    return (
        <Tablero>
            <BotonStyle onClick={() => dispatch({
                type: "OFFCOLOR",
                data: {coordenada: [0, 0]}
            })}/>
            <div>
                <Casilla piezaCont={piezaCont} set={set} />
                <Casilla piezaCont={piezaCont} set={set} />
                <Casilla piezaCont={piezaCont} set={set} />
                <Casilla piezaCont={piezaCont} set={set} />
            </div>
        </Tablero>
    )
}

export default Test