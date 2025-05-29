import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" md:pb-4 pb-13 py-4 px-4 text-[13px] lato bg-white text-black flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-7 text-center">
        <Link
          href="https://properties.emaar.com/en/privacy-policy/"
          className="hover:underline tracking-widest font-semibold"
        >
          PRIVACY POLICY
        </Link>
        <span className="hidden sm:inline-block border-l h-4 border-black"></span>
        <Link
          href="https://properties.emaar.com/en/terms-and-conditions/"
          className="hover:underline tracking-widest uppercase font-semibold"
        >
          Terms & Conditions{" "}
        </Link>
      </div>
    </>
  );
};

export default Footer;
