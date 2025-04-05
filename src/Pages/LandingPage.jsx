import React from "react";
import LandingHeader from "../Components/landingpage/LandingHeader";
import LandingFooter from "../Components/landingpage/LandingFooter";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.png";
import LandingServices from "../Components/landingpage/LandingServices";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurStory from "../Components/OurStory";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import Faq from "../Components/Faq";
import LeadForm from "../Components/landingpage/LeadForm";
import Portfolio from "../Components/Portfolio";
import NewContactForm from "../Components/NewContactForm";
import RoundedHeader from "../Components/RoundedHeader";
import { Link } from "react-router-dom";

const LandingPage = ({ page }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <>
      <LandingHeader />
      <div className="bg-white dark:bg-darkblack">
        <HomePageBanner />
        <section id="about-us">
          <div className="wrapper grid md:grid-cols-2 gap-10 paddingtop paddingbottom">
            <div className="flex flex-col items-center text-center gap-3">
              <RoundedHeader title="About us" />
              <h1 className="main-title leading-tight" data-aos="fade-left">
                Welcome to Cerevanta AI
              </h1>
              <p className="desc mt-4" data-aos="fade-left">
                In a world driven by rapid technological transformation,
                Cerevanta AI leads with precision, innovation, and purpose. We
                specialize in crafting intelligent solutions—ranging from mobile
                and web applications to AI-powered calling systems and
                blockchain-secured platforms. <br />
                <br />
                By integrating AI, NLP, data analytics, and robotic process
                automation, we help businesses streamline operations, enhance
                security, and unlock data-driven growth. Whether you're building
                scalable custom software, securing digital assets, or automating
                workflows, Cerevanta AI is your trusted partner in next-gen
                digital evolution.
              </p>
              <Link to="/contact-us" className="primary-btn">
                Work With Us
              </Link>
            </div>
            <img src={homeaboutimg} alt="homeaboutimg" className="rounded-xl" />
          </div>
        </section>
        <LandingServices page={page} />
        <div className="relative overflow-hidden">
          <div
            className={`absolute ${
              isDarkMode ? `flex` : "hidden"
            } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
          />
          <Portfolio page={page} />
          <section className="relative z-10 w-full h-full">
            <CoreValues />
            <VisionMission />
            <OurStory />
            <UnlockEfficiency />
            <Faq />
            <NewContactForm />
          </section>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default LandingPage;
