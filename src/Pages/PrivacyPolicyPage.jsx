import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-darkblack min-h-screen">
      <div className="container mx-auto px-4 pb-12 pt-[8rem]">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> 1st December 2024
          </p>
          <p className="text-gray-700 mb-6">
            Cerevanta AI LLP ("Company", "we", "us", or "our") values your
            privacy. This Privacy Policy describes how we collect, use, and
            protect your personal data when you visit www.cerevantaai.com.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-3">
              We collect the following personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>
            <p className="text-gray-700">
              This data may be collected when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Fill out a contact form</li>
              <li>Subscribe to updates</li>
              <li>Request a quote or services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-3">
              We may use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Respond to inquiries and provide services</li>
              <li>Improve our offerings and user experience</li>
              <li>
                Send service-related or promotional communications (with your
                consent)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Disclosure of Information
            </h2>
            <p className="text-gray-700 mb-3">
              We do not sell or rent your personal information. We may share
              your information:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                With service providers such as Razorpay for processing payments
              </li>
              <li>As required by law or to protect our legal rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Cookies and Tracking
            </h2>
            <p className="text-gray-700">
              We may use cookies and similar technologies for analytics,
              functionality, and performance. You can manage your preferences
              through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-700">
              We employ reasonable technical and organizational measures to
              protect your personal data from unauthorized access, disclosure,
              or misuse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Children's Privacy
            </h2>
            <p className="text-gray-700">
              Our services are not intended for individuals under the age of 16.
              We do not knowingly collect data from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              7. Your Rights
            </h2>
            <p className="text-gray-700 mb-3">You may:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Request access to your personal data</li>
              <li>Ask us to update or delete your information</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:support@cerevantaai.com"
                className="text-blue-600 hover:underline"
              >
                support@cerevantaai.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              8. Governing Law
            </h2>
            <p className="text-gray-700">
              This Policy shall be governed by the laws of New Delhi, India.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-700 mb-3">
              For questions or concerns about your privacy, please contact:
            </p>
            <p className="text-gray-700 mb-2">
              Email:{" "}
              <a
                href="mailto:support@cerevantaai.com"
                className="text-blue-600 hover:underline"
              >
                support@cerevantaai.com
              </a>
            </p>
            <div className="text-gray-700">
              <p className="font-medium">Address:</p>
              <address className="not-italic">
                Cerevanta AI LLP
                <br />
                Daftar Cowork 1.0 – HQ. Building No.2,
                <br />
                State Bank Colony, Main Road – GT Karnal Road,
                <br />
                Delhi – 110009, India
              </address>
            </div>
          </section>

          <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>Last updated: December 1, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
