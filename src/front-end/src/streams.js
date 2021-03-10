import { BehaviorSubject, Subject } from "rxjs";
import { filter, map, share, tap } from "rxjs/operators";

const $Send = Subject()
const $Epic = Subject()

const $Mover = Subject()
 

const generate_receptor = state => $Mover.asObservable().pipe(
    map(value => state.dispatch({type: "MOVER"}))
)


export { $Receptor_pieza, generate_receptor, $Epic}
export default $Send