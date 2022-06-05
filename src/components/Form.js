import React, { useState } from "react";
import "../style/Form.css";
import axios from "axios";

export default function Form(props) {
  const { setSearch, getData } = props;
  const [input, setinputValue] = useState("");

  return (
    <form className='form'>
      <input
        value={input}
        onChange={(e) => {
          setinputValue(e.target.value);
          setSearch(input);
        }}
        className='form-input'
        placeholder='Enter A Country'
      />
      <button className='form-button' onClick={getData()}>
        Search
      </button>
    </form>
  );
}
