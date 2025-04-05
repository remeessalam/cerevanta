// import React, { useEffect, useState } from "react";
import bannervideo from "../assets/video/bannervideo.mp4";
import ReactPlayer from "react-player";
// import { useNavigate } from "react-router-dom";
import RoundedHeader from "./RoundedHeader";
const HomePageBanner = () => {
  // const navigate = useNavigate();
  // const navigateTo = (link) => {
  //   navigate(link);
  // };
  // const headingText = "Vision Beyond Reality";
  const paragraphText =
    "We exist at the intersection where cosmic innovation meets quantum-level intelligence — a space where visionary ideas and advanced technologies converge to redefine the boundaries of what's possible. Our mission is to harness this synergy to create transformative solutions that shape the future of technology and human experience.";
  // const [displayHeading, setDisplayHeading] = useState("");
  // const [displayParagraph, setDisplayParagraph] = useState("");
  // const [headingComplete, setHeadingComplete] = useState(false);
  // const [cursorVisible, setCursorVisible] = useState(true);
  // const [cursorPosition, setCursorPosition] = useState("heading");

  // useEffect(() => {
  //   if (displayHeading.length < headingText.length) {
  //     const typingTimer = setTimeout(() => {
  //       setDisplayHeading(headingText.substring(0, displayHeading.length + 1));
  //     }, 150);

  //     return () => clearTimeout(typingTimer);
  //   } else if (!headingComplete) {
  //     const pauseTimer = setTimeout(() => {
  //       setHeadingComplete(true);
  //       setCursorPosition("paragraph");
  //     }, 500);

  //     return () => clearTimeout(pauseTimer);
  //   }

  //   if (headingComplete && displayParagraph.length < paragraphText.length) {
  //     const typingTimer = setTimeout(() => {
  //       setDisplayParagraph(
  //         paragraphText.substring(0, displayParagraph.length + 1)
  //       );
  //     }, 100);

  //     return () => clearTimeout(typingTimer);
  //   }

  //   const cursorTimer = setInterval(() => {
  //     setCursorVisible((prev) => !prev);
  //   }, 500);

  //   return () => clearInterval(cursorTimer);
  // }, [displayHeading, displayParagraph, headingComplete]);

  return (
    <div className="relative w-full bg-[#060b19] sm:min-h-screen">
      <div className="absolute left-0 top-0 w-full h-full bg-black/60 " />
      <ReactPlayer
        url={bannervideo}
        loop={true}
        playsinline
        playing={true}
        width="100%"
        height="100vh"
        muted
        className="object-cover videoplayer"
        config={{
          file: {
            attributes: {
              style: {
                objectFit: "cover",
                width: "100vw",
                height: "100vh",
              },
            },
          },
        }}
      />
      <div className="absolute flex flex-col items-center justify-center    left-0 top-0 w-full h-full pt-[7rem]">
        <RoundedHeader title="Welcome To Cerevanta AI" />
        <h1 className="sm:text-6xl text-5xl font-bold text-center text-white my-6">
          <span className="text-primary">Vision </span>
          Beyond Reality
          {/* {displayHeading}
          {cursorPosition === "heading" && (
            <span
              className={`ml-1 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
            >
              |
            </span>
          )} */}
        </h1>

        <div className="flex flex-col gap-8 pb-5">
          <p className="desc max-w-[39rem] text-center   text-white ">
            {paragraphText}
            {/* {displayParagraph}
            {cursorPosition === "paragraph" && (
              <span
                className={`ml-1 ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-100`}
              >
                |
              </span>
            )} */}
          </p>
          {/* <div className="flex justify-center gap-5">
            <button
              data-aos="fade-right"
              onClick={() => navigateTo("/about-us")}
              className="primary-btn"
            >
              Get Start{" "}
            </button>
            <button
              data-aos="fade-left"
              onClick={() => navigateTo("/contact-us")}
              className="secondary-btn-white"
            >
              Contact Us{" "}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
