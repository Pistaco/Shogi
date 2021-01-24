import react from "react";
import styled from "styled-components";
import CoordenadaProvider from "./contexts/contextCoordenada";
import Tablero from "./components/tablero";

const AppStyle = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #4D7C8A;
  margin: 0;
`;

function App() {
  return (
    <div className="App">
        <AppStyle>
          <Tablero/>
        </AppStyle>
    </div>
  );
}

export default App;
