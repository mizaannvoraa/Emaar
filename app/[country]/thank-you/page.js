import Link from "next/link";
import React from 'react';

const Page = () => {
  return (
    <div
      style={{ minHeight: '95vh' }}
      className="flex items-center justify-center bg-white text-black p-4"
    >
      <div className="text-center">
        <div className="bg-black rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <span className="text-white text-3xl font-bold pb-2">✔</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">You are all set!</h1>
        <p className="mb-2 text-lg font-medium">Greetings from Emaar.</p>
        <p className="mb-6">Thank you for expressing interest. Our expert will contact you shortly.</p>
        <Link href="/" passHref>
          <div className="inline-block bg-[#051832] hover:bg-[#121212] text-white font-semibold px-6 py-3 rounded-full cursor-pointer">
            ⬅ GO BACK TO HOME
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
