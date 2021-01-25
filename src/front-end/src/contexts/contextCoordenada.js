import react, { createContext, useEffect, useReducer, useState } from "react";
import Autorizacion from "./../Autorizacion"

export const CoordenadaContext = createContext();
const CoordenadaProvider = (props) => {

    const A_Autorizacion = Autorizacion()
    const [Pinicial, handInicial] = useState(null);
    const [Pfinal, handFinal] = useState(null);
    const [ColorAlarm, AlarmHand] = useState(false);

    const Modificar = (state, propiedades) => {
        const [inicial, objeto] = propiedades;
        const [x, y] = inicial;
        console.log(objeto)
        console.log(x, y);

        state[x][y] = objeto;
        return state;
    };


    const [Tablero_matrix, hand_matrix] = useReducer(Modificar ,[
        ["L","N","S","G","K","G", "S", "N","L"],
        [null,"R",null,null,null,null,null,"B",null,],
        ["P","P","P","P","P","P","P","P","P","P"],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        ["P","P","P","P","P","P","P","P","P","P"],
        [null,"B",null,null,null,null,null,"R",null,],
        ["L","N","S","G","K","G", "S", "N","L"]
    ]
    )

    const Mover_pieza = () => {
        const [x , y] = Pinicial;
        const elemento = Tablero_matrix[x][y];
        console.log(elemento);
        hand_matrix([Pfinal, elemento]);
        hand_matrix([Pinicial, null])
    }

    useEffect(() => {
        if (Pinicial !== null && Pfinal !== null) {

            if(A_Autorizacion) {
            Mover_pieza();
            reiniciarvalores(); 
            }

        }

    }, [Pinicial, Pfinal])

    const reiniciarvalores = () => {
        handInicial(null);
        handFinal(null);
        AlarmHand(false)
    }

    return(
    <CoordenadaContext.Provider
    value={{
        Tablero_matrix,
        handInicial,
        handFinal,
        ColorAlarm,
        AlarmHand
    }}
    >
        {props.children}
    </CoordenadaContext.Provider>
    )
}

export default CoordenadaProvider;