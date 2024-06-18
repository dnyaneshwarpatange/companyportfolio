import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const response = await fetch("https://mitsoln.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Login Successful");
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        // Parse the response to get error details
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };
  return (
    <div className="registercontainer">
      <div className="topregister">
        <h1>Login Here</h1>
      </div>
      <div className="bottomregister">
        <form onSubmit={handleLogin}>
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

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
