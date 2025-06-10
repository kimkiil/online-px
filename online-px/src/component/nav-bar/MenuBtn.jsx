import "./Nav.css";
import { Link } from "react-router-dom";

export default function MenuBtn() {
  return (
    <>
      <li className="menu-wrapper"><Link to="/menu1" className="menu-btn">menu1</Link></li>
      <li className="menu-wrapper"><Link to="/menu2" className="menu-btn">menu2</Link></li>
      <li className="menu-wrapper"><Link to="/menu3" className="menu-btn">menu3</Link></li>
    </>
  )
}