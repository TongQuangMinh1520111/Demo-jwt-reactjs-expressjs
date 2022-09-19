import React from "react";
import { useState } from "react";
import axios from "axios";
const login = (props) => {
  const [name, setName] = useState({ name: "" });
  handleChange = (e) => {
    alert("a form was submitted:" + name);
  };
  handleSubmit = (event) => {
    alert("A form was submitted: " + this.state);

    fetch("http://localhost:3000/store-data", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });

    event.preventDefault();
  };
  const fetchData = async () => {
    try {
      let response = await axios.post("/api/hello");
      console.log(response);
      setData(response.data.message);
    } catch (err) {
      console.log("have some err");
    }
  };

  <form onSubmit={this.handleSubmit}>
    <label>
      Name:
      <input type="text" value={name} name="name" onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>;
};
