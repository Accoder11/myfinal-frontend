import React, {useState} from "react"
import { useNavigate } from "react-router-dom";



const RegisterForm = () => {

    const[name, SetName] = useState('')
    const[username, SetUserName] = useState('')
    const[password, SetPassWord] = useState('')
    const[email, SetEmail] = useState('')
    const navigate = useNavigate();

    async function signUp() {
        try {
          let item = { name, username, email, password };
          console.warn(item);
      
          let result = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
      
          if (!result.ok) {
            throw new Error("Network response was not ok");
          }
      
          result = await result.json();
          localStorage.setItem("user-info", JSON.stringify(result));
          navigate.push("/add");
        } catch (error) {
          console.error("Error occurred:", error);
        }
      }
      

return(
    <div className="col-sm-6 offset-sm-3 registerForm">
        <h1>Registration Form</h1>
        <input value={name}  type="text" onChange={(e) => SetName(e.target.value)
        } className="form-control" placeholder="name"/>
        <br />
        <input value={username}  type="text" onChange={(e) => SetUserName(e.target.value)
        } className="form-control" placeholder="username"/>
        <br />
        <input value={email}  type="email" onChange={(e) => SetEmail(e.target.value)} className="form-control" placeholder="email"/>
        <br />
        <input value={password} type="password" onChange={(e) => SetPassWord(e.target.value)} className="form-control" placeholder="password"/>
        <br />
        <button onClick={signUp} className="btn btn-primary">Sign Up</button>
    </div>
)
}

export default RegisterForm;