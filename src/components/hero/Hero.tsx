
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="mx-auto container flex flex-col items-center justify-center mt-35">
      <h1 className="select-none text-white text-[30px] lg:text-[64px] md:text-[50px]  font-semibold max-w-[850px] text-center tracking-normal" data-aos="fade-up-left">
       Explore the best homes in Maputo
      </h1>
      <div className="flex gap-6 mt-10" data-aos="fade-up-left" data-aos-duration="2000">
        <Button variant='outline' size='lg' className="cursor-pointer bg-transparent text-white">Projects</Button>
        <Button variant='outline' size='lg' className="cursor-pointer hover:bg-blue-500">Contact Us</Button>
      </div>
    </div>
  );
};

export default Hero;
