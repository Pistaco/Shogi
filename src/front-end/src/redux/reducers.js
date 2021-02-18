import inicialState from "./initial"
import {T_A, C_A, A_A, P_A} from "./type_actions"
import {combineReducers} from "redux"

function tableroReducer(state = inicialState.tablero, action) {
    switch (action.type) {
        case T_A.MOVER:
            const {inicial, final} = action.data.piezas;
            const [x, y] = inicial.coordenada;
            const [x2, y2] = final.coordenada;
            const result = [...state];
            result.tablero[x][y] = null;
            result.tablero[x2, y2] = inicial.pieza
            return result
        }
    }

function colorReducer(state = inicialState.color_casillas, action) {
    switch (action.type) {
        case C_A.COLOR_ADD:
            return {...state, cantidad: this.cantidad++}

        case C_A.RESET:
            return {...state, cantidad: 0}

        case C_A.SWITCH:
            const valor = state.permitir ? false : true
            return {...state, permitir: valor}
    }
}

function AutorizacionReducer(state = inicialState.Autorizacion, action) {
    const {type, data: {Error, request}} = action
    switch (type) {
        case A_A.REQUEST:
            return {...state, request: request}
        case A_A.GET_ERROR:
            return {...state, Error: Error}
        case A_A.TURN_DISPLAY:
            const result1 = {...state}
            result1.Error.display = Error.display ? false : true
            return result1
    }
}

function PiezasReducer(state = inicialState.piezas, {data, type}) {
    switch (type) {
        case P_A.INICIAL:
            return {...state, inicial: data.piezas.inicial}
        case P_A.FINAL:
            return {...state, final: data.piezas.final}
        case P_A.BOTH:
            return {...data.piezas}
    }
}

export default combineReducers({
    tablero: tableroReducer,
    color: colorReducer,
    autorizacion : AutorizacionReducer,
    piezas: PiezasReducer
})