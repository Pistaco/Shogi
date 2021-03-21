// import {merge, mergeMap, tap} from "rxjs/operators"
// import {of, Subject} from "rxjs";
// import {ofType} from "redux-observable";

const {ofType} = require("redux-observable")
const {of,  Subject} = require("rxjs")
const {pluck, filter, map, tap, concat, concatMap, mergeMap} = require("rxjs/operators")


// Type_actions
const OFF_COLOR = "OFFCOLOR"
const ACTUALIZAR_PIEZA = "ACTPIEZA"

//

// Actions
export const offColor = value => ({
    type: OFF_COLOR,
    data: {
        coordenada: value
    }
})

// SUBJECTS

const OBScasilla = new Subject()

const casillaObs = (casilla, [row, column]) => OBScasilla
    .pipe(
        mergeMap(value => of(value).pipe(
            pluck("data", "coordenada"),
            filter(([x, y]) => x === row && y === column),
            map(valor => value),
        )),
        mergeMap(value =>
            of().pipe(
                concat(
                    of(value).pipe(
                        ofType(OFF_COLOR),
                        tap(value => casilla.OFF_COLOR())
                    ),
                    of(value).pipe(
                        ofType(ACTUALIZAR_PIEZA),
                        tap(value => console.log("ACTION2")
                        ),
                    ),
                    of(value).pipe(
                        ofType("action3"),
                        map(value => "UWU"),
                    ),
                )
            )
        )
    )

//

// SOFTWARE PACKING

export default {
    obs: OBScasilla,
    dispatch: next => OBScasilla.next(next),
    listen: (casilla, coordenadas) => casillaObs(casilla,coordenadas).subscribe()
}

//