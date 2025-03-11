'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

const Legacy = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full bg-primary text-secondary"
    >
      <article className="mx-auto py-14 p-4 px-5 max-w-5xl flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="text-h3 lg:text-h4 font-bold text-center max-w-[80%]">Want to leave a legacy but don&apos;t know how?</h2>
          <p className="my-6 text-center max-w-[80%] lg:max-w-[60%] lg:leading-8">
            Ever Journal makes capturing your life story both effortless and insightful.
          </p>
          <Button text="Join the Waitlist" click={() => console.log('Join the Waitlist')} />
        </div>
      </article>

    </motion.section>
  )
}

export default Legacy;
