'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isThankYouPage = pathname === "/thank-you";

  return (
    <div className={`md:pb-4 ${isThankYouPage ? 'pb-3' : 'pb-14'} py-4 px-4 text-[13px] lato bg-[#F2F2F2] text-black flex flex-row items-center justify-center space-x-7 text-center`}>
      <Link
        href="https://properties.emaar.com/en/privacy-policy/"
        className="hover:underline tracking-widest font-semibold"
      >
        PRIVACY POLICY
      </Link>
      <span className="border-l h-4 border-black"></span>
      <Link
        href="https://properties.emaar.com/en/terms-and-conditions/"
        className="hover:underline tracking-widest uppercase font-semibold"
      >
        TERMS & CONDITIONS
      </Link>
    </div>
  );
};

export default Footer;
