import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const today = new Date().getFullYear();
  return (
        <div id="signup">
            <img src="https://portal.mut.ac.ke/uploads/60f2dc3a-7b61-4544-91a8-af2f8fa7d9c9.png?v=owI7j1YJIb_ys2wg_aWc9iUu37eDpGcwvFn8cReKebk" alt="logo"/>
            <h1>Account Registration</h1>
            <p >To sign up, kindly fill the form below</p>
            <form action="">
                <div id="f1">
                    <label for="username1">username</label>
                    <input type="text" name="username1" id="username1" placeholder="Student No/ Employee No" required/>
                    
                    <label for="password1">password</label>
                    <input type="password" name="password1" id="password1" placeholder="Enter your Password" required/>
                    
                    <label for="password2">Confirm password</label>
                    <input type="password" name="password2" id="password2" placeholder="Confirm your Password" required/>
                    
                </div>
                <div id="f3"> 
                    <div id="f32">
                        <input type="radio" name="student" id="student"/>
                        <label for="student">Student</label>
                        <input type="radio" name="student" id="employee"/>
                        <label for="employee">Employee</label> 
                    </div>                
                </div>
                <button type="submit" onclick="validate1()">Submit</button>
            </form>
            <div>
                <p id="one1">Already have an account?<Link to="/">Log In</Link> </p>
                <p id="two2">Copyright &copy; {today} - ABNO Softwares International</p>
            </div>
    </div>
  )
}

export default Signup