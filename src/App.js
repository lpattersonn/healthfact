import "./App.css";
import Form from "./components/Form.js";
import Results from "./components/Results.js";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [resultData, setresultData] = useState([]);

  const getData = () => {
    axios
      .get(
        `https://covid-api.mmediagroup.fr/v1/history?country=${search}&status=deaths`
      )
      .then((data) => {
        console.log(data.data, search);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='main-div'>
      <Form getData={getData} setSearch={setSearch} />
      <Results data={resultData} />
    </div>
  );
}

export default App;
