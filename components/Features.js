'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: '01',
    title: 'AI-Powered Biography Generator',
    img: '/features/powered.webp',
    desc: [
      'Convert journal entries into a chronological, well-structured narrative.',
      'Highlight key themes like achievements, family milestones, and life lessons.',
      ' Watch your biography evolve seamlessly as you write.'
    ],
  },
  {
    id: '02',
    title: 'Organized Chapters for Your Biography',
    img: '/features/organize.webp',
    desc: [
      'Dynamic Chapter Creation – Journals are grouped into meaningful phases of your life, such as "College Years," "Parenthood," or "Adventures Abroad."',
      'AI-Powered Structuring – Eve suggests chapter titles and organizes content based on recurring themes and major life events.',
      'Customization – Rename, merge, and reorganize chapters to tell your story, your way.'
    ],
  },
  {
    id: '03',
    title: 'Multimedia Integration',
    img: '/features/media.webp',
    desc: [
      'Attach photos, voice recordings, and videos to enrich your story.',
      'AI-assisted summaries of uploaded videos/images for deeper storytelling.',
      'Create a truly immersive biography that captures the essence of your life.'
    ],
  },
  {
    id: '04',
    title: 'Real-Time Interactive Biography Preview',
    img: '/features/realtime.webp',
    desc: [
      'Get a glimpse of your biography as you write, with real-time updates.',
      'Preview your story in different formats, such as a timeline or a traditional book.',
      'Edit, add, or remove content directly from the preview screen.',
      'AI-generated event-based summaries (like Spotify Wrapped, but for your life)—e.g., "Japan Trip 2025" or "School Graduation".',
    ],
  },
  ,
  {
    id: '07',
    title: 'Full Customization & Personalization',
    img: '/features/custom.webp',
    desc: [
      'Adjust the tone and writing style (formal, casual, poetic).',
      'Select specific entries or periods to include in your biography.'
    ],
  },
  {
    id: '05',
    title: 'AI-Assisted Journaling & Social Integration',
    img: '/features/integrate.webp',
    desc: [
      'Real-Time AI Prompts – As you write, Eve suggests prompts to guide deeper self-reflection.',
      'Auto-generate journals & biography content from your social media posts (Instagram, Facebook, X).',
      'Add YouTube Music or Spotify songs to journals and assign a main theme song to each biography chapter.'
    ],
  },
  {
    id: '06',
    title: 'Export, Share & Monetize Your Story',
    img: '/features/export.webp',
    desc: [
      'Export your biography as a PDF or hardcover book.',
      'Choose your audience – share publicly, privately, or with selected family/friends.',
      'Sell your biography to the world—monetize your life story!'
    ]
  }
];

const Feature = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full bg-secondary text-primary"
    >
      <article className="container mx-auto py-14 p-4 px-5 max-w-[1200px] gap-4flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-h2 lg:text-h3 font-bold text-center max-w-[80%]">Features & Benefits</h2>
          <span className="w-16 h-1 mt-3 bg-bg" />
          
          <article className="flex flex-col items-center justify-center mt-16">
            <h3 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-4xl lg:max-w-[60%] lg:text-center" style={{ lineHeight: 1.2 }}>
              Unlock the Power of AI-Driven
              <span className="relative whitespace-nowrap text-[#505050]"> 
                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-400/70 dark:fill-pink-300/60" preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative "> Storytelling</span>
              </span>!
            </h3>
            <p className="mt-5 text-justify md:max-w-[60%] md:text-center">
              Journaling doesn’t have to be a struggle, it just needs structure, guidance, and purpose. Now you can write, reflect, and preserve your legacy.
            </p>
          </article>
        </div>
        <div className="mt-16 lg:mt-26 max-w-[1000px] mx-auto grid grid-cols-1 gap-5">
          {features.map((paragraph, index) => (
            <motion.article
              key={paragraph.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className={`mt-2 items-center flex flex-col mx-auto md:justify-between gap-4 p-4 py-10 border-b-2 last:border-b-0 border-silver ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <Image src={paragraph.img} alt={paragraph.title} className="w-[50%] md:w-[20%]" width={500} height={200} />
              <div className="flex flex-col items-start">
                <h4 className="text-h5 font-bold mt-5 lg:mt0 lg:text-left text-center">{paragraph.title}</h4>
                <ul className="mt-2 px-4 text-center lg:text-left">
                  {paragraph.desc.map((item, index) => (
                    <li key={index} className="text-left list-disc">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </article>

    </motion.section>
  )
}

export default Feature;
