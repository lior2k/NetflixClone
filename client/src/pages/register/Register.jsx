import "./register.scss"
import { useRef } from "react"
import { useState } from "react"

export default function Register() {
    const [email, setEmail] = useState("");

    const emailRef = useRef();
    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const [password, setPassword] = useState("");
    const passwordRef = useRef();
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
            <button className="loginButton">Sign In</button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        {
            !email ? (
                <div className="input">
                    <input type="email" placeholder="Email" red={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
            ) : (
                <div className="input">
                    <input type="password" placeholder="Password" red={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </div>
            )
        }
      </div>
    </div>
  )
}
