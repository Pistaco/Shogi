// import {merge, mergeMap, tap} from "rxjs/operators"
// import {of, Subject} from "rxjs";
// import {ofType} from "redux-observable";


const {ofType} = require("redux-observable")
const {of, Subject} = require("rxjs")
const {merge, mergeMap, tap, filter} = require("rxjs/operators")

const generateObs = observer =>
    observer.pipe(
            mergeMap(value =>
                merge(
                    observer.pipe(
                        tap(value1 => console.log("ACC1")),
                        ofType("ACCION1"),
                        tap(value => console.log("ACCION 1" + value.data)),
                        ),
                    observer.pipe(
                        tap(value1 => console.log("ACC1")),
                        ofType("ACCION2"),
                        tap(value => console.log("ACCION 1" + value.data)),
                    ),
                ),
            )
        )

const $TEST = new Subject()

// SUCCESS

const $Accion1 = $TEST.pipe(
    tap(value1 => console.log("ACC1")),
    ofType("ACCION1"),
    tap(value => console.log("ACCION 1" + value.data)),
    )

const $Accion2 = $TEST.pipe(
    tap(value1 => console.log("ACC2")),
    ofType("ACCION2"),
    tap(value => console.log("ACCION 2" + value.data)),
)

const $Accion3 = $TEST.pipe(
    tap(value1 => console.log("ACC3")),
    ofType("ACCION3"),
    tap(value => console.log("ACCION 3" + value.data)),
)


$Accion1.pipe(
    merge($Accion2, $Accion3)
).subscribe()


const $TEST2 = new Subject()

$TEST2.pipe(
    filter(value => value === "X"),
    merge(
        $TEST2.pipe(
            tap(value => console.log("1"))
        ),

        $TEST2.pipe(
            tap(value => console.log("2"))
        ),

        $TEST2.pipe(
            tap(value => console.log("3"))
        )
    )
).subscribe()

$TEST2.next("X")

