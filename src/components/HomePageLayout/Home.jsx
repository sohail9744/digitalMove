import rectImage from "../../assets/react.svg";
import Button from "@mui/material/Button";
import RoofingIcon from "@mui/icons-material/Roofing";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
export default function App() {
  return (
    <>
      {/* Main container */}
      <main className="flex bg-white h-20 justify-between items-center shadow-lg">
        {/* Logo Container */}
        <div className="pl-5">
          <img src={rectImage} className="w-12" alt="not available" />
        </div>
        {/* Button container */}
        <div className="flex gap-3 pr-4">
          <Stack direction="row" spacing={2}>
            <Button variant="text" startIcon={<RoofingIcon />}>
              Home
            </Button>
            <Button variant="text" startIcon={<BlurOnIcon />}>
              Our services
            </Button>
            <Button variant="text" startIcon={<BlurOnIcon />}>
              About Us
            </Button>
            <Button variant="text" startIcon={<BlurOnIcon />}>
              Services and Support
            </Button>
            <Button variant="contained" startIcon={<SendIcon />}>
              Book your oppointment
            </Button>
          </Stack>
        </div>
      </main>
    </>
  );
}
