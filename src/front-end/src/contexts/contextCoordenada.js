import react, { createContext, useEffect, useState } from "react";

export const CoordenadaContext = createContext();
const CoordenadaProvider = (props) => {
    const [coSelecionada, handCoo] = useState(null);

    useEffect(() => {
        console.log(coSelecionada);
    }, [coSelecionada]);


    return(
    <CoordenadaContext.Provider
    value={{
        coSelecionada,
        handCoo
    }}
    >
        {props.children}
    </CoordenadaContext.Provider>
    )
}

export default CoordenadaProvider;