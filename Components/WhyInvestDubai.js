import React from 'react';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";
import { FaPersonWalking } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { FaHandHoldingHeart } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { BsPersonVcard } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiGift } from "react-icons/ci";

const DubaiInvestmentInfo = () => {
  const investmentReasons = [
    {
      icon: <FaDollarSign className="w-8 h-8 text-[#CDAB6E]" />,
      title: "Higher Rental Yields",
      description: "Investor can achieve gross rental yields of between 5-9%."
    },
    {
      icon: <LuHouse className="w-8 h-8 text-[#CDAB6E]" />,
      title: "Prime Real Estate",
      description: "Property prices per square foot are lower than in many other cities globally."
    },
    {
      icon: <FaRegMoneyBillAlt className="w-8 h-8 text-[#CDAB6E]" />,
      title: "No Annual Property Taxes",
      description: "Once a property is purchased, you will not pay additional taxes in the future."
    },
    {
      icon: <FaPersonWalking className="w-8 h-8 text-[#CDAB6E]" />,
      title: "High Accessibility",
      description: "The city has direct flights from all the major cities in the world."
    },
    {
      icon: <GrMapLocation className="w-8 h-8 text-[#CDAB6E]" />,
      title: "Touristic Appeal",
      description: "World-class shopping malls, attractions, hotels and beautiful beaches."
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8 text-[#CDAB6E]" />,
      title: "Communal Safety",
      description: "Dubai is extremely safe and ideal for families and individuals."
    },
    {
      icon: <VscGraphLine className="w-8 h-8 text-[#CDAB6E]" />,
      title: "Business Hub & Logistics",
      description: "Dubai is a major attraction to foreign investors in different sectors."
    },
    {
      icon: <BsPersonVcard className="w-8 h-8 text-[#CDAB6E]" />,
      title: "UAE Golden Visa",
      description: "UAE residency, golden & green visa are now possible for property investors."
    },
    {
      icon: <FaRegLightbulb className="w-8 h-8 text-[#CDAB6E]" />,
      title: "Sustainable Planning",
      description: "Dubai is investing heavily in technology, green energy, healthcare and education."
    },
    {
      icon: <CiGift className="w-8 h-8 text-[#CDAB6E]" />,
      title: "U By Emaar Loyalty Programme Membership",
      description: "Emaar Property Owners with investments of AED 20M+ qualify for the Platinum tier, while those investing AED 10M + qualify for the Gold tier."
    }
  ];

  return (
    <div className=" max-w-[1080px] bg-white text-center mx-auto from-amber-50 to-orange-50 py-2 md:pt-6 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Lato, sans-serif' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-left mb-5 md:mb-12">
           <h1 className="font-normal text-[25px] md:text-left text-center md:text-[35.0312px] md:leading-[37.6944px] leading-[30.6944px] tracking-[1px] lato text-[#000000] md:mb-6">
           WHY INVEST IN DUBAI?
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
          {investmentReasons.map((reason, index) => (
            <div 
              key={index}
              className="hover:shadow-xl flex flex-col items-center md:items-start md:justify-start justify-center transition-all duration-300 px-4 py-3  border border-none group"
            >
              {/* Icon */}
              <div className="flex justify-left mb-2 ">
                <div className="p-3 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors duration-300">
                  {reason.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-[16px] md:text-[18px] sm:text-xl text-black lato font-extralight mb-4 leading-tight text-left">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-[16px] md:text-left text-center text-black font-sans font-extralight leading-relaxed ">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div>
    </div>
  );
};

export default DubaiInvestmentInfo;
