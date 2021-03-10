import styled from "styled-components";
import { useMemo } from "react"

const Pieza = styled.div`
display: flex;
justify-content: center;
font-size: 3rem;
`

const CasillaS = styled.div`
width: 6.5em;
height: 6.5em;
border: 1px solid black;
`;

const CasillaUI = ({pieza, colorS, onClick}) => {

    const color = useMemo(() => ({
        backgroundColor: colorS ? "#EFE46B" : "#DCC27F"
    }), [colorS])

    return (
        <CasillaS style={color} onClick={onClick}>
            <Pieza>
                {pieza}
            </Pieza>
        </CasillaS>
    )
}

export default CasillaUI