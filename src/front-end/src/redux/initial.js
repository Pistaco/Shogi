
const tablero_inicial = [[{"pieza":"LW","seleccion":false,"coordenada":[0,0]},{"pieza":"NW","seleccion":false,"coordenada":[0,1]},{"pieza":"SW","seleccion":false,"coordenada":[0,2]},{"pieza":"GW","seleccion":false,"coordenada":[0,3]},{"pieza":"KW","seleccion":false,"coordenada":[0,4]},{"pieza":"GW","seleccion":false,"coordenada":[0,5]},{"pieza":"SW","seleccion":false,"coordenada":[0,6]},{"pieza":"NW","seleccion":false,"coordenada":[0,7]},{"pieza":"LW","seleccion":false,"coordenada":[0,8]}],[{"pieza":null,"seleccion":false,"coordenada":[1,0]},{"pieza":"RW","seleccion":false,"coordenada":[1,1]},{"pieza":null,"seleccion":false,"coordenada":[1,2]},{"pieza":null,"seleccion":false,"coordenada":[1,3]},{"pieza":null,"seleccion":false,"coordenada":[1,4]},{"pieza":null,"seleccion":false,"coordenada":[1,5]},{"pieza":null,"seleccion":false,"coordenada":[1,6]},{"pieza":"BW","seleccion":false,"coordenada":[1,7]},{"pieza":null,"seleccion":false,"coordenada":[1,8]}],[{"pieza":"PW","seleccion":false,"coordenada":[2,0]},{"pieza":"PW","seleccion":false,"coordenada":[2,1]},{"pieza":"PW","seleccion":false,"coordenada":[2,2]},{"pieza":"PW","seleccion":false,"coordenada":[2,3]},{"pieza":"PW","seleccion":false,"coordenada":[2,4]},{"pieza":"PW","seleccion":false,"coordenada":[2,5]},{"pieza":"PW","seleccion":false,"coordenada":[2,6]},{"pieza":"PW","seleccion":false,"coordenada":[2,7]},{"pieza":"PW","seleccion":false,"coordenada":[2,8]},{"pieza":"PW","seleccion":false,"coordenada":[2,9]}],[{"pieza":null,"seleccion":false,"coordenada":[3,0]},{"pieza":null,"seleccion":false,"coordenada":[3,1]},{"pieza":null,"seleccion":false,"coordenada":[3,2]},{"pieza":null,"seleccion":false,"coordenada":[3,3]},{"pieza":null,"seleccion":false,"coordenada":[3,4]},{"pieza":null,"seleccion":false,"coordenada":[3,5]},{"pieza":null,"seleccion":false,"coordenada":[3,6]},{"pieza":null,"seleccion":false,"coordenada":[3,7]},{"pieza":null,"seleccion":false,"coordenada":[3,8]}],[{"pieza":null,"seleccion":false,"coordenada":[4,0]},{"pieza":null,"seleccion":false,"coordenada":[4,1]},{"pieza":null,"seleccion":false,"coordenada":[4,2]},{"pieza":null,"seleccion":false,"coordenada":[4,3]},{"pieza":null,"seleccion":false,"coordenada":[4,4]},{"pieza":null,"seleccion":false,"coordenada":[4,5]},{"pieza":null,"seleccion":false,"coordenada":[4,6]},{"pieza":null,"seleccion":false,"coordenada":[4,7]},{"pieza":null,"seleccion":false,"coordenada":[4,8]}],[{"pieza":null,"seleccion":false,"coordenada":[5,0]},{"pieza":null,"seleccion":false,"coordenada":[5,1]},{"pieza":null,"seleccion":false,"coordenada":[5,2]},{"pieza":null,"seleccion":false,"coordenada":[5,3]},{"pieza":null,"seleccion":false,"coordenada":[5,4]},{"pieza":null,"seleccion":false,"coordenada":[5,5]},{"pieza":null,"seleccion":false,"coordenada":[5,6]},{"pieza":null,"seleccion":false,"coordenada":[5,7]},{"pieza":null,"seleccion":false,"coordenada":[5,8]}],[{"pieza":"PB","seleccion":false,"coordenada":[6,0]},{"pieza":"PB","seleccion":false,"coordenada":[6,1]},{"pieza":"PB","seleccion":false,"coordenada":[6,2]},{"pieza":"PB","seleccion":false,"coordenada":[6,3]},{"pieza":"PB","seleccion":false,"coordenada":[6,4]},{"pieza":"PB","seleccion":false,"coordenada":[6,5]},{"pieza":"PB","seleccion":false,"coordenada":[6,6]},{"pieza":"PB","seleccion":false,"coordenada":[6,7]},{"pieza":"PB","seleccion":false,"coordenada":[6,8]}],[{"pieza":null,"seleccion":false,"coordenada":[7,0]},{"pieza":"BB","seleccion":false,"coordenada":[7,1]},{"pieza":null,"seleccion":false,"coordenada":[7,2]},{"pieza":null,"seleccion":false,"coordenada":[7,3]},{"pieza":null,"seleccion":false,"coordenada":[7,4]},{"pieza":null,"seleccion":false,"coordenada":[7,5]},{"pieza":null,"seleccion":false,"coordenada":[7,6]},{"pieza":"RB","seleccion":false,"coordenada":[7,7]},{"pieza":null,"seleccion":false,"coordenada":[7,8]}],[{"pieza":"LB","seleccion":false,"coordenada":[8,0]},{"pieza":"NB","seleccion":false,"coordenada":[8,1]},{"pieza":"SB","seleccion":false,"coordenada":[8,2]},{"pieza":"GB","seleccion":false,"coordenada":[8,3]},{"pieza":"KB","seleccion":false,"coordenada":[8,4]},{"pieza":"GB","seleccion":false,"coordenada":[8,5]},{"pieza":"SB","seleccion":false,"coordenada":[8,6]},{"pieza":"NB","seleccion":false,"coordenada":[8,7]},{"pieza":"LB","seleccion":false,"coordenada":[8,8]}]]


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