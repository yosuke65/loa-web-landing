'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

const story = [
  {
    id: '01',
    title: 'AI-Powered Biography Generator',
    desc: 'Effortlessly create a structured biography from your journal entries.'
  },
  {
    id: '02',
    title: 'Organized Chapters',
    desc: 'Eve, your AI biographer, organizes your memories into meaningful chapters.'
  },
  {
    id: '03',
    title: 'Multimedia Integration',
    desc: 'Enrich your story with photos, videos, and voice recordings.'
  },
  {
    id: '04',
    title: 'Real-Time AI Prompts',
    desc: 'Eve asks insightful questions to deepen your self-reflection.'
  },
  {
    id: '05',
    title: 'Social Integration',
    desc: 'Auto-generate journal and biography content from social media.'
  },
  {
    id: '06',
    title: 'Export, Share & Monetize',
    desc: 'share your story with loved ones or even sell it as a digital book.'
  }
];

const Legacy = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full bg-primary text-secondary"
    >
      <article className="mx-auto py-14 p-4 px-5 max-w-5xl flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-h3 font-bold text-center max-w-[80%]">Want to leave a legacy but don&apos;t know how?</h2>
          <p className="mt-4 text-center max-w-[80%]">
            Ever Journal makes capturing your life story effortless and insightful.
          </p>
          <Button text="Join the Waitlist" click={() => console.log('Join the Waitlist')} />
        </div>
      </article>

    </motion.section>
  )
}

export default Legacy;
