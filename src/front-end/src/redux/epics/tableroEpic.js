import { ofType } from "redux-observable"
import { map, mergeMap, pluck, tap } from "rxjs/operators"

const tablero = {
    MOVER: "MOVER"
}


const TableroEpic = ($action, $state) => (
    $action.pipe(
        ofType("MOVER"),
        mergeMap(() =>
            $state.pipe(
                pluck("value", "piezas"),
                tap(console.log),
                map(value => ({
                    type: "mover",
                    data: value 
                }))
            )
        )
    )
)



export default TableroEpic