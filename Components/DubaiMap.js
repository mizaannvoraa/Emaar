import Image from "next/image";

const DubaiMapResponsive = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-sm font-semibold mt-7 text-gray-500 uppercase tracking-wide whitespace-nowrap">
            Details
          </p>
          <div className="w-[100px] mt-8 h-px bg-gray-500"></div>
        </div>
        <h1 className="text-[25px] md:text-left text-center md:text-[35.0312px] md:leading-[37.6944px] leading-[30.6944px] font-normal tracking-[1px] lato text-black mb-4">
          DUBAI MAP
        </h1>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[70vh] md:h-[85vh] lg:h-[100vh]">
        <Image
          src="/assets/DubaiMap.jpg"
          alt="Dubai Map"
          height={1000}
          width={2000}
          quality={90}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default DubaiMapResponsive;
