import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Img from "./Components/Img";
import Text from "./Components/Text";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=46y4p1tzS5ZuZ0dJlUSVtqdxPuoZToupUNYqu1Zj"
      )
      .then((res) => {
        setNasaData(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="App">
      <Header />
      <Img nasaData={nasaData} />
      <Text nasaData={nasaData} />
    </div>
  );
}

export default App;
