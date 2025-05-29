import Image from "next/image";

export default function DubaiInvestmentEvent() {
  return (
    <section className="px-4 py-7 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-end gap-2 md:gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 md:text-left">
          <div className="flex items-center gap-4 mb-4">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap">
              Your Opportunity Awaits!
            </p>
             <div className="w-[100px] h-px bg-gray-500"></div>
          </div>
          <h1 className="font-normal text-[25px] md:text-left text-center md:text-[35.0312px] md:leading-[37.6944px] leading-[30.6944px] tracking-[1px] lato text-[#000000] mb-3 md:mb-6">
            INVEST IN DUBAI WITH EMAAR
          </h1>
          <p className="text-base font-extralight md:text-left text-center text-[#000000] mb-4">
            Gain insider knowledge on iconic masterplans & projects and
            investment opportunities with Emaar, the world-renowned developer
            behind iconic Burj Khalifa & Dubai Mall.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-[40%] w-full flex items-center justify-center">
          <div className="relative w-full md:w-[300px] h-[350px] md:h-[400px]">
            <Image
              src="/assets/EmaarInvest.jpg"
              alt="Dubai skyline"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover shadow-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
