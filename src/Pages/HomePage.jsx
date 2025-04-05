import React from "react";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.png";
import WhyChooseUs from "../Components/WhyChooseUs";
import RoundedHeader from "../Components/RoundedHeader";
import ServicesGrid from "../Components/ServicesGrid";
import Testimonials from "../Components/Testimonials";
import Highlights from "../Components/Highlights";
import Faq from "../Components/Faq";
import { useTheme } from "../Context/ThemeContext";
import Industries from "../Components/Industries";
import Ourvalues from "../Components/Ourvalues";
import Portfolio from "../Components/Portfolio";
import { Link } from "react-router-dom";
import NewContactForm from "../Components/NewContactForm";
const HomePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomePageBanner />
      <section>
        <div className="wrapper grid md:grid-cols-2 gap-10 sm:pt-[4rem] pt-[2rem] paddingbottom">
          <div className="flex flex-col items-center text-center gap-3">
            <RoundedHeader title="About us" />
            <h1 className="main-title leading-tight" data-aos="fade-left">
              Welcome to Cerevanta AI
            </h1>
            <p className="desc mt-4" data-aos="fade-left">
              In a world driven by rapid technological transformation, Cerevanta
              AI leads with precision, innovation, and purpose. We specialize in
              crafting intelligent solutions—ranging from mobile and web
              applications to AI-powered calling systems and blockchain-secured
              platforms. <br />
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
          <img
            data-aos="fade-right"
            src={homeaboutimg}
            alt="homeaboutimg"
            className="rounded-xl"
          />
        </div>
      </section>
      <WhyChooseUs />
      <Ourvalues />
      <section className="dark:bg-darkblack ">
        <div className="flex wrapper flex-col gap-4 items-center w-full paddingtop paddingbottom">
          <RoundedHeader title={"Our Services"} />
          <h1 className="main-title text-center" data-aos="fade-up">
            Your Gateway to Cosmic AI Intelligence
          </h1>
          <p className="desc max-w-[40rem] text-center" data-aos="fade-up">
            Step beyond the ordinary and embrace the next evolution of
            intelligence. Cerevanta AI is more than a solution—it is a living
            intelligence network that fuses AI, quantum knowledge, and cosmic
            consciousness.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <Industries />
      <Portfolio />
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <Testimonials />
          <Highlights />
          <Faq />
          <NewContactForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
