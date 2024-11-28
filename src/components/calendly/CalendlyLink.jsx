import React, { useEffect } from 'react';

const CalendlyLink = (props) => {
  useEffect(() => {
    // Inject the Calendly stylesheet for the widget
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Inject the Calendly script for the widget
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the scripts when the component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/pandaguys24/30min',
    });
  };

  const buttonClassName = props.class
    ? `${props.class}`
    : ``;

  return (
    <button onClick={handleClick} className={buttonClassName}>
      {props.data}
    </button>
  );
};

export default CalendlyLink;
