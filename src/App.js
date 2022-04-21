import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=46y4p1tzS5ZuZ0dJlUSVtqdxPuoZToupUNYqu1Zj"
      )
      .then((res) => {
        setNasaData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div className="App"></div>;
}

export default App;
