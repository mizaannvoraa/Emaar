'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isThankYouPage = pathname === "/thank-you";

  return (
    <div className={`md:pb-2 ${isThankYouPage ? 'pb-3' : 'pb-14'} py-2 px-2 text-[13px] lato bg-[#F2F2F2] text-black flex flex-row items-center justify-center space-x-7 text-center`}>
      <Link
        href="https://properties.emaar.com/en/privacy-policy/"
        className="mid_text text-[11px] text-gray-600 hover:underline tracking-widest font-semibold"
      >
        PRIVACY POLICY
      </Link>
      <span className="border-l h-4 border-black"></span>
      <Link
        href="https://properties.emaar.com/en/terms-and-conditions/"
        className="mid_text text-[11px] text-gray-600 hover:underline tracking-widest uppercase font-semibold"
      >
        TERMS & CONDITIONS
      </Link>
       <span className="border-l h-4 border-black"></span>
     <p className=" mid_text text-[11px] text-gray-600 tracking-widest uppercase font-semibold">Designed & Developed by <Link
        href="https://www.nuvoraa.com/"
        className="mid_text hover:underline text-gray-800 tracking-widest uppercase font-black"
      >Nuvoraa Digital</Link></p>
        
    </div>
  );
};

export default Footer;
