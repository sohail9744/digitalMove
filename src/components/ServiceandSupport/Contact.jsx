/* eslint-disable react/no-unescaped-entities */
import Footer from "../CommonLayout/Footer";
import NavBar from "../CommonLayout/NavBar";
import Banner from "../CommonLayout/Banner";
import ContactForm from "./form.jsx";
export default function ContactUs() {
  return (
    <>
      <NavBar />
      <main>
        <Banner text="Contact Us" />
        <section className="flex flex-col lg:gap-10 sm:gap-0 my-16">
          <div className="flex flex-col gap-3 lg:p-0 sm:p-5 justify-center items-center">
            <h2 className="text-4xl font-popins font-bold text-stone-800 opacity-80 sm:text-center">
              Questions? Let's Talk
            </h2>
            <p className="lg:w-6/12 sm:w-full font-popins text-center">
              Want to learn more about asynCloud IT solutions, get a quote, or speak with an
              expert? Let us know what you are looking for and we’ll get back to
              you right away
            </p>
          </div>
       <ContactForm/>
        </section>
      </main>
      <Footer />
    </>
  );
}
