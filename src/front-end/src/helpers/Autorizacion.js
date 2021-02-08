import axios from "axios";

const autorizacion = async (hand, inicial, Final, hand2) => {
    const send = JSON.stringify({"inicial": inicial, "final": Final})
    const [handDisplay, handMens] = hand2;
    const request = await axios.post("/Flask", send);

    const sub_verificador = () => {
        if(request.data === "True") {
            hand(true);
        }
        else {
            hand(false);
            sub_verificador2()
        }
    }

    const sub_verificador2 = async() => {
        const request = await axios.get("/Flask/Error");
        console.log(request)
        handMens(request.data);
        handDisplay(true)
    }

    sub_verificador()

}
const _autorizacion = (hand, inicial, final) => {
    hand(true)
}

export default autorizacion
