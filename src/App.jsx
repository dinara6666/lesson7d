import React, { useState } from "react";
import "./App.css";
import eyeIcon from './assets/eye-icon.svg';

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { email, username, password1, password2, confirmPassword, rememberMe });
  };

  return (
    <div className="form-container">
      <div className="box left-box">
        <div className="Login">Login</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or Username*"
            required
          />
          <div className="input-container">
            <input
              type={showPassword1 ? "text" : "password"}
              id="password1"
              name="password1"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Password*"
              required
            />
            <img
              className="eye-icon"
              src={eyeIcon}
              alt="eye"
              onClick={togglePasswordVisibility1}
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <div className="lost">Lost your password?</div>
        </form>
      </div>

      <div className="box right-box">
        <form onSubmit={handleSubmit}>
          <div className="Register">Register</div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            required
          />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username*"
            required
          />
          <div className="input-container">
            <input
              type={showPassword2 ? "text" : "password"}
              id="password2"
              name="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Password*"
              required
            />
            <img
              className="eye-icon"
              src={eyeIcon}
              alt="eye"
              onClick={togglePasswordVisibility2}
            />
          </div>
          <div className="input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password*"
              required
            />
            <img
              className="eye-icon"
              src={eyeIcon}
              alt="eye"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
