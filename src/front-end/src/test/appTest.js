import styled from "styled-components";
import Casilla from "./casilla_test"
import react, {useState} from "react"


const Tablero = styled.div`
    width: 500px;
    height: 500px;
    border: solid black 20px;
`


const Test = () => {
    const [contador, setCont] = useState(0)
    return (
        <div>
            <h1>{contador}</h1>
            <div>
                <Casilla />
                <Casilla/>
                <Casilla/>
                <Casilla/>
            </div>
        </div>
    )
}

export default Test