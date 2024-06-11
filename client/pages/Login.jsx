import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    // Add your form submission logic here
    console.log("Form submitted", user);
  };

  return (
    <div className="registercontainer">
      <div className="topregister">
        <h1>Login Here</h1>
      </div>
      <div className="bottomregister">
        <form onSubmit={handleSubmit}>
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
