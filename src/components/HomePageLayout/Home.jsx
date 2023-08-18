import Footer from "../CommonLayout/Footer";
import NavBar from "../CommonLayout/NavBar";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Typewriter, Cursor } from "react-simple-typewriter";
// import HomeBannerImage from "../../Images/HomeBannerImage.jpg";
import buildingWebsite from "./Icons/buildingWebsite.svg";
import OurServices from "./Services.jsx";
import Projects from "./ProjectsCompleted.jsx";
import Help from "./OurHelp.jsx";
import { Link } from "react-router-dom";
import "./css/Home.css";

export default function Home() {
  const text = Typewriter({
    words: [
      "Ecommerce Website",
      "Business Website with SAPUI5",
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
      <main>
        {/* Background image container */}
        <div className="banner-container bg-cover bg-center">
          {/* store text and image  */}
          <div className="lg:flex lg:flex-row lg:justify-between lg:p-20 sm:p-0 sm:flex sm:flex-col">
            <div className=" lg:block sm:flex sm:flex-col sm:justify-center sm:items-center">
              <div className="lg:hidden sm:mt-10 sm:font-extrabold sm:text-xl">
                Let's Build
              </div>
              <h2 className="lg:text-3xl font-popins lg:font-extrabold sm:text-xl sm:my-2">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <span className="hidden lg:inline-block">Let's Build</span>
                <span style={{ color: "green", marginLeft: "8px" }}>
                  {text}
                </span>
                <span>
                  <Cursor cursorColor="red" />
                </span>
              </h2>
              <div className="lg:w-4/5 lg:my-10 lg:p-0 lg:m-0 sm:w-full sm:m-6 sm:p-4">
                <p className="font-popins break-words lg:text-xl lg:font-normal sm:font-sans sm:text-s">
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
              <Link to={"/contactus"}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Get started
                </Button>
              </Link>
            </div>
            <div className="lg-image-width sm:hidden lg:inline-block">
              <img src={buildingWebsite} alt="not found" />
            </div>
            <div className="sm-image-width lg:hidden mt-10 sm:inline-block">
              <img src={buildingWebsite} alt="not found" />
            </div>
          </div>
        </div>
        <OurServices />
        <Projects />
        <Help />
      </main>
      <Footer />
    </>
  );
}
