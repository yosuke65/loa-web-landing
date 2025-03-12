'use client';

import "./globals.css";
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '@/components/NavBar';
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  const router = useRouter();


  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <html lang="en">
      <Head>
        <title>Ever Journal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Ever Journal is more than just a journal app—it’s your personal biographer. With the help of Eve, your AI biographer, you’ll embark on a journey of self-reflection, rediscovery, and storytelling" />
      </Head>

      <body className="bg-secondary text-primary min-h-screen flex flex-col">
        <header className="w-full max-w-5xl px-4 flex justify-between items-center mx-auto">
          <Navbar />
        </header>

        <motion.main
          className="w-full mx-auto py-8"
          key={router.route}
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