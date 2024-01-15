import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import axios from "axios";

function App() {
  const [token] = useState(
    JSON.parse(localStorage.getItem("token"))
      ? JSON.parse(localStorage.getItem("token")).token
      : ""
  );

  const logout = async () => {
    const res = await axios.get("http://localhost:8080/user/logout", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(res.data);
  };
  return (
    <div className="App">
      <button onClick={logout}>Logout</button>
      <br />
      <Navbar />
    </div>
  );
}

export default App;
