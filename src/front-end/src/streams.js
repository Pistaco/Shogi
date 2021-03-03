import { BehaviorSubject, Subject } from "rxjs";


const $Color = new BehaviorSubject(0)
const $Casilla = new BehaviorSubject(0) 
const $Mover = new Subject()


export { $Color, $Mover}
export default $Casilla 