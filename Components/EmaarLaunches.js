'use client'
import Image from "next/image";

const projects = [
  {
    title: "GRAND POLO",
    image: "/assets/Emaar_Image1.webp",
  },
  {
    title: "rivera",
    image: "/assets/Emaar_Image4.webp",
  },
  {
    title: "albero",
    image: "/assets/Emaar_Image2.webp",
  },
  {
    title: "PALACE VILLAS OPERA",
    image: "/assets/Emaar_Silva.webp",
  },
  {
    title: "GOLF VERGE",
    image: "/assets/Emaar_GolfVerge.webp",
  },
  {
    title: "GOLF Meadow",
    image: "/assets/Emaar_Image6.webp",
  },
];

export default function EmaarLaunches() {
  return (
    <div className="px-4 md:py-8 max-w-5xl mx-auto bg-white ">
      <h1 className="font-normal text-[25px] md:text-left text-center md:text-[35.0312px] md:leading-[37.6944px] leading-[30.6944px]t tracking-[1px] lato text-[#000000] md:mb-12 mb-6">
        LATEST EMAAR LAUNCHES
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="relative group overflow-hidden shadow-md">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              quality={95}
              height={600}
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-65"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20">
              <button
                onClick={() => {
                  const targetId = window.innerWidth <= 768 ? "form" : "top";
                  const target = document.getElementById(targetId);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white cursor-pointer text-black px-10 py-4 lato tracking-[2px] text-sm font-semibold hover:bg-gray-200 transition rounded-sm"
              >
                REGISTER INTEREST
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 border-none pb-4">
        <p className="text-sm font-semibold mt-7 text-gray-400 uppercase tracking-wide whitespace-nowrap">
          Details
        </p>
        <div className="w-[100px] mt-8 h-px bg-gray-500"></div>
      </div>
    </div>
  );
}
