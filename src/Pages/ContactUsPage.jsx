import MapComponent from "../Components/MapComponent";
import { companyDetails } from "../util/constant";
import NewContactForm from "../Components/NewContactForm";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen dark:bg-darkblack text-white flex flex-col items-center justify-center pt-[7rem] px-4">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <h1 className="main-title mb-8" data-aos="fade-right">
              Get in Touch
            </h1>
            <div className="space-y-4 desc" data-aos="fade-right">
              <p>Phone: {companyDetails.phone}</p>
              <p>Email: {companyDetails.email}</p>
              <p>Office Address: {companyDetails.address}</p>
              {/* <p>Website: www.Cerevanta AI.com</p> */}
            </div>
          </div>

          <MapComponent />
        </div>

        <NewContactForm />
      </div>
    </div>
  );
};

export default ContactUsPage;
