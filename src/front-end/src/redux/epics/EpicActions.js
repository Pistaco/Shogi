
// TYPE ACTIONS

const color  = {
    "START": "START",
    "ADD": "ADD",
    "CHECK": "CHECK",
    "RESET": "RESET"
}

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
