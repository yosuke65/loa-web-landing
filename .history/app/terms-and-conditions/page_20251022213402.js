"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ delay: 0.5 }}
      className="min-h-screen flex items-center flex-col justify-center"
    >
      <h2 className="text-h2 bg-bg pt-36 pb-20 lg:text-h3 text-white w-full text-center mb-14">
        Terms & Conditions
      </h2>
      <div className="mx-auto px-5 md:px-[5%] 2xl:px-0 pb-20 container max-w-[1200px]">
        <article className="flex flex-col gap-5">
          <p className="py-5">
            <strong>Terms and Conditions — LoA</strong>
            <br />
            Last updated: October 22, 2025
          </p>
          <p className="text-base">
            Welcome to LoA ("we", "our", or "us"). These Terms and Conditions
            ("Terms") govern your use of the LoA mobile application ("App") and
            any related services we provide.
          </p>
          <p className="text-base">
            By downloading or using the App, you agree to these Terms. If you do
            not agree, please do not use LoA.
          </p>

          <h3 className="text-lg font-bold mt-6">1. Overview</h3>
          <p className="text-base">
            LoA is a Law of Attraction and conscious digital living tool that
            helps users transform digital distractions into manifestation
            moments. The app interrupts potentially energy-draining app usage
            with personalized affirmations, breathing exercises, and mindfulness
            prompts to promote conscious awareness and intentional living.
          </p>

          <h3 className="text-lg font-bold mt-6">2. Eligibility</h3>
          <p className="text-base">
            You must be at least 13 years old to use this app. By using LoA, you
            confirm that you meet this age requirement and are legally able to
            accept these Terms.
          </p>
          <h3 className="text-lg font-bold mt-6">3. Use of the App</h3>
          <p className="text-base">When using LoA, you agree to:</p>
          <ul className="list-disc list-inside text-base ml-4">
            <li>Use the app only for lawful purposes</li>
            <li>
              Not attempt to reverse engineer, decompile, or modify the app
            </li>
            <li>
              Not use the app in a way that interferes with its normal operation
              or other users
            </li>
            <li>
              Not copy or redistribute any part of LoA without written
              permission
            </li>
          </ul>
          <p className="text-base">
            LoA is intended for personal, non-commercial use only.
          </p>

          <h3 className="text-lg font-bold mt-6">4. Permissions</h3>
          <p className="text-base">
            LoA may request specific system permissions (such as Usage Access or
            Overlay permissions) to detect when you open certain apps and
            display mindful prompts. These permissions are used only to show
            affirmations or pause screens — LoA does not access or read your
            personal data, messages, or browsing history.
          </p>

          <h3 className="text-lg font-bold mt-6">
            5. Subscription & Purchases (If Applicable)
          </h3>
          <p className="text-base">
            If LoA offers premium or paid features in the future, all purchases
            will be processed securely through Google Play Billing. By
            subscribing or purchasing, you agree to the terms provided by Google
            Play, including:
          </p>
          <ul className="list-disc list-inside text-base ml-4">
            <li>Automatic renewals unless canceled before the renewal date</li>
            <li>
              No refunds after payment, except as required by law or Google Play
              policy
            </li>
          </ul>
          <p className="text-base">
            Details about pricing, billing, and cancellations will always be
            available within the app.
          </p>

          <h3 className="text-lg font-bold mt-6">6. Intellectual Property</h3>
          <p className="text-base">
            All content, design, graphics, text, and code in LoA are the
            intellectual property of LoA and are protected by copyright and
            trademark laws. You may not copy, modify, distribute, or use any
            materials from the app for commercial purposes without prior written
            consent.
          </p>
          <h3 className="text-lg font-bold mt-6">
            7. Disclaimer of Warranties
          </h3>
          <p className="text-base">
            LoA is provided on an "as is" and "as available" basis. We make no
            warranties, express or implied, regarding:
          </p>
          <ul className="list-disc list-inside text-base ml-4">
            <li>The accuracy or reliability of affirmations or prompts</li>
            <li>The uninterrupted or error-free operation of the app</li>
            <li>
              The suitability of LoA for your specific goals or mental wellness
              outcomes
            </li>
          </ul>
          <p className="text-base">
            LoA is a self-reflection and mindfulness tool, not a substitute for
            professional therapy, coaching, or medical advice.
          </p>

          <h3 className="text-lg font-bold mt-6">8. Limitation of Liability</h3>
          <p className="text-base">
            To the fullest extent permitted by law, LoA and its creators are not
            liable for any direct, indirect, incidental, or consequential
            damages arising from your use of the app — including data loss,
            emotional distress, or productivity outcomes.
          </p>
          <p className="text-base">
            You use LoA at your own discretion and risk.
          </p>

          <h3 className="text-lg font-bold mt-6">9. Privacy</h3>
          <p className="text-base">
            Your use of LoA is also governed by our Privacy Policy. Please
            review it to understand how we collect, use, and protect your
            information.
          </p>

          <h3 className="text-lg font-bold mt-6">10. Third-Party Services</h3>
          <p className="text-base">
            The app does use third-party services that declare their Terms and
            Conditions:
          </p>
          <ul className="list-disc list-inside text-base ml-4">
            <li>
              <a
                href="https://firebase.google.com/terms/analytics"
                className="text-[#505050] underline"
              >
                Google Analytics for Firebase
              </a>
            </li>
            <li>
              <a
                href="https://firebase.google.com/terms/crashlytics"
                className="text-[#505050] underline"
              >
                Firebase Crashlytics
              </a>
            </li>
          </ul>
          <p className="text-base">
            You should be aware that there are certain things that Banana
            Sapience will not take responsibility for. Certain functions of the
            app will require the app to have an active internet connection. The
            connection can be Wi-Fi, or provided by your mobile network
            provider, but Banana Sapience cannot take responsibility for the app
            not working at full functionality if you don’t have access to Wi-Fi,
            and you don’t have any of your data allowance left.
          </p>
          <p className="text-base">
            If you’re using the app outside of an area with Wi-Fi, you should
            remember that your terms of the agreement with your mobile network
            provider will still apply. As a result, you may be charged by your
            mobile provider for the cost of data for the duration of the
            connection while accessing the app, or other third-party charges. In
            using the app, you’re accepting responsibility for any such charges,
            including roaming data charges if you use the app outside of your
            home territory (i.e. region or country) without turning off data
            roaming. If you are not the bill payer for the device on which
            you’re using the app, please be aware that we assume that you have
            received permission from the bill payer for using the app.
          </p>
          <h3 className="text-lg font-bold mt-6">11. Termination</h3>
          <p className="text-base">
            We may suspend or terminate your access to LoA at any time if we
            believe you have violated these Terms. You may also stop using the
            app at any time by uninstalling it from your device.
          </p>

          <h3 className="text-lg font-bold mt-6">
            12. Updates and Modifications
          </h3>
          <p className="text-base">
            We may update LoA and these Terms from time to time. When we do,
            we&apos;ll post the updated version in the app or on our website. By
            continuing to use LoA after updates, you agree to the new Terms.
          </p>

          <h3 className="text-lg font-bold mt-6">13. Governing Law</h3>
          <p className="text-base">
            These Terms are governed by and construed under the laws of Japan,
            without regard to conflict of law principles. You agree that any
            disputes arising from your use of LoA will be handled by courts
            located in Tokyo, Japan.
          </p>

          <h3 className="text-lg font-bold mt-6">
            14. Changes to Terms and Conditions
          </h3>
          <p className="text-base">
            We may update our Terms and Conditions from time to time. You are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Terms and Conditions on
            this page.
          </p>
          <p className="text-base">
            These terms and conditions are effective as of October 22, 2025.
          </p>

          <h3 className="text-lg font-bold mt-6">15. Contact Us</h3>
          <p className="text-base">
            If you have any questions or suggestions about our Terms and
            Conditions, please contact us at:
            <a
              href="mailto:hawk20605@gmail.com"
              className="text-[#505050] underline pl-2"
            >
              hawk20605@gmail.com
            </a>
          </p>
        </article>
      </div>
    </motion.section>
  );
};

export default TermsAndConditions;
