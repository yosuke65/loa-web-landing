"use client";

import "./globals.css";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// ✅ Load Meta Pixel only on the client (Prevents SSR issues)
const MetaPixelNoSSR = dynamic(() => import("@/components/MetaPixelEvents"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <html lang="en">
      <head>
        <title>LoA - Law of Attraction for the Digital Age</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="LoA transforms your phone into a tool for conscious living. Practice the Law of Attraction with affirmation screens, digital mindfulness, and intentional awareness in every interaction."
        />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <meta
          property="og:title"
          content="LoA - Law of Attraction for the Digital Age"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.loa-app.com" />
        <meta property="og:image" content="https://www.loa-app.com/og.png" />
        <meta
          property="og:description"
          content="Transform digital distractions into moments of conscious awareness. Align your technology use with the Law of Attraction."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LoAApp" />
        <meta
          name="twitter:title"
          content="LoA - Law of Attraction for the Digital Age"
        />
        <meta
          name="twitter:description"
          content="Transform digital distractions into moments of conscious awareness. Align your technology use with the Law of Attraction."
        />
        <meta name="twitter:image" content="https://www.loa-app.com/og.png" />
      </head>
      <body className="bg-gradient-to-br from-gray-50 to-purple-50 text-gray-900 min-h-screen flex flex-col">
        {/* ✅ Ensure Meta Pixel loads only on the client */}
        <Suspense fallback={null}>
          <MetaPixelNoSSR />
        </Suspense>

        <header className="w-full">
          <Navbar />
        </header>

        <motion.main
          className="w-full mx-auto py-8"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.main>

        <Footer />
      </body>
    </html>
  );
};

export default Layout;
