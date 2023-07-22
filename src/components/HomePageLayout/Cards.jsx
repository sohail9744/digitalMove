import iconIT from "./Icons/ITConsultancy.svg";
import webDevelopment from "./Icons/webDevelopment.svg";
import productDevelopment from "./Icons/productDevelopment.svg";
import lowcode from "./Icons/lowcode.svg";
import uiux from "./Icons/uiux.svg";
import mobileDevelop from "./Icons/mobileDevelop.svg";
const Card = () => {
  const data = [
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
      {data.map((items, index) => (
        <div
          key={index}
          className="p-6 bg-customColor w-1/4 rounded hover:scale-105 translate-transform duration-300 ease-in-out"
        >
          <div className="flex justify-center items-center flex-col">
            <div className="w-32 h-24">
              <img src={items.icon} alt="not found" />
            </div>
            <h3 className="font-popins font-semibold m-4 text-xl">
              {items.title}
            </h3>
            <p className="break-words font-quickSand font-medium w-full">
              {items.des}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
