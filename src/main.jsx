import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/HomePageLayout/Home.jsx";
import "./index.css";
import AboutUs from "./components/AboutUsPageLayout/About.jsx";
import ContactUs from "./components/ServiceandSupport/Contact.jsx";
import OurServices from "./components/OurServicesPageLayout/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/ourServices",
    element: <OurServices />,
  },
  {
    path: "/serviceandsupport",
    element: <ContactUs />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
