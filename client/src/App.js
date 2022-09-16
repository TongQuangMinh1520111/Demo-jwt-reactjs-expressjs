import logo from "./logo.svg";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import axios from "axios";

const App = ()=> {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async()=> {
    try {
      let response = await axios.post("/api/hello");
      console.log(response)
      setData(response.data.message)
    } catch (err) {

      console.log("have some err")
    }
    // try {
    //   var f = new FormData();
    //   f.append("email", "quangminh15201111@gmail.com");
    //   f.append("password", "123");
    //   let response = await axios.post("/api/hello", {
    //     headers: { 
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     data: f
    //   });
    //   console.log(response)
    //   setData(response)
    // } catch (err) {

    //   console.log(err)
    // }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

export default App;
