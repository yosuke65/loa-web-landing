'use client'

import { useEffect } from "react";
import { motion } from "framer-motion";
import { privacyPolicy } from "@/components/data/legal";
import LegalDocs from "@/components/LegalDocs";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ delay: 0.5 }}
      className="mx-auto px-4 py-20 pt-36 container max-w-[1200px] min-h-screen flex items-center flex-col justify-center"
    >
      <h2 className="text-h2 lg:text-h3 font-black text-center mb-14">Privacy Policy</h2>
      <p className="text-center py-5">Effective Date: July 20, 2024</p>
      <article className="flex flex-col gap-5">
        <h3 className="font-extrabold text-h5">Introduction</h3>
        <p className="text-base">
          This Privacy Policy applies to the Ever Journal app (referred to as &quot;Application&quot;),
          created by Yosuke Sakurai (referred to as &quot;Service Provider&quot;).
          This document outlines how the Application collects, uses, and protects user data.
          By using the Application, you agree to the terms of this Privacy Policy.
        </p>
      </article>
      <LegalDocs mou={privacyPolicy} />
      <p className="text-center mt-4">
        By using our platform and services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
      </p>
    </motion.section>
  )
}

export default Privacy;