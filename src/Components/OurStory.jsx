import visionmissionimg from "../assets/images/visionmissionimg.png";
const OurStory = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper grid md:grid-cols-2 gap-10">
        <div>
          <h3
            data-aos="fade-right"
            className="text-[32px] text-primary font-bold"
          >
            Empowering the Future with Technology
          </h3>
          <p className="desc mt-4" data-aos="fade-right">
            At Cerevanta AI, we don’t just build software—we build intelligent
            ecosystems that drive growth, automation, and innovation. We are a
            team of forward-thinkers, developers, and strategists dedicated to
            helping businesses harness the true power of technology.
            <br />
            <br />
            From AI-driven calling systems and intelligent automation to custom
            software, mobile apps, and blockchain development—we deliver
            scalable solutions that solve real-world problems. Join us and
            explore how our expertise in data analytics, RPA, and cybersecurity
            can take your business to the next level.
          </p>
        </div>

        <img data-aos="fade-left" src={visionmissionimg} alt="" />
      </div>
    </section>
  );
};

export default OurStory;
