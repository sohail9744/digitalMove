import Card from "./Cards";
import webDevelopment from "./Icons/webDevelopment.svg";
import productDevelopment from "./Icons/productDevelopment.svg";
import uiux from "./Icons/uiux.svg";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
const OurServices = () => {
    const items = [
      {
        icon: webDevelopment,
        title: "Web Development",
        des: "💻 Full Stack Expertise: Our team of skilled developers possesses a wealth of experience in Full Stack web development, ensuring seamless integration of both front-end and back-end technologies. 🌈 We prioritize user experience, creating intuitive and user-friendly interfaces",
      },
      {
        icon: productDevelopment,
        title: "Product Development",
        des: "Product development is at the heart of what we do. We listen to your goals, understand your target audience, and craft a comprehensive roadmap to bring your product to life. Our team of passionate experts leaves no stone unturned in ensuring your success.",
      },
      {
        icon: uiux,
        title: "UX/UI Design",
        des: "We understand that a seamless and captivating user interface (UI) and user experience (UX) are the foundation of every successful digital venture. We take pride in offering top-notch UI/UX design services, tailored to transform your vision into an unforgettable digital reality.",
      },
    ];
  return (
    <>
      {/* Main Container */}
      <main className="bg-orange-100 border-t border-stone-300">
        {/* sub Container */}
        <section className="flex justify-center flex-wrap flex-col items-center">
          <div className="my-10 flex flex-col gap-5">
            <div className="flex justify-center flex-col items-center">
              <h5 className="font-popins font-medium text-cyan-800">
                WE PROVIDE SERVICES
              </h5>
              <div className="font-popins font-semibold flex justify-center items-center flex-col mt-5 lg:text-3xl sm:text-lg sm:text-center sm:font-semibold">
                <h2>The kind of services that our company</h2>
                <h2>provides to our clients</h2>
              </div>
            </div>
            <section className="lg:my-8 flex flex-wrap lg:flex-row lg:gap-8  justify-center sm:my-0 sm:flex-col">
              <Card data={items} />
            </section>
            <div className="flex justify-center items-center">
              <Link to={"/ourServices"}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Click for More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default OurServices;
