import React from 'react'

const Register = () => {
  return (
    <div className="registercontainer">
      <div className="topregister">
        <h1>Register Here</h1>

      </div>
      <div className="bottomregister">
        <form action="/">
        <label htmlFor="username">username</label>
        <input type="text"  name='username' placeholder='Enter the username' id="username" required autoComplete='off'/>

        <label htmlFor="email">Email</label>
        <input type="text"  name='email' placeholder='Enter the Mail' id="mail" required autoComplete='off'/>

        <label htmlFor="phone">username</label>
        <input type="text"  name='phone' placeholder='Enter the Phone Number' id="phone" required autoComplete='off'/>

        <label htmlFor="password">password</label>
        <input type="text"  name='password' placeholder='Enter the Password' id="password" required autoComplete='off'/>

        <button type='submit'>Submit</button>
        </form>



      </div>
    </div>
  )
}

export default Register
