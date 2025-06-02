import "./Nav.css";
import JoinBtn from "./JoinBtn";
import Login from "./LoginBtn";
import LogoBtn from "./LogoBtn";

export default function Nav() {
  return ( 
  <>
    <nav className="menu-box">
      <LogoBtn/>
      <ul className="menu-list">
        <li className="menu"><a href="#">menu1</a></li>
        <li className="menu"><a href="#">menu2</a></li>
        <li className="menu"><a href="#">menu3</a></li>
        <Login/>
        <JoinBtn/>
      </ul>
    </nav>
  </>
  )
}