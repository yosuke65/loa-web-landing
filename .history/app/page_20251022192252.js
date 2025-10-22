"use client";

import "./globals.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, Heart, Zap } from "lucide-react";
import AppStoreDownloadButton from "@/components/AppStoreDownloadButton";
import GooglePlayDownloadButton from "@/components/GooglePlayDownloadButton";
import HowItWorks from "@/components/HowItWorks";
import AppFeatures from "@/components/AppFeatures";
import UserTestimonials from "@/components/UserTestimonials";
import Start from "@/components/Start";
import Faqs from "@/components/Faqs";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section with new gradient */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black pt-20 overflow-hidden"
      >
        {/* Floating elements for mystical feel */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-indigo-300 rounded-full animate-pulse"></div>
          <div className="absolute top-60 left-1/2 w-1 h-1 bg-white rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles className="w-8 h-8 text-purple-300" />
              <span className="text-purple-300 text-lg font-medium">
                Law of Attraction for the Digital Age
              </span>
              <Sparkles className="w-8 h-8 text-purple-300" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Attract What You
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Focus On
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Transform every phone interaction into a moment of conscious
              awareness. LoA interrupts digital distractions with personalized
              affirmations, helping you align your energy with your highest
              intentions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <GooglePlayDownloadButton />
              <AppStoreDownloadButton />
            </motion.div>
          </div>

          {/* Key principles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Intentional Awareness
              </h3>
              <p className="text-gray-300">
                Notice your thoughts and redirect your focus consciously before
                digital distractions take hold.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Aligned Energy
              </h3>
              <p className="text-gray-300">
                Tune your mindset toward gratitude, abundance, and clarity
                through personalized affirmations.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Conscious Living
              </h3>
              <p className="text-gray-300">
                Turn micro-moments into opportunities for manifestation and
                mindful decision-making.
              </p>
            </div>
          </motion.div>

          {/* App visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="text-center"
          >
            <div className="mx-auto max-w-md md:max-w-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 mb-6">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Your Daily Affirmation</h3>
                  <p className="text-purple-100 text-sm">"I am aligned with my highest purpose and attract abundance in all forms"</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <span className="text-white text-sm">Instagram</span>
                  <span className="text-purple-300 text-xs">Paused for reflection</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <span className="text-white text-sm">TikTok</span>
                  <span className="text-purple-300 text-xs">Mindful moment</span>
                </div>
                <div className="text-center pt-4">
                  <div className="inline-flex gap-2">
                    <button className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">Continue</button>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm">Redirect Energy</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-gray-50 to-purple-50"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-900 to-purple-900 bg-clip-text text-transparent"
          >
            "You attract what you think and feel"
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-700 leading-relaxed mb-12"
          >
            The Law of Attraction teaches us that our thoughts, emotions, and
            focus shape our reality. When you align your energy with gratitude,
            clarity, and abundance, you naturally attract experiences that
            reflect those states. LoA brings this ancient wisdom into your
            digital life.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-900">
                Before: Unconscious Scrolling
              </h3>
              <p className="text-gray-600">
                Mindless phone use scattered your attention, feeding energy into
                distraction, anxiety, and endless comparison.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="p-6 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-900">
                After: Conscious Alignment
              </h3>
              <p className="text-gray-700">
                Every digital interaction becomes an opportunity to affirm your
                intentions and redirect energy toward your highest good.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-gray-50 to-purple-50"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-900 to-purple-900 bg-clip-text text-transparent"
          >
            "You attract what you think and feel"
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-700 leading-relaxed mb-12"
          >
            The Law of Attraction teaches us that our thoughts, emotions, and
            focus shape our reality. When you align your energy with gratitude,
            clarity, and abundance, you naturally attract experiences that
            reflect those states. LoA brings this ancient wisdom into your
            digital life.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-900">
                Before: Unconscious Scrolling
              </h3>
              <p className="text-gray-600">
                Mindless phone use scattered your attention, feeding energy into
                distraction, anxiety, and endless comparison.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="p-6 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-900">
                After: Conscious Alignment
              </h3>
              <p className="text-gray-700">
                Every digital interaction becomes an opportunity to affirm your
                intentions and redirect energy toward your highest good.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <HowItWorks />
      <AppFeatures />
      <UserTestimonials />
      <div className="relative top-[500px]">
        <Start />
      </div>
      <div className="relative top-[500px] mb-[500px]">
        <Faqs />
      </div>
    </>
  );
}
