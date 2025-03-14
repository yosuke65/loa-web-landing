'use client'

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      comment: '',
      areaOfInterest: {
        everJournalUsage: false,
        adsSponsorship: false,
        partnership: false,
        others: false,
      },
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone Number is required'),
      comment: Yup.string().max(500, 'Comment must be at most 500 characters'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ delay: 0.5 }}
      className="min-h-screen w-full"
    >
      <h2 className="text-h2 bg-bg pt-36 pb-20 lg:text-h3 text-white w-full text-center mb-14">Contact Us</h2>
      <div className="mx-auto px-5 md:px-[5%] pb-20 container max-w-[1200px]">
        <h2 className="text-2xl font-semibold text-center mb-4">Need Additional Support?</h2>
        <p className="text-gray-700 mb-6 text-center">
          Fill the form below and we will be in touch.
        </p>

        <form onSubmit={formik.handleSubmit} className="max-w-[500px] mx-auto flex flex-col justify-center">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="shadow appearance-none border rounded w-full h-[41px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>

          <article className="flex items-center gap-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="shadow appearance-none border rounded w-full h-[41px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-bold mb-2">
                Phone Number:
              </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={formik.values.phone}
                  onChange={(phone) => formik.setFieldValue('phone', phone)}
                  onBlur={() => formik.setFieldTouched('phone', true)}
                  className=""
                  defaultCountry="us"
                  name="phone"
                  international
                />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm">{formik.errors.phone}</div>
              ) : null}
            </div>
          </article>

          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-bold mb-2">
              Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.comment}
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Additional details here"
            />
            {formik.touched.comment && formik.errors.comment ? (
              <div className="text-red-500 text-sm">{formik.errors.comment}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Area of Concern:</label>
            <div className="grid grid-cols-2 gap-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  name="areaOfInterest.everJournalUsage"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.areaOfInterest.everJournalUsage}
                />
                <span className="ml-2">Ever Journal Usage</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  name="areaOfInterest.adsSponsorship"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.areaOfInterest.adsSponsorship}
                />
                <span className="ml-2">Ads Sponsorship</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  name="areaOfInterest.partnership"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.areaOfInterest.partnership}
                />
                <span className="ml-2">Partnership</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  name="areaOfInterest.others"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.areaOfInterest.others}
                />
                <span className="ml-2">Others</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-black mt-2 active:scale-95 hover:bg-gray-800 transition-all text-white font-bold h-[41px] rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>

        <p className="mt-7 text-gray-600 text-center">Prefer email?
          <a href="mailto:hawk006@gmail.com" className="text-black pl-1 hover:underline font-bold">
            hawk006@gmail.com
          </a>
        </p>
      </div>
    </motion.section>
  )
}

export default Contact;