
// TYPE ACTIONS


const tablero = {
    MOVER: "MOVER"
}

// ACTIONS
export const START_COLOR = (state) => {
    state.dispatch({
        type: "ADD"
    })
    state.dispatch({
        type: "CHECK"
    })
}

export const sendOFF = () => ({
    type: "SEND_OFF"
})
