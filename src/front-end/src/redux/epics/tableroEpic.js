import { ofType } from "redux-observable"
import { map, tap} from "rxjs/operators"

const tablero = {
    MOVER: "MOVER"
}


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