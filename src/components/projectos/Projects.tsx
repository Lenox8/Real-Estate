import { projectsData } from "@/assets/assets";

const Projects = () => {
  return (
    <section
      className="relative mt-20 mx-auto container px-6 py-12 flex flex-col items-center justify-center gap-10 mb-20"
      id="projects"
    >
      <div
        className="text-[30px] md:text-[50px] lg:text-[64px] select-none text-center font-semibold"
        data-aos="fade-up"
      >
        <h1>
          Projects <span className="border-b-4 border-gray-500">Completed</span>
        </h1>
      </div>
      <p className="max-w-[500px] text-[18px] md:text-[21px] text-center text-gray-700">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Grid de projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full">
        {projectsData.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <img
              data-aos="fade-down-right"
              src={item.image}
              alt={item.title}
              className="w-full h-[250px] md:h-[300px] lg:h-[350px]  rounded-lg transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/50 text-black p-3 md:p-4 ">
              <h2 className="text-[16px] md:text-[18px] font-semibold truncate">
                {item.title}
              </h2>
              <p className="text-[12px] md:text-[14px] text-black">
                {item.price} | {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
