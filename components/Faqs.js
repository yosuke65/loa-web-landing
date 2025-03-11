'use client'
import { useState } from 'react';
import { motion } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import faqsData from "./data/faqs.json";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full relative top-[500px] bg-secondary text-primary overflow-hidden"
    >
      <article className="container mx-auto py-14 p-4 px-5 max-w-5xl flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-h2 lg:text-h3 font-bold text-center max-w-[80%]">Frequently Asked Questions (FAQs)</h2>
          <span className="w-16 h-1 mt-3 bg-bg" />
        </div>
        <ul className="space-y-4 w-full">
          {faqsData.questions.map((faq, index) => (
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              key={index}>
              <div className={`faq-item border-b-2 ${activeIndex === index ? 'py-6 px-4 bg-[#505050] text-[#fff] rounded-lg' : ''}`}>
                <div className='flex justify-between items-start py-3'>
                  <div className="faq-question cursor-pointer max-w-[90%]" onClick={() => toggleAnswer(index)}>
                    <span className="text-lg font-semibold">
                      {faq.question}
                    </span>
                  </div>
                  <button
                    className="toggle-button"
                    onClick={() => toggleAnswer(index)}
                  >
                    {activeIndex === index ? <MdKeyboardArrowUp className='w-8 h-8' /> : <MdKeyboardArrowDown className='w-8 h-8' />} 
                  </button>
                </div>

                <div
                  className={`faq-answer mt-2 transition-transform duration-1000 ease-in-out transform ${
                    activeIndex === index ? 'translate-x-0' : '-translate-x-full'
                  }`}
                >
                  {activeIndex === index && (
                    <>
                      <p>{faq.answer}</p>
                      {faq.list && faq.list.trim() !== "" && (
                        <ul className="list-disc pl-6">
                          {faq.list.split("\n").map((item, idx) => (
                            <li key={idx}>{item.trim()}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </article>

    </motion.section>
  )
}

export default Faqs;
