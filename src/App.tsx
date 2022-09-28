import { useState } from "react";
import "./App.css";
import Home from "./component/Home";
import { IUser, useUserStore } from "./store/store";
import shallow from "zustand/shallow";

function App() {
  const [inputData, setInputData] = useState<IUser>({
    name: "",
    age: 0,
  });
  const { create, add } = useUserStore((state) => state, shallow);

  console.log("data", inputData);
  return (
    <div className="App">
      <label>name</label>
      <input
        name="name"
        value={inputData.name}
        onChange={(e: any) => {
          setInputData((prev: any) => ({ ...prev, name: e.target.value }));
        }}
      />
      <label>address</label>
      <input
        name="age"
        value={inputData.age}
        onChange={(e: any) =>
          setInputData((prev: any) => ({
            ...prev,
            age: e.target.value,
          }))
        }
      />
      <button onClick={() => add(inputData)}>Add</button>
      <Home />
    </div>
  );
}

export default App;
