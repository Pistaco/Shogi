import {T_A, C_A, A_A, P_A} from "./type_actions"
import { ofType } from "redux-observable";
import { map, tap, mergeMap } from "rxjs/operators"
import { iif, pipe } from "rxjs";

const color = "color"

const RootEpic = ($action, store) => (
    $action.pipe(
        ofType("test"),
        map(() => RootColor($action, store.color_casillas))
    )
)

const RootColor = ($action, store) => (
    $action.pipe(
        tap(() => console.log(store)),
        ofType(color),
            iif(
                () => store.cantidad == 2,
                () => ({type: C_A.RESET}),
                () => ({type: C_A.COLOR_ADD})
            )
        )
)








export default RootEpic