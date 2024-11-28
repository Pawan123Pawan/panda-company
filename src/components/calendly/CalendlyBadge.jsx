import React, { useEffect } from 'react';

const CalendlyBadge = () => {
  useEffect(() => {
    // Inject the Calendly stylesheet for the badge widget
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Inject the Calendly script for the badge widget
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/pandaguys24/30min',
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: false, // You can set to true if you want Calendly branding to be displayed
      });
    };
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return null; // Badge is automatically added; no need to return any JSX
};

export default CalendlyBadge;
