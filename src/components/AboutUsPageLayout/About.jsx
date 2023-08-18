import team from "./Icons/team.svg";
import marketing from "./Icons/marketing.svg";
import Footer from "../CommonLayout/Footer";
import NavBar from "../CommonLayout/NavBar";
import Banner from "../CommonLayout/Banner";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function AboutUs() {
  return (
    <>
      <NavBar />
      <main>
        <Banner text="About US" />
        <main className="border-t bg-white border-stone-300 flex justify-center items-center">
          <section className="my-6 px-12 flex justify-start items-center w-full">
            <div className="flex w-full gap-8 flex-col justify-start items-start">
              <div className="flex justify-around gap-10 items-center">
                <div className="w-6/12">
                  <img src={team} alt="not found" />
                </div>
                <div className="flex gap-3 w-6/12 flex-col text-black p-7 rounded-md">
                  <h2 className="font-semibold text-3xl text-stone-600">
                    Who we are?
                  </h2>
                  <p className="break-words larger-text text-lg justify-start text-amber-950 items-center font-sans">
                    At DigitalMove.com, we are a dynamic and forward-thinking
                    company that was established in 2018 with a vision to
                    revolutionize the digital landscape. Starting with just 4
                    dedicated employees, our relentless commitment to excellence
                    has propelled us to grow exponentially, and we now boast a
                    strong team of 25+ highly skilled professionals.
                  </p>
                  <h2 className="font-semibold text-3xl text-stone-600">
                    Digits that define growth
                  </h2>
                  <p className="break-words larger-text w-full text-lg justify-start text-amber-950 items-center font-sans">
                    As a trusted leader in the industry, we specialize in
                    providing end-to-end digital solutions that empower
                    businesses to thrive in today fast-paced digital world. From
                    cutting-edge web development to innovative mobile
                    applications, our team works collaboratively to deliver
                    tailored and impactful solutions that meet the unique needs
                    of each of our clients.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <main className="bg-white flex justify-center items-center">
          <section className="my-6 px-12 flex justify-start items-center w-full">
            <div className="flex w-full gap-8 flex-col justify-start items-start">
              <div className="flex justify-around gap-10 items-center">
                <div className="flex justify-between items-center gap-3 w-6/12 flex-col text-black p-7 rounded-md">
                  <h2 className="font-semibold text-3xl text-stone-600">
                    Our Mission
                  </h2>
                  <p className="break-words mb-5 larger-text w-full text-lg text-amber-950 font-sans">
                    Our cutting-edge and result-driven strategies are
                    meticulously crafted to bolster your digital footprint and
                    allure a stream of targeted and qualified prospects to your
                    web solutions. As a consequence, this will pave the way for
                    substantial revenue expansion and growth for your web
                    development and application business. Our meticulously
                    designed and powerful strategies leverage the latest
                    advancements in web development, search engine optimization
                    (SEO), and digital marketing to optimize your online
                    presence.
                  </p>
                  <div className="w-full flex justify-start items-start">
                    <Link to={"/contactus"}>
                      <Button variant="contained">Contact Us</Button>
                    </Link>
                  </div>
                </div>
                <div className="w-6/12">
                  <img src={marketing} alt="not found" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
      <Footer />
    </>
  );
}
