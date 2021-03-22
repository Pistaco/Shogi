import {T_A, C_A, A_A, P_A} from "./type_actions"

export const Mover = state => {
    const { piezas } = state.getState()
    return {
        type: T_A.MOVER,
        data: {...piezas}
    }
}

export const Mover_seleccionados = () => ({
    type: T_A.MOVER_SELECCIONADOS
})

export const Seleccion = coordenada => ({
    type: T_A.SELECCION,
    data: {
        coordenada,
    }
})

export const Color = parametro => {
    switch (parametro) {
        case "add":
            return {type: C_A.COLOR_ADD}
        case "reset":
            return {type: C_A.RESET}
        case "switch":
            return {type: C_A.SWITCH}
        default:
            return {type: null}
    }
}

export const Piezas = (coordenada, opcion="inicial", pieza=null) => ({
    type: opcion === "inicial" ?  P_A.INICIAL : P_A.FINAL,
    data:  {
        coordenada: coordenada,
        pieza: pieza
    }
    })



export const Auto = data => ({
    type: A_A.REQUEST, 
    data: {
        request: data === "True"
        }
    })
    


export const Error = (info, detalles) => ({
    type: A_A.GET_ERROR,
    data: {
        info: info,
        detalles: detalles
    }
})

export const Display = () => ({
    type: A_A.TURN_DISPLAY
})
    


