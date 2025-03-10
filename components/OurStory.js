'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const story = [
  'Everyone has a story worth telling. But for many, the hardest part isn’t living the story — it’s capturing it!',
  'Ever Journal was born from a simple yet profound realization: we spend our lives collecting experiences, but rarely do we pause to reflect on their meaning.',
  'We saw people struggling to write their life stories, overwhelmed by where to start. We knew there had to be a way to make the process effortless, insightful, and deeply personal.',
  "That’s why we created Eve, your AI biographer. More than just an AI, Eve acts as a thoughtful guide, helping you uncover memories, structure your journey, and craft a biography that truly reflects who you are.",
  "Whether you're journaling to gain perspective, pass down a legacy, or simply document your experiences, Ever Journal is here to make your story come to life, one chapter at a time.",
  "This isn’t just journaling. It’s storytelling with purpose."
];

const OurStory = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full text-secondary"
    >
      <article className="mx-auto py-14 p-4 px-5 max-w-5xl flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-h2 font-bold text-center max-w-[80%]">How We Built Ever Journal</h2>
          <span className="w-16 h-1 mt-3 bg-secondary" />
          <Image src="/mockups/story.webp" alt="Ever Journal Mockup" className="w-full" width={500} height={400} />
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-justify">
          {story.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="mt-2"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </article>

    </motion.section>
  )
}

export default OurStory;
