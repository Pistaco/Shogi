import {T_A, C_A, A_A, P_A} from "./type_actions"
import state from "./redux"


const Mover = () => {
    const {piezas} = state.getState()
    return {
        type: T_A.MOVER,
        data: {...piezas}
    }
}

const Color = parametro => {
    switch (parametro) {
        case "add":
            return {type: C_A.COLOR_ADD}
        case "reset":
            return {type: C_A.RESET}
        case "switch":
            return {type: C_A.SWITCH}
    }
}

const Piezas = (coordenada, pieza, opcion="inicial") => ({
    type: opcion === "inicial" ?  P_A.INICIAL : P_A.FINAL,
    data: {
        coordenada: coordenada,
        pieza: pieza
    }
    })



const Auto = data => {
    const bool = data === "True" ? true : false
    return {
        type: A_A.REQUEST, 
        data: {
            request: data
        }
    }
}

const Error = (info, detalles) => ({
    type: A_A.GET_ERROR,
    data: {
        info: info,
        detalles: detalles
    }
})

const Display = () => ({
    type: A_A.TURN_DISPLAY
})
    


