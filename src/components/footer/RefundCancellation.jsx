import React from 'react';

const RefundCancellation = () => {
  return (
    <div className=" py-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">
          Refund and Cancellation Policy
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          At Panda Guys, we are committed to providing exceptional digital
          marketing services tailored to your business needs. However, we
          understand that circumstances may arise that require a change in your
          plans. This Refund and Cancellation Policy outlines the terms and
          conditions regarding service cancellations and refunds.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">
            1. Cancellation of Services
          </h2>
          <div className="flex items-center w-1/5 mb-4">
            <div className="w-1/2 h-1 bg-primary"></div>
            <div className="w-1/2 h-1 bg-purple-500"></div>
          </div>
          <p className="text-gray-700 mb-4">
            If you wish to cancel any of our services, please provide a written
            notice via email to your assigned account manager or contact us at{' '}
            <a
              href="mailto:info@pandaguys.in"
              className="text-blue-600 underline"
            >
              info@pandaguys.in
            </a>{' '}
            or call us at{' '}
            <a href="tel:91-962-506-7150" className="text-blue-600 underline">
            +91-962-506-7150
            </a>
            . Cancellations will be effective on the date we receive your
            written notice.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            1.1. Cancellations Prior to Project Commencement:
          </h3>
          <p className="text-gray-700 mb-4">
            If a cancellation request is made before the commencement of the
            project or campaign, you will be entitled to a full refund of any
            fees paid, excluding any non-refundable deposits or setup fees if
            applicable.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            1.2. Cancellations After Project Commencement:
          </h3>
          <p className="text-gray-700 mb-4">
            If a cancellation request is made after the project or campaign has
            commenced, no refunds will be provided for the work already
            completed or services rendered up to the cancellation date. Any
            prepaid fees for future services or campaigns will be refunded on a
            prorated basis, deducting the costs of work already completed.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">
            2. Refund Policy
          </h2>
          <div className="flex items-center w-1/5 mb-4">
            <div className="w-1/2 h-1 bg-primary"></div>
            <div className="w-1/2 h-1 bg-purple-500"></div>
          </div>
          <p className="text-gray-700 mb-4">
            We strive for the highest quality of service and client
            satisfaction. Refunds will be issued under the following conditions:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            2.1. Refund Eligibility:
          </h3>
          <p className="text-gray-700 mb-4">
            Refunds will only be issued if the cancellation request meets the
            criteria set out in Section 1. If you are dissatisfied with our
            services, we will work with you to resolve the issues. Refund
            requests based on dissatisfaction must be made within 15 days of
            service delivery. Refunds, if applicable, will be at the discretion
            of the management team based on the nature of the service provided.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            2.2. Non-Refundable Fees:
          </h3>
          <p className="text-gray-700 mb-4">
            Any fees related to third-party tools, software, or advertising
            costs incurred on behalf of the client are non-refundable. One-time
            setup fees, consultation fees, or initial strategy development fees
            are non-refundable unless otherwise specified.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">
            3. Termination by Panda Guys
          </h2>
          <div className="flex items-center w-1/5 mb-4">
            <div className="w-1/2 h-1 bg-primary"></div>
            <div className="w-1/2 h-1 bg-purple-500"></div>
          </div>
          <p className="text-gray-700 mb-4">
            Panda Guys reserves the right to terminate any project or service
            agreement in the event of non-payment, breach of contract, or
            unethical business practices by the client. In such cases, refunds
            will be assessed on a case-by-case basis, and any outstanding fees
            for services rendered up to the termination date will remain due.
          </p>
        </div>

        <div>
          <h2 className="text-2xl lg:text-4xl font-semibold text-primary mb-2">
            4. Contact Information
          </h2>
          <div className="flex items-center w-1/5 mb-4">
            <div className="w-1/2 h-1 bg-primary"></div>
            <div className="w-1/2 h-1 bg-purple-500"></div>
          </div>
          <p className="text-gray-700 mb-4">
            For any questions or concerns regarding cancellations or refunds,
            please contact our support team at:
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong>{' '}
            <a
              href="mailto:info@pandaguys.in"
              className="text-blue-600 underline"
            >
              info@pandaguys.in
            </a>
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong>{' '}
            <a href="tel:+91-962-506-7150" className="text-blue-600 underline">
              +91-962-506-7150
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellation;
