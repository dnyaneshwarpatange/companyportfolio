import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const response = await fetch("https://mitsoln.vercel.app/register",{
        method:"POST",
        headers:{
         "Content-Type": "application/json"
   
        },
        body:JSON.stringify(user),
       });
       if(response.ok){
        alert("Registration Successful")
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");

       }


       console.log("Form submitted", user);
       console.log(response)
      
    } catch (error) {
      console.error(error);
      
    }

  };

  return (
    <div className="registercontainer">
      <div className="topregister">
        <h1>Register Here</h1>
      </div>
      <div className="bottomregister">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter the username"
            id="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInput}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter the Email"
            id="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter the Phone Number"
            id="phone"
            required
            autoComplete="off"
            value={user.phone}
            onChange={handleInput}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter the Password"
            id="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
