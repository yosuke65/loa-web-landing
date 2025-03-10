'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const how = [
  'Capture daily events or dive deep into your life’s most meaningful moments.',
  'Eve Guides Your Storytelling by asking insightful questions and suggest content.',
  'Eve organizes your memories into structured chapters, suggesting new topics as you go.',
  'You decide which journal entries become part of your biography. Eve simply helps you make sense of it all.',
  'Everything you write stays between you and Eve. Your journals are safe, and you choose what to include in your biography.'
];

const HowItWorks = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full mt-[-100px] bg-secondary text-primary"
    >
      <article className="mx-auto py-14 px-5 max-w-5xl flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-h2 font-bold text-center">How It Works</h2>
          <span className="w-16 h-1 mt-3 bg-bg" />
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="mt-2"
            >
              Ever Journal is more than just a journal app—it’s your personal biographer.
              With the help of Eve, your AI biographer, you’ll embark on a journey of self-reflection,
              rediscovery, and storytelling.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="mt-8"
            >
              Travel back through your life with Eve. She will guide you through thought-provoking
              questions, helping you uncover forgotten memories, gain new perspectives, and shape
              your life story into a beautifully structured biography.
            </motion.p>
          </article>
          <Image src="/mockups/workImg.webp" alt="Ever Journal Mockup" className="w-full" width={500} height={400} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="tex"
          >
            Complete your Biography in just 5 simple steps:
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 bullet">
              {how.map((step, index) => (
                <li key={index} className="flex items-center pl-8">
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          {/* Carousel of Images goes here */}
          </motion.div>
        </motion.div>
      </article>

    </motion.section>
  )
}

export default HowItWorks