import { Link } from "react-router-dom";
import logo from "../assets/images/headerlogo.png";
import { useTheme } from "../Context/ThemeContext";
import { companyDetails } from "../util/constant";

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="relative bg-primary dark:bg-darkblack z-20 overflow-hidden">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } -bottom-[15rem] blur-3xl left-0 w-full h-full bg-footerBackground -z-10 `}
      />
      <footer className="w-full   py-16  z-10">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-8 items-start md:justify-items-center">
            <div className="col-span-1">
              <Link to={"/"} className="flex items-center gap-2 mb-4">
                <img src={logo} alt="logo" className="w-[6.4rem]" />
              </Link>
              <p className="text-white text-sm max-w-xs">
                Unleash the Next Wave of Business Evolution with Cerevanta AI
              </p>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about-us"
                    className="text-white hover:text-primary text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-white hover:text-primary text-sm"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-4">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/blog"
                    className="text-white hover:text-primary text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-primary text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-white hover:text-primary text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-service"
                    className="text-white hover:text-primary text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="#"
                    className="text-white hover:text-primary text-sm"
                  >
                    Cookie Policy
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="col-span-1">
              {/* <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm flex-grow"
                />
                <button className="bg-white text-black px-4 py-2 rounded-md text-sm whitespace-nowrap">
                  Send a Email
                </button>
              </div> */}
            </div>
          </div>

          <div className="mt-12 flex  w-full items-center justify-between text-center">
            <p className="text-white text-sm">
              ©2025 Cerevanta AI. All rights reserved.
            </p>
            <div className="flex space-x-4 ">
              {companyDetails.socialLinks.map((obj, index) => (
                <Link
                  key={index}
                  to={obj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white  text-2xl transition-colors"
                >
                  <obj.icon className="hover:text-darkblack dark:hover:text-primary cursor-ponter" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
