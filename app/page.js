"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TypewriterHeader from "@/components/Heading";
import Button from "@/components/Button";
import HowItWorks from "@/components/HowItWorks";
import OurStory from "@/components/OurStory";
import Benefits from "@/components/Benefits";
import Legacy from "@/components/Legacy";

export default function Home() {
  const handleWaitlist = () => {
    console.log('Join the Waitlist');
  }

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        className="pt-16 flex flex-col items-center justify-items-center arc"
      >
        <section className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-8">
          <article className="relative p-4 flex flex-col items-center justify-center">
            <TypewriterHeader text="AI-Powered Storytelling for Your Life" />
            <p className="mt-56 text-white w-[80%] text-center">
              Capture your experiences, reflect on your past, and discover your purpose - one story at a time, with the help of AI.
            </p>

            <div className="mt-8 flex space-x-4">
              <Button text="Join the Waitlist" click={handleWaitlist} />
              <div className="hidden md:flex">
                <Button text="Learn More" click={handleWaitlist} />
              </div>
            </div>
          </article>
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="flex items-center w-full justify-center"
          >
            <Image src="/mockups/heroImgMob.webp" alt="Ever Journal Mockup" className="max-w-[90%]" width={500} height={200} />
          </motion.article>
        </section>
      </motion.article>
      <HowItWorks />
      <OurStory />
      <Benefits />
      <Legacy />
    </>
  );
}
