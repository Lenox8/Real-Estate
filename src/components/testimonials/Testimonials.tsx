import { testimonialsData } from "../../assets/assets";
import RatingStars from "../stars/RatingStars";

const Testimonials = () => {
  return (
    <div
      id="Testimonials"
      className="mb-25 flex flex-col items-center justify-center gap-5 lg:gap-10"
    >
      <div className="flex items-center justify-center">
        <h1 className="text-[30px] lg:text-[64px] md:text-[50px] select-none border-gray-500">
          <span className="font-semibold">Customers </span>Testimonials
        </h1>
      </div>
      <p className="text-[18px] md:text-[21px] max-w-[400px] text-center">
        Read Stories from Who Found Home with Us
      </p>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-5 lg:gap-10" data-aos="flip-up" data-aos-duration="2000">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="select-none flex flex-col items-center justify-center text-center shadow-lg border-1 px-3 p-12 rounded-md"
            >
              <img src={item.image} />
              <h3 className="text-[19px]">{item.name}</h3>
              <h4 className="text-[14px]">{item.title}</h4>
              <RatingStars />
              <p className="max-w-[400px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
