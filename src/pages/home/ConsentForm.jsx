import React, { useState, useEffect } from 'react';
import { Cookies } from 'react-cookie-consent';
import ConfettiExplosion from 'react-confetti-explosion';
import panda from '../../assets/panda_service.png';

// Tailwind Modal Component with a close button
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex items-center justify-center z-50 mt-20">
      <div
        className="w-full max-w-lg mx-auto p-8 bg-cardbg rounded-lg shadow-2xl sidescrollbar relative overflow-y-auto max-h-[80vh]"
        style={{
          backgroundImage: `url(${panda})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <button
          className="absolute text-3xl top-3 right-3 text-white font-bold hover:text-bg-primary/20"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const ConsentForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const consentAccepted = localStorage.getItem('cookieConsentAccepted');
    const closeTimestamp = localStorage.getItem('modalClosedTimestamp');

    if (!consentAccepted) {
      const timeSinceClose = closeTimestamp
        ? Date.now() - parseInt(closeTimestamp, 10)
        : null;

      // Logic to show modal based on previous close and cookie acceptance
      if (!closeTimestamp || timeSinceClose > 5 * 60 * 1000) {
        setTimeout(() => {
          setShowModal(true);
        }, 15 * 1000);
      }
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set('mySiteCookieConsent', 'true', { expires: 365 });
    localStorage.setItem('cookieConsentAccepted', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfetti(true);
    handleAcceptCookies();
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    localStorage.setItem('modalClosedTimestamp', Date.now());

    // Reset modal visibility after 5 minutes if not accepted
    setTimeout(
      () => {
        const consentAccepted = localStorage.getItem('cookieConsentAccepted');
        if (!consentAccepted) {
          setShowModal(true);
        }
      },
      15 * 60 * 1000
    ); // 5 minutes in milliseconds
  };

  return (
    <div className="bg-primary/10">
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Panda Guys Inquiry Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-primary/30 p-6 rounded-md shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full mt-1 p-3 border bg-violet-100 border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full mt-1 p-3 border bg-violet-100 border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-3 border bg-violet-100 border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Website URL
            </label>
            <input
              type="url"
              name="websiteURL"
              required
              className="w-full mt-1 p-3 border bg-violet-100 border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white">
                Projected Monthly Budget
              </label>
              <input
                type="text"
                name="budget"
                required
                className="w-full mt-1 p-3 border bg-violet-100 border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                required
                className="w-full mt-1 p-3 border bg-violet-100 border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Service of Interest
            </label>
            <input
              type="text"
              name="service"
              required
              className="w-full mt-1 p-3 border bg-violet-100 border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Your Goal
            </label>
            <textarea
              name="goal"
              required
              className="w-full mt-1 p-3 border bg-violet-100 border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              name="textContact"
              className="mr-2 focus:ring-2 focus:ring-primary/30"
            />
            <label className="text-sm text-white">
              I'd prefer to be contacted by text
            </label>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              name="newsletter"
              className="mr-2 focus:ring-2 focus:ring-primary/30"
              defaultChecked
            />
            <label className="text-sm text-white">
              Subscribe to our newsletter
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary/40 text-white py-3 px-4 rounded-md hover:from-cardbg hover:to-cardbg transition-shadow shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-primary/30"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
      {showConfetti && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <ConfettiExplosion
            particleCount={1000}
            duration={5000}
            width={2000}
            force={0.5}
            onComplete={() => setShowConfetti(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ConsentForm;
