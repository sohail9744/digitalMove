import Footer from "../CommonLayout/Footer";
import NavBar from "../CommonLayout/NavBar";
import Banner from "../CommonLayout/Banner";
export default function ContactUs() {
  return (
    <>
      <NavBar />
      <main className="mt-20">
        <Banner text="Contact Us" />
        <p>Contact us Layout</p>
      </main>
      <Footer />
    </>
  );
}
