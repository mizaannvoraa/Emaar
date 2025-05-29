'use client';
import Image from 'next/image';
import RegistrationForm from './RegistrationForm';

const Banner = ({countryFromURL}) => {
  return (
    <div id='top' className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
      <Image
        src="/assets/Emaar_Banner.jpg"
        alt="Emaar Mumbai - Luxury Real Estate Investment Opportunities"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

      <div className="relative z-10 min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
        <div className="max-w-7xl mx-auto h-full flex flex-col-reverse lg:flex-row pt-15 items-center justify-between px-4 sm:px-6 lg:px-8 py-8 lg:py-16 gap-8 lg:gap-12">

          {/* Left Text Section */}
          <div className="text-white max-w-2xl text-center lg:text-left flex-1 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl optima sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Discover investment <br className="hidden sm:block" />
                opportunities starting <br className="hidden sm:block" />
                <span className="font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  from AED 1.5 MILLION
                </span>
              </h1>
              <p id="form" className="text-lg sm:text-xl text-white/80 font-light max-w-xl">
                Experience luxury living in Dubai’s most prestigious developments by the world’s leading real estate developer.
              </p>
              <div className="hidden lg:flex flex-wrap gap-4 pt-4">
                {['Prime Location', 'World-Class Amenities', 'Premium Finishes'].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2 text-white/80">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full max-w-md lg:max-w-lg flex-shrink-0 order-1 lg:order-2">
            <RegistrationForm countryFromURL={countryFromURL} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
