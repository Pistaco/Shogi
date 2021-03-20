import { ofType } from "redux-observable"
import { map } from "rxjs/operators"



const TableroEpic = ($action, $state) => (
    $action.pipe(
        ofType("MOVER"),
        map(value => ({
            type: "mover",
            data: {
                piezas: $state.value.piezas
            }
        })
    )
)
)



export default TableroEpic