import {FaRegBuilding } from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';
import { LuHouse } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";

const stats = [
  {
    icon: <LuHouse />,
    value: '118,400+',
    label: 'Residential Units Delivered Globally',
  },
  {
    icon: <FaRegBuilding />,
    value: '50,500',
    label: 'Residential Units Currently Under Development',
  },
  {
    icon: <MdTrendingUp />,
    value: 'AED 114 BN',
    label: 'Market Cap - FY 2024',
  },
  {
    icon: <CiGlobe />,
    value: '10+ COUNTRIES',
    label: 'Global Market Presence',
  },
];

export default function WhyEmaarSection() {
  return (
    <section className="px-4 py-0 md:pb-10 bg-white">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-4 mb-4">
            <p className="text-[14px] lato font-semibold text-gray-400 uppercase tracking-[0.7px] ">
              Development Excellence
            </p>
             <div className="w-[100px] h-px bg-gray-500"></div>
          </div>
          <h1 className="text-[25px] md:text-left text-center md:text-[35.0312px] md:leading-[37.6944px] leading-[30.6944px] font-normal lato tracking-[1px] lato text-black mb-4">
            WHY EMAAR?
          </h1>
          <p className="text-black font-extralight max-w-[950px] text-center md:text-left">
            Emaar Properties, one of the world’s most valuable and admired integrated real estate development companies,
            is shaping lifestyles of the future. When you buy an Emaar property, you are investing in a name you can trust,
            a lifestyle you can enjoy, and a community you can thrive in, all within a city where dreams come true.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4  flex flex-col md:items-start items-center text-center transition hover:shadow-lg"
            >
             <div className=' flex items-center justify-center md:justify-start gap-[20px] w-full'>
                 <div className="text-[#CDAB6E] text-[35px]">{stat.icon}</div>
              <div className="text-[17px] md:text-[19px] lato font-extralight text-gray-900">{stat.value}</div>
             </div>
              <p className="text-black  font-light text-left mt-3 text-base ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
