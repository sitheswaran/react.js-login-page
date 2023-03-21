import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 import data from "./data.json";


const Login = () => {
  var goto = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);


  const handleInputChange = (ev) => {
    if (ev.target.name === "username") {
      setName(ev.target.value);
    } 
    else {
      setPassword(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
   
    if (name === "" || password === "") {
      setShowError(true);
    }
   

    var getdata = data.userData.find(
      (get) => get.name === name && get.password === password
    );
   console.log(getdata);

    if (getdata) {
      goto("/Add");

    }
    else{ 
      alert("Eneter the correct name and password");
    }
  };

  return (
    <div >
      <h2>LOGIN FORM</h2>

      <form onSubmit={handleSubmit}>
        <h3 style={{ color: "" }}>UserName:</h3>

        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={handleInputChange}
        />

        {showError && name === "" && (
          <p style={{ color: "red" }}>Name is required*</p>
        )}

        <h3>Password:</h3>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleInputChange}
        />

        {showError && password === "" && (
          <p style={{ color: "red" }}>Password is required*</p> 
        )}<br />
          <br/>
        <div>
          <input type="submit" />
        </div>
      </form>

      <Link to={"/Home"}></Link>
    </div>
  );
};

export default Login;