import "./App.css";
import Home from "./assets/pages/Home";
import Login from "./assets/components/Login";
import { useState } from "react";

function App() {
  const [id, setId] = useState<string>("");
  console.log(id);
  return <>{id ? <Home /> : <Login onIdSubmit={setId} />}</>;
}

export default App;
