import "./Nav.css";
import { Link } from "react-router-dom";


export default function LogoBtn() {
  return (
    <div className="logo">
      <Link to="/" className="Logo-btn">
        <img src="/image/pattern.jpg" alt="로고" />
      </Link>
    </div>
  );
}