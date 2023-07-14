import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div>
      <nav className={"nav"}>
        <p>0 bulbs</p>
        <Counter count={0} text={"rows"} />
        <Counter count={0} text={"columns"} />
      </nav>
    </div>
  );
}

export default App;
