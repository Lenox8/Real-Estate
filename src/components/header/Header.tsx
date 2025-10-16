
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden" id="home"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
