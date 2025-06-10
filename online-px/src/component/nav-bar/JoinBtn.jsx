import "./Nav.css";
import { Link } from "react-router-dom";

export default function JoinBtn() {
  return (
    <li className="join-btn-wrapper">
      <Link to="/Join" className="join-btn">회원가입</Link>
    </li>
  )
}