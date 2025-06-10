import "./Nav.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <li className="login-btn-wrapper">
      <Link to="/Login" className="login-btn">로그인</Link>
    </li>
  )
}