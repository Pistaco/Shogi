import react, { createContext, useEffect, useReducer, useState } from "react";
import autorizacion from "../helpers/Autorizacion";

export const CoordenadaContext = createContext();
const CoordenadaProvider = (props) => {
    const hand = props.Hand

    const [Auto_state, handAuto] = useState(null)
    const [Pinicial, handInicial] = useState(null);
    const [Pfinal, handFinal] = useState(null);
    const [ColorAlarm, AlarmHand] = useState(false);

    const Modificar = (state, propiedades) => {
        const [inicial, objeto] = propiedades;
        const [x, y] = inicial;
        state[x][y] = objeto;
        return state;
    };


    const [Tablero_matrix, hand_matrix] = useReducer(Modificar ,[
        ["LW","NW","SW","GW","KW","GW", "SW", "NW","LW"],
        [null,"RW",null,null,null,null,null,"BW",null,],
        ["PW","PW","PW","PW","PW","PW","PW","PW","PW","PW"],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        [null,null,null,null,null,null,null,null,null,],
        ["PB","PB","PB","PB","PB","PB","PB","PB","PB",],
        [null,"BB",null,null,null,null,null,"RB",null,],
        ["LB","NB","SB","GB","KB","GB", "SB", "NB","LB"]
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
            autorizacion(handAuto, Pinicial, Pfinal, hand);
        }
    }, [Pinicial, Pfinal])

    useEffect(() => {
        if(Auto_state) {
            Mover_pieza();
            console.log(`Inicial: ${Pinicial} Final: ${Pfinal}`)
            reiniciarvalores();
            handAuto(false)
        }

        else {
            reiniciarvalores();
            handAuto(null);
        }
    }, [Auto_state])

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