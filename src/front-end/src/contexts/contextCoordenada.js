import react, { createContext, useEffect, useReducer, useState } from "react";

export const CoordenadaContext = createContext();
const CoordenadaProvider = (props) => {
    const [coSelecionada, handCoo] = useState(null);

    const Modificar = (state, propiedades) => {
        const [inicial, objeto] = propiedades;
        const [x, y] = inicial;
        console.log(objeto)
        console.log(x, y);

        state[x - 1][y - 1] = objeto;
        return state;
    };


    const [Tablero_matrix, hand_matrix] = useReducer(Modificar ,[
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
    ]
    )

    useEffect(() => {
        console.log(Tablero_matrix);
    }, [Tablero_matrix])

    return(
    <CoordenadaContext.Provider
    value={{
        coSelecionada,
        handCoo,
        Tablero_matrix,
        hand_matrix
    }}
    >
        {props.children}
    </CoordenadaContext.Provider>
    )
}

export default CoordenadaProvider;