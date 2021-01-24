import react from "react";
import styled from "styled-components";
import CoordenadaProvider, { CoordenadaContext } from "./contexts/contextCoordenada";
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
      <CoordenadaProvider>
        <AppStyle>
          <Tablero/>
        </AppStyle>
      </CoordenadaProvider>
    </div>
  );
}

export default App;
