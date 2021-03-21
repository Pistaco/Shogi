
// TYPE ACTIONS


const tablero = {
    MOVER: "MOVER"
}

// ACTIONS
export const START_COLOR = (state, coordenada) => {
    state.dispatch({
        type: "START",
        data: {
            coordenada,
        }
    })
    state.dispatch({
        type: "CHECK",
        data: {
            coordenada,
        }
    })
}

export const sendOFF = () => ({
    type: "SEND_OFF"
})
