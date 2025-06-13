import {useState} from 'react';
import './Nav.css';


export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
      setIsOpen(!isOpen);
      console.log(`${isOpen}`);
      const menuList = document.querySelector('.menu-list');
      if (isOpen === true) {
          menuList.classList.add('open');
          menuList.classList.remove('close');
      } else if( isOpen === false) {
          menuList.classList.add('close');
          menuList.classList.remove('open');
      }
  }

  return (
    <div className={"hamburger"} onClick={toggle}>
      <img src="/image/hamburger-icon.png" alt="메뉴창"/>
    </div>

  )
}
