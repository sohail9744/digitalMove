import rectImage from "../../assets/react.svg";
import Button from "@mui/material/Button";
import RoofingIcon from "@mui/icons-material/Roofing";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Main container */}
        <main className="flex bg-white h-20 justify-between items-center shadow-sm">
          {/* Logo Container */}
          <div className="pl-5">
            <img src={rectImage} className="w-12" alt="not available" />
          </div>
          {/* Button container */}
          <div className="flex gap-3 pr-4">
            <Stack direction="row" spacing={2}>
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
                <Button variant="text" startIcon={<BlurOnIcon />}>
                  About Us
                </Button>
              </Link>
              <Link to={"/contactus"}>
                <Button variant="text" startIcon={<BlurOnIcon />}>
                  Services and Support
                </Button>
              </Link>
              <Link to={"/bookappointment"}>
                <Button variant="contained" startIcon={<SendIcon />}>
                  Book your oppointment
                </Button>
              </Link>
            </Stack>
          </div>
        </main>
      </nav>
    </>
  );
}
