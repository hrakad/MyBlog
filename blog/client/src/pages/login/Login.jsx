import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="example@email.com"
        ></input>
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password ... "
        ></input>
        <button className="loginButton">Login</button>
        <button className="registerButton">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}
