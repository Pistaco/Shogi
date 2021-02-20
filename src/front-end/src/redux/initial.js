
const tablero_inicial = [
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

const pieza = () => ({
    "pieza": null,
    "coordenada": null
})

const inicialState = {
    "tablero": tablero_inicial,
    "piezas": {
        "inicial": pieza(),
        "final": pieza(),
    },
    "color_casillas": {
        "cantidad": 0,
        "permitir": false
    },

    "Autorizacion": {
        "request": false,
        "Error": {
            "info": null,
            "detalles": null,
            "display": false 
        }
    }

}

export default inicialState