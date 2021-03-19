// import {merge, mergeMap, tap} from "rxjs/operators"
// import {of, Subject} from "rxjs";
// import {ofType} from "redux-observable";


const {ofType} = require("redux-observable")
const {of,  Subject} = require("rxjs")
const {pluck, filter, map, tap, concat, concatMap, mergeMap} = require("rxjs/operators")




const ProtypeState = {
    data: {pieza: "HW"},
    getState: () => ProtypeState.data
}

// Type_actions
const OFF_COLOR = "OFFCOLOR"
const ACTUALIZAR_PIEZA = "ACTPIEZA"

//

const casillaObs = () => (new Subject())
    .pipe(
        mergeMap(value => of(value).pipe(
            pluck("data", "coordenada"),
            filter(([x, y]) => x === 0 && y === 0),
            map(valor => value),
        )),
        mergeMap(value =>
            of().pipe(
                concat(
                    of(value).pipe(
                        ofType(OFF_COLOR),
                        tap(value => console.log("COLOR APAGADO"))
                    ),
                    of(value).pipe(
                        ofType(ACTUALIZAR_PIEZA),
                        mergeMap(value =>
                            of(ProtypeState.getState()).pipe(
                                pluck("pieza"),
                                map(valor => ({...value, pieza: valor})),
                                )
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

export default casillaObs