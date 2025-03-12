'use strict';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className='bg-bg w-full relative top-[500px] footer'>
      <div className='container mx-auto pt-10 p-5 px-5'>
        <div className='flex gap-10 items-start max-lg:gap-6'>
          <section className='flex flex-col gap-3'>
            <Link href="/" className="flex items-center cursor-pointer font-ubuntu text-white md:text-xl font-bold">
              <Image src="/ever.svg" alt="Ever Journal" width={30} height={30} />
              Ever Journal
            </Link>
            <small className='max-w-[80%] text-[#fff] text-[15] leading-[20.46px] lg:max-w-[50%]'>
              Ever Journal is your personal biographer. We help you embark on a journey of self-reflection, rediscovery, and storytelling.
            </small>
          </section>
          <section className='block'>
            <h2 className='text-[#505050] pb-2 text-h5 font-tiempos'>HELP</h2>
            <div className='flex flex-col gap-2 text-[15] text-[#fff]'>
              <Link href="/about-us" className='cursor-pointer transition-all min-w-fit hover:text-silver'>
                About
              </Link>
              <Link href="/features" className='cursor-pointer transition-all min-w-fit hover:text-silver'>
                Features
              </Link>
              <Link href="/premium" className='cursor-pointer transition-all hover:text-silver'>
                Premium
              </Link>
              <Link href="/updates" className='cursor-pointer transition-all hover:text-silver'>
                What&apos;s New
              </Link>
              <Link href="/contact" className='cursor-pointer transition-all hover:text-silver'>
                Contact Us
              </Link>
            </div>
          </section>
          <section>
            <h2 className='text-[#505050] pb-2 text-h5'>LEGALS</h2>
            <div className='flex text-[15] flex-col gap-2 text-[#fff]'>
              <Link href="/terms-and-conditions" className='cursor-pointer transition-all hover:text-silver'>
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className='cursor-pointer transition-all hover:text-silver'>
                Privacy Policy
              </Link>
            </div>
          </section>
        </div>
        <div className='w-full h-[1px] bg-[#fff] my-8 mb-4'></div>
        <small className='flex items-center justify-center gap-1 text-white py-2'>
          &copy;
          <span className='text-[14px] lg:text-[15px] text-[#fff]'>
            {`${currentYear} Ever Journal AI. All Rights Reserved`}
          </span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
