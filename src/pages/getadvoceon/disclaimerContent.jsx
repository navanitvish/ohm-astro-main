import React from 'react';

const disclaimerContent = {
  title: "DISCLAIMER",
  paragraphs: [
    "OHM Astro provides a platform that enables one on one interaction between the user and the Astrologers through direct consultation (chat or call) and messages and allows the users to pay for services requested from an Astrologer. We can guarantee you satisfaction for the counseling services provided by the Astrologers on our platform, but we neither guarantee nor evaluate the precision, truthfulness and success of the advice, answers and any other services provided by the Astrologers to you through our website and application.",
    "The website and application is being provided to you for as-is use with no warranty. Your use of the OHM Astro website and application is done at your sole and absolute risk without any warranty of fitness, merchantability or performance failure. We do not guarantee that the services, assistance and functionalities provided to you byOHM Astro will be free from errors, eavesdropping, or listening, unbiased, or defect-free. OHM Astro will not hold any liability for the quality and authenticity of the information, assistance, services provided and also content provided by the Astrologers. Please note that by visiting, using and accessing the website, you automatically accept the terms mentioned in this Disclaimer. You agree that by posting a question on the platform of OHM Astro, you accept and understand that OHM Astro will not be responsible for any use that you make or action that you take by relying on the reply or information you do or do not receive.",
    "You agree and accept that any use or action that you take on the basis of the advice, services or the answers is at your own absolute risk only and OHM Astro will not be in any way responsible for any loss, harm, or damage that results if you trust and rely on these advice and answers. Also, you expressly agree to not hold OHM Astro responsible for any loss, harm, injury, arising due to your submission of the query or your use of or reliance on any response or taking any other services such as Puja, Yantra, Gemstone, etc from the Astrologers in which OHM Astro is not directly involved. Anytime Astro reserves all the rights for any changes from time to time."
  ],
  breadcrumb: {
    home: "/",
    current: "Disclaimer"
  }
};

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation breadcrumb */}
      <div className="bg-pink-500 text-white p-4">
        <div className="container mx-auto flex items-center space-x-2">
          <a href={disclaimerContent.breadcrumb.home} className="hover:text-gray-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
          <span className="text-gray-200">/</span>
          <span>{disclaimerContent.breadcrumb.current}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 relative">
          {disclaimerContent.title}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500"></div>
        </h1>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          {disclaimerContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;