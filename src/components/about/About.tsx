import imageAbout from "../../assets/brand_img.png";

const About = () => {
  return (
    <article
      className="mx-auto container px-6 pt-12 flex flex-col items-center justify-center mt-15 mb-20"
      id="about"
    >
      <div className="flex flex-col items-center justify-center gap-5" data-aos="fade-up-left">
        <h1 className="text-[30px] lg:text-[64px] md:text-[50px] select-none">
          <span className="font-semibold">About </span>
          <span className="border-b-5 border-gray-500">Our Brand</span>
        </h1>
        <p className="select-none mt-5 text-[25px] max-w-[475px] text-center mb-10">
          Passionate about Propietis, Dedicated to Your Vision
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 ">
        <img
          src={imageAbout}
          className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] lg:w-[800px] lg:h-[800px]" data-aos="zoom-in-left" data-aos-duration="3000"
        />
        <div className="text-[35px] md:text-[55px] lg:text-[65px] flex flex-col gap-20 select-none">
          <div className="flex gap-25" data-aos="fade-up" data-aos-duration="1500">
            <span className="flex flex-col gap-3">
              5+
              <h3 className="text-[22px] max-w-[500px]">Years of Experience</h3>
            </span>
            <span className="flex flex-col gap-3">
              12+
              <h3 className="text-[22px] max-w-[500px]">Projects Completed</h3>
            </span>
          </div>
          <div className="flex gap-25" data-aos="fade-up" data-aos-duration="1800">
            <span className="flex flex-col gap-3">
              20+
              <h3 className="text-[22px] max-w-[500px]">Mn.Sq.Ft. Delivered</h3>
            </span>
            <span className="flex flex-col gap-3">
              9+
              <h3 className="text-[22px] max-w-[500px]">Ongoing Projects</h3>
            </span>
          </div>
          <p className="text-[21px] max-w[500px] italic" data-aos="fade-up" data-aos-duration="2000">
            We connect you to the home of your dreams, providing a simple,
            secure, and efficient experience to buy, sell, or rent properties
            anywhere
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
