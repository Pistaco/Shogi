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
)

const $TEST3 = new Subject()

const $OBS = value => of(1, 2, 3).pipe(tap(valor => console.log(`MERGE 1: EXTERIOR ${value} INTERIOR ${valor}`)))
const $OBS2 = value => of(6, 7, 8).pipe(tap(valor => console.log(`MERGE 2: EXTERIOR ${value} INTERIOR ${valor}`)))
const $MERGE = $TEST3.pipe(
    mergeMap(value => $OBS(value))
)

of(1, 2 , 3).pipe(
    concat(
        of(4, 5 , 6)
    ),
    filter(value => value > 3),
    switchMap(value => of(value, "UWU")),
    concat(of("COMPLETED")),
)
    .subscribe(next => console.log(next))


// FINAL


of(
    {type: "action1", data: 1},
    {type: "action2", data: 12},
    {type: "action3", data: 3},
    {type: "action1", data: 5},
    {type: "action2", data: 11},
    {type: "action3", data: 16},
)
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
                        map(value => ({...value, carita: () => console.log(":)") })),
                        tap(value => value.carita())
                    ),
                )
            )
        )
    ).subscribe(console.log)
