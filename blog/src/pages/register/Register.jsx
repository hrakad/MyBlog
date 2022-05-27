import './register.css';

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>UserName</label>
        <input
          className="registerInput"
          type="userName"
          placeholder="Enter your Name..."
        ></input>
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="example@email.com"
        ></input>
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password... "
        ></input>
        <button className="registerLogButton">Register</button>
        <button className="loginRegButton">Login</button>
      </form>
    </div>
  );
}
