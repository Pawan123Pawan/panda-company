import React, { useState } from 'react';
import Address from './Address';
import emailjs from 'emailjs-com';
import axios from 'axios';
import {
  toastLoading,
  toastSuccess,
  toastUpdate,
} from '../../../components/reactToast/ReactToast';
import { renderBasicURL } from '../../../utils/url/renderBasicURL';

let obj = {
  fullName: '',
  email: '',
  mobile: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  // Initialize form data as an object
  const [formData, setFormData] = useState(obj);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like sending formData to a server
    console.log('Form Data Submitted: ', formData);

    setLoading(true);
    const toastId = toastLoading('Sending your Data!');
    axios
      .post(`${renderBasicURL}/api/v1/user/contact-form`, {
        fullName: formData?.fullName,
        email: formData?.email,
        mobile: formData?.mobile,
        subject: formData?.subject,
        message: formData?.message,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        toastUpdate(
          toastId,
          'success',
          "Thank you for reaching out! We'll contact you shortly."
        );

        setFormData(obj);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toastUpdate(toastId, 'error', 'Somthing went wrong!');
      });

    /**
    setLoading(true);
    emailjs
      .send(
        'service_hm6qa9h', // Replace with your EmailJS service ID
        'template_zzznabe', // Replace with your EmailJS template ID
        formData,
        'nXFPE7uAqmRgS9emt' // Replace with your EmailJS user ID (API key)
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response?.status, response?.text);
          setLoading(false);
          alert(
            'Your form has been submitted successfully! will get back to you soon!'
          );
          setFormData(obj);
        },
        (error) => {
          console.error('FAILED...', error);
          setLoading(false);
          alert('failed form submittion.');
        }
      );
       */
  };

  return (
    <div className="mx-auto my-8">
      {' '}
      {/* Added margin-top and margin-bottom */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="py-7 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-8 gap-y-8">
            {/* Address Section */}
            <div className="w-full h-[350px] md:h-[400px] col-span-2 lg:h-[500px] rounded-xl p-4 md:p-6 lg:py-10 flex flex-col justify-around myShadow2 border-l-2 border-primary">
              {' '}
              {/* Fixed shadow class */}
              <Address />
            </div>

            {/* Form Section */}
            <div className="space-y-4 col-span-3 rounded-xl p-4 md:p-10 myShadow2 border-l-2 border-primary ">
              <p className="text-4xl font-bold text-gray-800 text-center">
                Get In Touch
              </p>
              {/* <p className="text-md text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page randomised words which don't
                look even slightly when looking at its layout.
              </p> */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-800"
                  >
                    Full Name <span className="text-red-500 text-md">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      type="text"
                      placeholder="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-800"
                  >
                    Email Address{' '}
                    <span className="text-red-500 text-md">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* Mobile Field */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="text-base font-medium text-gray-800"
                  >
                    Mobile Number{' '}
                    <span className="text-red-500 text-md">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      type="number"
                      placeholder="mobile Number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="text-base font-medium text-gray-800"
                  >
                    Subject <span className="text-red-500 text-md">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-base font-medium text-gray-800"
                  >
                    Message <span className="text-red-500 text-md">*</span>
                  </label>
                  <div className="mt-2">
                    <textarea
                      className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      rows="4"
                      placeholder="Your message..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-[200px]">
                  <button
                    disabled={loading}
                    type="submit"
                    className={`inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-white hover:text-primary border-[2px] hover:border-primary ${loading && 'cursor-not-allowed bg-gray-400'}`}
                  >
                    {loading ? 'sending...' : '  Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
