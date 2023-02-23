import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate.push("/add");
  }

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate.push("/add");
    }
  }, []);

  return (
    <div className="col-sm-6 offset-sm-3 registerForm">
      <h1>Login Form</h1>

      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="email"
      />
      <br />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
      />
      <br />
      <button onClick={login} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;
