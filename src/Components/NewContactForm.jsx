import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { companyDetails } from "../util/constant";
import { useNavigate } from "react-router-dom";
import RoundedHeader from "./RoundedHeader";

const NewContactForm = () => {
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const services = [
    "Mobile App Dev",
    "Web Development",
    "Custom Software Development",
    "AI Calling",
    "Artificial Intelligence Development",
    "Cybersecurity",
    "Data Analytics and Business intelligence",
    "NLP",
    "RPA",
    "Blockchain development",
  ];

  const onSubmit = async (values) => {
    if (spinner) return;
    setSpinner(true);
    let name = values.firstName + " " + values.lastName;
    var emailBody = "Name: " + name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    // emailBody += "Phone: " + values.phoneNumber + "\n\n";
    emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Service: " + values.service + "\n\n";
    emailBody += "Project Details:\n" + values.projectDetails;

    var payload = {
      to: companyDetails.email,
      name: companyDetails?.name || "Cerevanta AI",
      subject: values.subject,
      body: emailBody,
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <div className="min-h-screen  text-white flex items-center justify-center">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side content */}
          <div className="w-full  space-y-8">
            <RoundedHeader title="Get In Touch" />
            {/* <div className="inline-block">
              <button className="border border-cyan-500 text-cyan-500 rounded-full px-6 py-2 hover:bg-cyan-500 hover:text-black transition-colors">
                Get in Touch
              </button>
            </div> */}

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ready to Transform Your Business?
            </h1>

            <p className="text-gray-400 text-lg">
              Fill out the form and one of our experts will reach out to discuss
              how we can help you achieve your business goals with our tech
              solutions.
            </p>

            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-cyan-500">
                  <span className="font-semibold">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Fill Out the Form</h3>
                  <p className="text-gray-400">
                    Provide your details and requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-cyan-500">
                  <span className="font-semibold">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">We'll Reach Out</h3>
                  <p className="text-gray-400">
                    Our team will contact you within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-cyan-500">
                  <span className="font-semibold">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Free Consultation</h3>
                  <p className="text-gray-400">
                    Discuss your needs with our experts
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="w-full ">
            <div className="bg-gray-900 rounded-lg p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className={`w-full bg-black border ${
                        errors.firstName ? "border-red-500" : "border-gray-700"
                      } rounded-lg p-3 focus:outline-none focus:border-cyan-500`}
                      {...register("firstName", { required: true })}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className={`w-full bg-black border ${
                        errors.lastName ? "border-red-500" : "border-gray-700"
                      } rounded-lg p-3 focus:outline-none focus:border-cyan-500`}
                      {...register("lastName", { required: true })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className={`w-full bg-black border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } rounded-lg p-3 focus:outline-none focus:border-cyan-500`}
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className={`w-full bg-black border ${
                      errors.subject ? "border-red-500" : "border-gray-700"
                    } rounded-lg p-3 focus:outline-none focus:border-cyan-500`}
                    {...register("subject", { required: true })}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2">
                    Service You're Interested In
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      className={`w-full bg-black border ${
                        errors.service ? "border-red-500" : "border-cyan-500"
                      } rounded-lg p-3 appearance-none focus:outline-none focus:border-cyan-500`}
                      {...register("service", { required: true })}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    rows="4"
                    placeholder="Tell us about your project requirements..."
                    className={`w-full bg-black border ${
                      errors.projectDetails
                        ? "border-red-500"
                        : "border-gray-700"
                    } rounded-lg p-3 focus:outline-none focus:border-cyan-500`}
                    {...register("projectDetails", { required: true })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-primary2  font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <FiSend className="text-lg" />
                  <span>{spinner ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContactForm;
