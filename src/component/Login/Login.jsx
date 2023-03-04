import React from "react";
import "./Login.css"
import rocketImage from "../../assets/rocketImage.png"

const Login = () =>{
    return(
        <div className="LoginPage">
            <img src={rocketImage} alt="rocketImage" className="rocketImage" />
            <div className="firstLoginSection">
                <div><span id="logoELetter">E</span><h2 className="khdemLogo">Khdem</h2></div>
                <div className="loginPageText">
                    <h3 className="loginBigTitle" style={{"fontWeight" : "800", "marginBottom" : "10%"}}>Hello dear costumer!</h3>
                    <h4 className="welcomeMessage" style={{"textAlign" : "center" , "fontWeight" : "lighter", "color" : "#D5D5D5"}}>Enter your details and <br/>start your journey with us</h4>
                </div>
            </div>
            <div className="secondLoginSection">
                <h3 className="loginBigTitle" style={{"fontWeight":"bolder", "fontSize" : "3vw", "marginBottom" : "50px"}}>Welcome back !</h3>
                <form className="loginForm">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="inputForm" placeholder="admin"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="inputForm" placeholder="********"/>
                    <p style={{"color": "#5AE1F8" ,"alignSelf":"end", "cursor":"pointer"}}>Forgot password</p>
                    <input type="submit" value="Login" className="buttonForm"/>
                </form>
            </div>
        </div>
    )
}
export default Login;