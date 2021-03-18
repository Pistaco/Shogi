// import {merge, mergeMap, tap} from "rxjs/operators"
// import {of, Subject} from "rxjs";
// import {ofType} from "redux-observable";


const {ofType} = require("redux-observable")
const {of,  Subject} = require("rxjs")
const {filter, map, concat, concatMap, mergeMap} = require("rxjs/operators")



const generateObserver = () => (new Subject())
    .pipe(
        filter(value => value.data > 5),
        mergeMap(value =>
            of().pipe(
                concat(
                    of(value).pipe(
                        ofType("action1"),
                        map(value => ({...value, modificado: true}))
                    ),
                    of(value).pipe(
                        ofType("action2"),
                        map(value => ({...value, modificado: true}))
                    ),
                    of(value).pipe(
                        ofType("action3"),
                        map(value => "UWU"),
                    ),
                )
            )
        )
    )
