import React from "react";
import RoundedHeader from "./RoundedHeader";
import { useNavigate } from "react-router-dom";

const UnlockEfficiency = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section>
      <div className="wrapper w-full flex flex-col gap-10 items-center paddingtop paddingbottom">
        <RoundedHeader title="Unlock Potential" />
        <h1 className="main-title w-fit">
          Build Smarter Solutions with Cerevanta AI
        </h1>
        <p className="desc text-center">
          Empower your business with intelligent solutions across mobile app
          development, web platforms, RPA, AI calling, and more. Our tailored
          services streamline operations, strengthen digital presence, and drive
          measurable impact through automation, security, and advanced
          analytics.
        </p>
        <button
          onClick={() => navigateTo("/contact-us")}
          className="primary-btn w-fit"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
