import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <div className="w-full">
        <NavLink to={"/"}>Home Page</NavLink>
        <NavLink to={"/ourServices"}> Our services</NavLink>
        <NavLink to={"/aboutus"}> About Us</NavLink>
        <NavLink to={"/contactus"}>Contact Us</NavLink>
      </div>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between">
        <div className="hidden w-full sm:flex justify-between">
          <NavLinks />
        </div>
        <div className="sm:hidden w-full">
          <button onClick={toogleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex mt-20 flex-col">
          <NavLink to={"/"}>Home Page</NavLink>
          <NavLink to={"/ourServices"}> Our services</NavLink>
          <NavLink to={"/aboutus"}> About Us</NavLink>
          <NavLink to={"/contactus"}>Contact Us</NavLink>
        </div>
      )}
    </>
  );
};
export default Nav;
