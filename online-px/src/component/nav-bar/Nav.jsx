import "./Nav.css";
import JoinBtn from "./JoinBtn";
import Login from "./LoginBtn";
import LogoBtn from "./LogoBtn";
import MenuBtn from "./MenuBtn";
import DropdownMenu from "./DropdownMenu";

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
      <DropdownMenu />
    </nav>
  </>
  )
}