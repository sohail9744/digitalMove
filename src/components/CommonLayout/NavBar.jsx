import rectImage from "../../assets/react.svg";
import Button from "@mui/material/Button";
import RoofingIcon from "@mui/icons-material/Roofing";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import Stack from "@mui/material/Stack";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Buttons = () => {
  return (
    <Stack direction={"row"} spacing={3}>
      {/* Use Link component from react-router-dom for navigation */}
      <Link to={"/"}>
        <Button variant="text" startIcon={<RoofingIcon />}>
          Home
        </Button>
      </Link>
      <Link to={"/ourServices"}>
        <Button variant="text" startIcon={<BlurOnIcon />}>
          Our services
        </Button>
      </Link>
      <Link to={"/aboutus"}>
        <Button variant="text" startIcon={<InfoIcon />}>
          About Us
        </Button>
      </Link>
      <Link to={"/contactus"}>
        <Button variant="text" endIcon={<SendIcon />}>
          Contact Us
        </Button>
      </Link>
    </Stack>
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 left-0 right-0 z-50 ">
        {/* Main container */}
        <main className="flex bg-white h-20 justify-between items-center shadow-sm">
          {/* Logo Container */}
          <div className="pl-5">
            <img src={rectImage} className="w-12" alt="not available" />
          </div>
          {/* Button container */}
          <div className="hidden lg:flex justify-end ">
            <Buttons />
          </div>
          {/* Mobile View and Tablet View */}
          <div className="flex w-full justify-end pr-5 lg:hidden">
            <button onClick={toogleNavBar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </main>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center justify-center p-2 bg-gradient-to-b border gap-4 transition-transform duration-1000 transform translate-y-0 slide-in-out">
          <Stack direction={"column"} spacing={1}>
            {/* Use Link component from react-router-dom for navigation */}
            <Link to={"/"}>
              <Button variant="text" startIcon={<RoofingIcon />}>
                Home
              </Button>
            </Link>
            <Link to={"/ourServices"}>
              <Button variant="text" startIcon={<BlurOnIcon />}>
                Our services
              </Button>
            </Link>
            <Link to={"/aboutus"}>
              <Button variant="text" startIcon={<InfoIcon />}>
                About Us
              </Button>
            </Link>
            <Link to={"/contactus"}>
              <Button variant="text" startIcon={<CallIcon />}>
                Contact Us
              </Button>
            </Link>
          </Stack>
        </div>
      )}
    </>
  );
}
