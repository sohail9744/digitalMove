import Footer from "../CommonLayout/Footer";
import NavBar from "../CommonLayout/NavBar";
import Banner from "../CommonLayout/Banner";
import Card from "../HomePageLayout/Cards";
import iconIT from "../HomePageLayout/Icons/ITConsultancy.svg";
import webDevelopment from "../HomePageLayout/Icons/webDevelopment.svg";
import productDevelopment from "../HomePageLayout/Icons/productDevelopment.svg";
import lowcode from "../HomePageLayout/Icons/lowcode.svg";
import uiux from "../HomePageLayout/Icons/uiux.svg";
import mobileDevelop from "../HomePageLayout/Icons/mobileDevelop.svg";
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
      {
        icon: iconIT,
        title: "IT Consultancy",
        des: "Are you ready to unlock the full potential of your business in the digital world? Look no further! Our IT consultancy services are designed to elevate your company to new heights and empower you with cutting-edge technology solutions.",
      },
      {
        icon: lowcode,
        title: "LowCode Development",
        des: "🔧 Embrace Efficiency: With OutSystems, we streamline your development process like never before. 🌐 Seamless Integration: From complex integrations to third-party systems, we ensure smooth connectivity ⚡️ Lightning-Fast Delivery: Time is of the essence, and OutSystems delivers!",
      },
      {
        icon: mobileDevelop,
        title: "App Development",
        des: "⚛️ Embrace the power of innovation with our cutting-edge mobile app solutions. We specialize in crafting apps that push the boundaries of user experience and set new industry standards, custom Mobile App Development Services: Innovative, reliable and user-friendly apps for all platforms",
      },
    ];
  return (
    <>
      <NavBar />
      <main className="mt-20">
        <Banner text="Our Services" />
        <main className="bg-orange-100 border-t border-stone-300">
          {/* sub Container */}
          <section className="flex justify-center flex-wrap flex-col items-center">
            <div className="flex justify-center flex-col items-center">
              <h5 className="font-popins mt-6 font-medium text-cyan-800">
                WE PROVIDE SERVICES
              </h5>
              <div className="font-popins font-semibold flex justify-center items-center flex-col mt-5 text-4xl">
                <h2>The kind of services that our company</h2>
                <h2>provides to our clients</h2>
              </div>
            </div>
            <section className="my-8 flex flex-wrap flex-row gap-8  justify-center">
              <Card data={items} />
            </section>
          </section>
        </main>
      </main>
      <Footer />
    </>
  );
};
export default OurServices;
