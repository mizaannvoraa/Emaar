"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isThankYouPage = pathname === "/thank-you";

  useEffect(() => {
    if (isThankYouPage) return;

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isThankYouPage]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled || isThankYouPage ? "bg-white shadow-sm" : "bg-transparent"
      }`}
      style={
        scrolled || isThankYouPage
          ? { boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)" }
          : undefined
      }
    >
      <div className="flex items-center justify-between md:py-4 py-3 px-4 md:px-25 container mx-auto">
        <Image
          src={
            scrolled || isThankYouPage
              ? "/assets/Emaar_Black_Logo.png"
              : "/assets/Emaar_Logo.svg"
          }
          width={200}
          height={200}
          alt="NavbarLogo"
          className="w-[80px] md:w-[10%]"
        />

        {!isThankYouPage && (
          <button
            onClick={() => {
              const targetId = window.innerWidth <= 768 ? "form" : "top";
              const target = document.getElementById(targetId);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`uppercase text-[15px] hover:bg-transparent font-semibold md:px-5 px-3 cursor-pointer hover:text-black hover:border hover:border-black md:py-3 py-2 tracking-[1.3px] rounded-[2px] bg-[#051832] text-white 
      transition-all duration-300 ease-in-out transform hover:scale-105 ${
        scrolled
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
          >
            Register Interest
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
