import "./Nav.css";
import JoinBtn from "./JoinBtn";
import Login from "./LoginBtn";
import LogoBtn from "./LogoBtn";
import { Link } from "react-router-dom";
import MenuBtn from "./MenuBtn";

export default function Nav() {
  return ( 
  <>
    <nav className="menu-box">
      <LogoBtn/>
      <ul className="menu-list">
        <MenuBtn/>
        <Login/>
        <JoinBtn/>
      </ul>
    </nav>
  </>
  )
}