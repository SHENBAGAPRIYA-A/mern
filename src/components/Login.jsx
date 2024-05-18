import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <h1 >Login</h1>
        <label>UserName:</label>
        <input type="Text" required/><br></br>
        <label>Password:</label>
        <input type="password" required/>
        <br></br>
        <button type="submit">Submit</button>
        <p>Don't have an account? <a href="/signup" style={{color:"orange"}}>  SignUp</a></p>
      </form>
    </div>
  )
}

export default Login
