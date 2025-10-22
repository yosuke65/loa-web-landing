"use client";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Effortless Journaling, Guided by AI",
    desc: "No pressure. No blank pages. Just thoughtful prompts, mood detection, and emotionally intelligent feedback.",
  },
  {
    id: "02",
    title: "Your Life, All in One Place",
    desc: "Collect your thoughts, photos, emotions, and moments in a private timeline. LoA becomes the center of your story.",
  },
  {
    id: "03",
    title: "Your Biography, Built Over Time",
    desc: "You don’t have to write a book — just write a little at a time. Eve organizes your reflections into chapters like “Healing,” “Becoming a Parent,” or “Finding My Voice.”",
  },
  {
    id: "04",
    title: "Reflect with Depth, Not Just Text",
    desc: "Add photos, locations, or moods to your entries. Your memories are more than words — they’re visual, emotional, and deeply felt.",
  },
  {
    id: "05",
    title: "See the Patterns That Shape You",
    desc: "Track emotional themes, personal growth, and recurring reflections. Eve connects the dots across time — helping you understand your journey.",
  },
  {
    id: "06",
    title: "Share Only When It Feels Right",
    desc: "Everything stays private unless you choose otherwise. Share chapters with someone you love, save entries for your future self, or export your story as a personal legacy.",
  },
];

const Benefits = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full bg-secondary text-primary"
    >
      <article className="container mx-auto py-20 px-5 md:px-[5%] 2xl:px-0 max-w-[1200px] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-h2 lg:text-h3 font-bold max-w-[80%]">
            Features & Benefits
          </h2>
          <span className="w-16 h-1 mt-3 bg-bg" />
          <motion.div className="mt-16 max-w-[700px]">
            <h3 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Unlock the Power of AI-Driven{" "}
              <span className="relative text-[#505050]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-400/70 dark:fill-pink-300/60"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Storytelling</span>
              </span>
              .
            </h3>
            <p className="mt-6 text-base text-center text-secondary/90">
              LoA isn’t just about capturing memories — it’s about making sense
              of them. With AI guidance, emotional awareness, and a beautifully
              organized timeline, your life story unfolds as you live it.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="relative flex flex-col gap-4 border border-primary/20 shadow-lg bg-white text-primary rounded-xl p-6 md:p-8"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] rounded-full border-2 bg-white text-[#505050] flex items-center justify-center font-bold text-md shadow-md">
                {feature.id}
              </div>
              <h4 className="mt-6 text-lg font-semibold text-center lg:text-left">
                {feature.title}
              </h4>
              <p className="text-base text-center lg:text-left text-secondary/80">
                {feature.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </article>
    </motion.section>
  );
};

export default Benefits;
