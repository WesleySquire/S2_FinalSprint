import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Users from "./LocalStorage";

export default function LogIn() {
  const navigate = useNavigate();

  const users = JSON.stringify(Users());
  localStorage.setItem("users", users);

  const logInRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const logInValue = logInRef.current.value;
    const passValue = passRef.current.value;
    const userData = JSON.parse(localStorage.getItem("users"));

    userData.forEach((user) => {
      if (user.login === logInValue && user.password === passValue) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/profile");
      }
    });
  };

  return (
    <div class="LogIn">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <input id="login" placeholder="Username: " ref={logInRef} />
        <input id="password" placeholder="Password: " ref={passRef} />
        <button>Log In</button>
      </form>
    </div>
  );
}
