import Footer from "../CommonLayout/Footer";
import NavBar from "../CommonLayout/NavBar";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Typewriter, Cursor } from "react-simple-typewriter";
// import HomeBannerImage from "../../Images/HomeBannerImage.jpg";
import buildingWebsite from "./Icons/buildingWebsite.svg";
import OurServices from "./Services.jsx";
import Projects from "./ProjectsCompleted.jsx";

export default function Home() {
  const text = Typewriter({
    words: [
      "Ecommerce Website",
      "General Business Website",
      "Mobile Application 📱",
      "Fully Responsive Website :)",
      "Personal Blog Website",
      "Low-Code web or Mobile App",
      "Portfolio Website",
    ],
    loop: {},
  });
  return (
    <>
      <NavBar />
      {/* Main Contianer */}
      <main className="mt-20">
        {/* Background image container */}
        <div
          className="banner-container bg-cover bg-center"
          // style={{
          //   backgroundImage: `url(${HomeBannerImage})`,
          // }}
        >
          {/* store text and image  */}
          <div className="flex flex-row justify-between p-20">
            <div>
              <h2 className="text-3xl font-popins font-extrabold">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's Build
                <span style={{ color: "green", marginLeft: "8px" }}>
                  {text}
                </span>
                <span>
                  <Cursor cursorColor="red" />
                </span>
              </h2>
              <div className="w-4/5 my-12 ">
                <p className="font-popins break-words font-normal sm:font-extrabold">
                  Welcome to
                  <span className="ml-1 font-bold">DigitalM0ve.com</span>, where
                  innovation meets excellence! We are your trusted partner in
                  unleashing the full potential of technology for your business.
                  From cutting-edge web development and captivating designs to
                  seamless software solutions and digital marketing prowess, we
                  craft tailored strategies to elevate your brands online
                  presence. Join us on a journey of growth and success as we
                  build a seamless bridge between your dreams and digital
                  reality.
                </p>
              </div>
              <Button variant="contained" endIcon={<SendIcon />}>
                Get started
              </Button>
            </div>
            <div style={{ width: "197%" }}>
              <img src={buildingWebsite} alt="not found" />
            </div>
          </div>
        </div>
        <OurServices />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
