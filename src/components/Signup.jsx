import React from 'react'

const Signup = () => {
  return (
    <div>
      <form>
        <h1>SignUp</h1>
        <label>UserName:</label>
        <input type="text" name="username" required/>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        <button type="submit" value="Sign Up">Sign Up</button>
        <p>Already have an account? <a href="/login" style={{color:"orange"}}>Login</a></p>
      </form>
    </div>
  )
}

export default Signup



        

        

        
        
    