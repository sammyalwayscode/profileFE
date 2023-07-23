import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Blocks/Card";
import styled from "styled-components";
import SubmmitProfile from "./components/Blocks/SubmmitProfile";

function App() {
  return (
    <Div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <H2>Users Profile</H2>
      <div>
        <SubmmitProfile />
      </div>
      <div>
        <Card />
      </div>
    </Div>
  );
}

export default App;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.div`
  font-size: 20px;
  font-weight: 800;
`;
