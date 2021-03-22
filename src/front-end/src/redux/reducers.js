import inicialState from "./initial"
import {A_A, C_A, P_A, T_A} from "./type_actions"
import {combineReducers} from "redux"
import {Mover_seleccionados} from "./actions";

function tableroReducer(state = inicialState.tablero, action) {
    switch (action.type) {
        case T_A.MOVER:
            const {inicial, final} = action.data.piezas;
            const [x, y] = inicial.coordenadas;
            const [x2, y2] = final.coordenadas;
            const result = [...state];
            result[x][y].pieza = null;
            result[x2][y2].pieza = inicial.pieza
            return result

        case T_A.MOVER_SELECCIONADOS:
            const seleccionados = []
            const result2 = [...state]
            result2.forEach(value =>
                value.filter(value => value.seleccion).forEach(value => seleccionados.push(value)) )
            const [inicial1, final1] = seleccionados
            const {coordenada: [x0, y0], pieza: pieza0} = inicial1
            const {coordenada: [x1, y1], pieza: pieza1} = final1
            result2[x0][y0].pieza = pieza1
            result2[x1][y1].pieza = pieza0
            return result2

        case T_A.SELECCION:
            console.log("SELEC")
            const [x3, y3] = action.data.coordenada
            const result3 = [...state]
            result3[x3][y3].seleccion = !result3[x3][y3].seleccion
            return result3

        default:
            return state
        }
    }

function colorReducer(state = inicialState.color_casillas, action) {
    switch (action.type) {
        case C_A.COLOR_ADD:
            let {cantidad} = state
            return {...state, cantidad: cantidad + 1}

        case C_A.RESET:
            return {...state, cantidad: 0}

        case C_A.SWITCH:
            const valor = !state.permitir
            return {...state, permitir: valor}
        default:
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