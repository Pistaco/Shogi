import axios from "axios";
import styled from "styled-components";

const Styled = styled.button`
    position: absolute;
    left: 0;
`

const Reset_button = () => {

    const accion = async () => {
        const request = await axios.get("/Flask/Reiniciar")
        console.log(request)
    }
    return(
        <>
            <Styled  onClick={() => accion() }>
                Reset Flask
            </Styled>
        </>
    )
}

export default Reset_button;