import "./App.css";
import { Counter } from "./components/Counter";
import { Text } from "./components/Text";
import { SingleLight } from "./components/SingleLight";
import { useState } from "react";
import { Grid } from "./components/Grid";

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const handleIncrementRow = () => {
    setRows(rows + 1);
  };
  const handleDecrementRow = () => {
    if (rows <= 0) {
      return;
    }
    setRows(rows - 1);
  };

  const handleIncrementColumn = () => {
    if (columns >= 9) {
      return;
    }
    setColumns(columns + 1);
  };
  const handleDecrementColumn = () => {
    if (columns <= 0) {
      return;
    }
    setColumns(columns - 1);
  };

  const totalLights = rows * columns;

  const lights = Array.from({ length: totalLights });

  return (
    <div>
      <nav className={"nav"}>
        <Text>0 bulbs</Text>
        <Counter
          count={rows}
          text={"rows"}
          onIncrement={handleIncrementRow}
          onDecrement={handleDecrementRow}
        />
        <Counter
          count={columns}
          text={"columns"}
          onIncrement={handleIncrementColumn}
          onDecrement={handleDecrementColumn}
        />
      </nav>
      <Grid columns={columns}>
        {lights.map((value, idx) => {
          return <SingleLight key={idx} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
