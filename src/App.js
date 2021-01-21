import "./App.css";
import { ReactIfElse, Rif, Relif, Relse } from "./React-If-Else/ReactIfElse";

function App() {
  return (
    <div className="App">
      <ReactIfElse>
        <Rif expr="true">This is IF</Rif>
        <Relif expr="false">This is ELSE IF</Relif>
        <Relse>This is ELSE</Relse>
      </ReactIfElse>
    </div>
  );
}

export default App;
