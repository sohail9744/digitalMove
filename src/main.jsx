import ReactDOM from "react-dom/client";
import Home from "./components/HomePageLayout/Home.jsx";
import "./index.css";
import AboutUs from "./components/AboutUsPageLayout/About.jsx";
import ContactUs from "./components/ServiceandSupport/Contact.jsx";
import OurServices from "./components/OurServicesPageLayout/Services.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

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
    path: "/contactus",
    element: <ContactUs />,
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);

