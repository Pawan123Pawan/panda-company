import React from 'react';

const TermsConditions = () => {
  return (
    <div className="p-4 w-full md:w-[90%] lg:w-4/5 mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-primary">
        Terms of Use
      </h2>

      {/* Section 1: Introduction */}
      <div className="mb-6">
        <h3 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">
          Introduction
        </h3>
        <div className="flex items-center w-1/5 mb-4">
          <div className="w-1/2 h-1 bg-primary"></div>
          <div className="w-1/2 h-1 bg-purple-500"></div>
        </div>
        <p className="text-gray-600 mb-2 leading-relaxed">
          Please read these{' '}
          <span className="font-bold text-primary">Terms of Use</span> carefully
          as they apply to your use of the Pandaguys website (“
          <span className="font-bold text-primary">Pandaguys.in</span>”). By
          accessing or using the Website, you agree to be bound by these Terms
          of Use, which constitute a legally binding agreement between you and
          Pandaguys. If you do not agree to these Terms of Use, please do not
          use the Website.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We may amend these Terms of Use at any time. Your continued use of the
          Website signifies acceptance of the amended Terms of Use.
        </p>
      </div>

      {/* Section 2: Disclaimer */}
      <div className="mb-6">
        <h3 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">
         Disclaimer
        </h3>
        <div className="flex items-center w-1/5 mb-4">
          <div className="w-1/2 h-1 bg-primary"></div>
          <div className="w-1/2 h-1 bg-purple-500"></div>
        </div>
        <p className="text-gray-600 mb-2 leading-relaxed">
          Pandaguys strives to ensure the accuracy of the information on this
          Website. However, the Website is provided on an{' '}
          <span className="font-bold text-primary">“as is”</span> basis without
          any express or implied warranties. We do not guarantee the accuracy or
          completeness of any information on this Website.
        </p>
        <p className="text-gray-600 leading-relaxed">
          For verification of information, please consult Pandaguy’s sources or
          contact a Pandaguys representative. Pandaguys is not responsible for
          any loss or damage resulting from the use of information on the
          Website. We recommend using appropriate security measures, such as
          antivirus software, to protect your devices.
        </p>
      </div>

      {/* Section 3: Intellectual Property */}
      <div className="mb-6">
        <h3 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">
          Intellectual Property
        </h3>
        <div className="flex items-center w-1/5 mb-4">
          <div className="w-1/2 h-1 bg-primary"></div>
          <div className="w-1/2 h-1 bg-purple-500"></div>
        </div>
        <p className="text-gray-600 mb-2 leading-relaxed">
          <strong className="text-primary">Copyright:</strong> The material on
          this Website, including text, graphics, images, and other content, is
          protected by copyright laws. You may not alter, reproduce, store, or
          transmit any material from this Website without explicit written
          permission from Pandaguys or as permitted by copyright law.
        </p>
        <p className="text-gray-600 leading-relaxed">
          <strong className="text-primary">Trademarks:</strong> All trademarks
          on the Website are the property of their respective owners and are
          protected by relevant laws. You must not use these trademarks without
          authorization from Pandaguys or the trademark owner.
        </p>
      </div>

      {/* Section 4: Links to Other Websites */}
      <div className="mb-6">
        <h3 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">
           Links to Other Websites
        </h3>
        <div className="flex items-center w-1/5 mb-4">
          <div className="w-1/2 h-1 bg-primary"></div>
          <div className="w-1/2 h-1 bg-purple-500"></div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          The Website may contain links to external sites. Pandaguys does not
          control these sites and is not responsible for their content or any
          associated risks. A link does not imply endorsement or affiliation
          with the linked site.
        </p>
      </div>

      {/* Section 5: SPAM */}
      <div className="mb-6">
        <h3 className="text-2xl lg:text-4xl font-semibold text-primary mb-2"> SPAM</h3>
        <div className="flex items-center w-1/5 mb-4">
          <div className="w-1/2 h-1 bg-primary"></div>
          <div className="w-1/2 h-1 bg-purple-500"></div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          The electronic addresses published on this Website are intended for
          communication related to our business functions. These addresses
          should not be used for unsolicited commercial messages or SPAM.
        </p>
      </div>

      {/* Section 6: Privacy */}
      <div className="mb-6">
        <h3 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">Privacy</h3>
        <div className="flex items-center w-1/5 mb-4">
          <div className="w-1/2 h-1 bg-primary"></div>
          <div className="w-1/2 h-1 bg-purple-500"></div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Our <span className="font-bold text-primary">Privacy Policy</span>,
          which governs the collection and use of personal information, is
          available. Please review it to understand how we handle your data and
          how it may differ from the privacy policies of other websites.
        </p>
      </div>

      {/* Section 7: Liability */}
      <div className="mb-6">
        <h3 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">
           Liability
        </h3>
        <div className="flex items-center w-1/5 mb-4">
          <div className="w-1/2 h-1 bg-primary"></div>
          <div className="w-1/2 h-1 bg-purple-500"></div>
        </div>
        <p className="text-gray-600 mb-2 leading-relaxed">
          Pandaguys makes no warranties regarding the Website or its content. We
          are not liable for any damages arising from the use of the Website,
          including but not limited to direct or consequential damages. By using
          the Website, you agree to indemnify Pandaguys against any losses or
          liabilities arising from your use. Our total liability, to the extent
          permitted by law, is limited to{' '}
          <span className="font-bold text-primary">AUD$1</span>.
        </p>
      </div>

      {/* Section 8: Contact Information */}
      {/* <div className="mb-6">
        <h3 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">
          8. Contact Information
        </h3>
        <p className="text-gray-600 mb-2 leading-relaxed">
          For any queries, please contact us at:
        </p>
        <ul className="text-gray-600 list-disc ml-6">
          <li>Agency Name: Pandaguys</li>
          <li>
            Address: Head Office: 11047 SW 16TH Manor Davie, FL, USA 33324
          </li>
          <li>
            Email Address: <span className="font-bold text-primary">Info@pandaguys.in</span>
          </li>
          <li>
            Brand Name/Billing Name: Alpha Wings Tech Solutions Private Limited
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default TermsConditions;
