import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json(); // ✅ backend sends user object
        // ✅ normalize so Dashboard always reads "name"
        const normalizedUser = {
          id: user.id,
          name: user.username || user.name || email.split("@")[0],
          email: user.email,
        };
        localStorage.setItem("user", JSON.stringify(normalizedUser));
        navigate("/main");
      } else {
        const errorText = await response.text();
        alert("Login failed: " + errorText);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Error connecting to backend!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span> | </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
