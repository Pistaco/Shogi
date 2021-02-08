import react, { useState } from "react";
import styled from "styled-components";


const Alert_S = styled.div`
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    top: 40%;
    width: 30rem;
    height: 10rem;
    background-color: #87F1FF;
    display: flex;
    flex-direction: column;
    
    h1, p, button{
        margin: 1rem;
    }
    
    button{
        width: 25%;
        position: relative;
        align-self: flex-end;
        top: -10px;
        }
`

const useAlert = () => {
    const [display, Handisplay] = useState(false);
    const [mensaje, handMens] = useState(null);

    const Alert = () => {
        return(
            <Alert_S>
                    <h1>
                        Movimiento Equivocado
                    </h1>
                    <p>
                        {mensaje}
                    </p>
                    <button onClick={() => Handisplay(false)}>
                        Okey
                    </button>
            </Alert_S>
    )
    }
    return [Alert, [display, Handisplay], handMens]
}


export default useAlert;