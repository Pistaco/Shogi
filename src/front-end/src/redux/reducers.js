import inicialState from "./initial"
import {T_A, C_A, A_A, P_A} from "./type_actions"
import {combineReducers} from "redux"

function tableroReducer(state = inicialState.tablero, action) {
    switch (action.type) {
        case T_A.MOVER:
            const {inicial, final} = action.data.piezas;
            const [x, y] = inicial.coordenadas;
            const [x2, y2] = final.coordenadas;
            const result = [...state];
            console.log("REDUCER TABLERO")
            console.log(result)
            result[x][y].pieza = null;
            result[x2][y2].pieza = inicial.pieza
            return result

        case T_A.SELECCION:
            const [x3, y3] = action.data.coordenada
            const result2 = [...state]
            result2[x3][y3].seleccion = true
            return result2

        default:
            return state
        }
    }

function colorReducer(state = inicialState.color_casillas, action) {
    switch (action.type) {
        case C_A.COLOR_ADD:
            let {cantidad} = state
            console.log("REDUCER: ADD")
            console.log(cantidad)
            return {...state, cantidad: cantidad + 1}

        case C_A.RESET:
            console.log("REDUCER: RESET")
            return {...state, cantidad: 0}

        case C_A.SWITCH:
            const valor = !state.permitir
            return {...state, permitir: valor}
        default:
            console.log("COLOR")
            return state
    }
}

function AutorizacionReducer(state = inicialState.Autorizacion, action) {
    const {type, data} = action
    switch (type) {
        case A_A.REQUEST:
            return {...state, request: data.request}
        case A_A.GET_ERROR:
            return {...state, Error: data.Error}
        case A_A.TURN_DISPLAY:
            const result1 = {...state}
            result1.Error.display = !data.Error.display
            return result1
        default:
            return state
    }
}

function PiezasReducer(state = inicialState.piezas, {data, type}) {
    switch (type) {
        case P_A.INICIAL:
            console.log("UWUWUUWUWUW")
            console.log(data)
            return {...state, inicial: data}
        case P_A.FINAL:
            return {...state, final: data}
        case P_A.BOTH:
            return {...data.piezas}
        default:
            return state
    }
}

export default combineReducers({
    tablero: tableroReducer,
    color: colorReducer,
    autorizacion : AutorizacionReducer,
    piezas: PiezasReducer
})