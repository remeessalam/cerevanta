import React, { useState } from "react";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content:
        "By accessing or using our Website or services, you agree to be bound by these Terms. If you do not agree, do not use the Website.",
    },
    {
      id: 2,
      title: "Eligibility",
      content:
        "You must be at least 16 years of age to use our services. By using the Website, you represent that you meet this requirement.",
    },
    {
      id: 3,
      title: "Services",
      content: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Website and mobile app development</li>
          <li>AI and NLP solutions</li>
          <li>AI calling software development</li>
          <li>Cybersecurity services</li>
          <li>Robotic Process Automation (RPA)</li>
          <li>UI/UX design</li>
          <li>Custom software development</li>
          <li>Data analytics and business intelligence</li>
        </ul>
      ),
    },
    {
      id: 4,
      title: "User Responsibilities",
      content: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Use the services for any unlawful or unauthorized purpose;</li>
          <li>
            Interfere with or disrupt the integrity or performance of the
            Website;
          </li>
          <li>
            Attempt to gain unauthorized access to the Website or its related
            systems.
          </li>
        </ul>
      ),
    },
    {
      id: 5,
      title: "Payments",
      content:
        "All payments for our services are processed through Razorpay, a third-party payment gateway. We are not responsible for any issues arising from their platform. Users are advised to review Razorpay's terms and privacy policy separately.",
    },
    {
      id: 6,
      title: "Intellectual Property",
      content:
        "All content, trademarks, logos, and software provided on the Website are the property of Cerevanta AI LLP or its licensors and are protected by applicable intellectual property laws.",
    },
    {
      id: 7,
      title: "Limitation of Liability",
      content:
        "We will not be liable for any indirect, incidental, special, or consequential damages arising from your use of our Website or services, to the maximum extent permitted by applicable law.",
    },
    {
      id: 8,
      title: "Privacy",
      content:
        "Your use of the Website is subject to our Privacy Policy, which governs how we collect, use, and protect your personal information.",
    },
    {
      id: 9,
      title: "Governing Law",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of New Delhi, India. All disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi.",
    },
    {
      id: 10,
      title: "Contact",
      content: (
        <div>
          <p>For any questions or concerns, please contact us at:</p>
          <p className="mt-2">
            <strong>Email:</strong> support@cerevantaai.com
          </p>
          <address className="mt-2">
            <strong>Address:</strong>
            <br />
            Cerevanta AI LLP
            <br />
            Daftar Cowork 1.0 – HQ. Building No.2,
            <br />
            State Bank Colony, Main Road – GT Karnal Road,
            <br />
            Delhi – 110009, India
          </address>
        </div>
      ),
    },
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-darkblack">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-8 pt-[8rem]">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <header className=" ">
            <div className="container mx-auto pb-6 ">
              <h1 className="text-3xl font-bold text-gray-800">
                Terms of Service
              </h1>
              <p className="text-gray-600 mt-2">
                Effective Date: 1st December 2024
              </p>
            </div>
          </header>
          <p className="text-gray-700 mb-6">
            Welcome to the website of Cerevanta AI LLP ("Company", "we", "our",
            or "us"). These Terms of Service ("Terms") govern your use of our
            website and services offered through www.cerevantaai.com
            ("Website").
          </p>

          {/* Desktop Version */}
          <div className="hidden md:block">
            {sections.map((section) => (
              <div key={section.id} className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {section.id}. {section.title}
                </h2>
                <div className="text-gray-700 pl-6">{section.content}</div>
              </div>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-200 py-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleSection(section.id)}
                >
                  <span className="text-lg font-medium text-gray-800">
                    {section.id}. {section.title}
                  </span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      activeSection === section.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeSection === section.id && (
                  <div className="mt-3 text-gray-700 pl-4">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Cerevanta AI LLP. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default TermsAndConditions;
