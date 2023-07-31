import React, { useState } from "react";
import { Home } from "./Home";
import '../components/loginmed.css';
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "correctUsername" && password === "correctPassword") {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect username or password");
    }
  };

  if (isLoggedIn) {
    // If the user is logged in, render the authenticated content
    return <Home />;
  } else {
    // If the user is not logged in, render the login form
    return (
        <div id='home'>
        <div id='inner'>
      <div>
        <h1>Login Page</h1>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br>
        </br>
        <button onClick={handleLogin}>Login</button>
      </div>
      </div>
      </div>
    );
  }
}

function AuthenticatedContent() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>You are now logged in.</p>
    </div>
  );
}
export {Login};
