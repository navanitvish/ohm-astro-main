import React from "react";
import ContentPage from "./PageContent";

const privacyPolicyContent = {
  title: "PRIVACY POLICY",
  introduction: `OHM Astro values and respects the privacy of its users. The privacy policy mentioned below is created to provide you detailed information about the collection, dissemination and usage of your personal data. Our privacy policy applies when you use or visit the OHM Astro website as well as the mobile application. All our users, astrologers and visitors will be collectively mentioned as “You” in this privacy policy.`,
  agreement: `By using this website and our application, you agree with this Privacy Policy. If you do not accept this policy, then you must not use the website or the application.`,
  sections: [
    {
      heading: "WHAT DOES OHM Astro DO?",
      content: `OHM Astro provides a guidance platform which allows members to locate an Astrologer, seek guidance and advice from these Astrologers, book online Pujas, purchase authentic Astrology products, and more. OHM Astro facilitates one-on-one communication between the user and the Astrologers through direct consultation via chat or call, and messages and allows the users to pay for services requested from an Astrologer.\n\nThe call feature of OHM Astro, i.e. Talk To Astrologer service, is only available in India.`,
    },
    {
      heading: "PROCESSING OF PERSONAL DATA",
      content: `Although all the features of our product and services are available on the application, some of them may require your attention due to the information they collect. Hence, we would like to provide you with more details related to the data we collect for the proper working of our Application. We offer various features in our application and to make them all work smoothly, we need access to different permissions and information as described below.`,
      subSections: [
        {
          title: "Permissions We Need",
          subContent: [
            {
              platform: "For Android",
              permissions: [
                "WAKE_LOCK - This permission is required to keep the device awake during a chat session to ensure a smooth experience to the user.",
                "CHANGE_WIFI_STATE/ ACCESS_NETWORK_STATE/ ACCESS_WIFI_STATE/ INTERNET - This permission is required to access the internet to process user data, for chat sessions, calls and for other readings.",
                "WRITE_EXTERNAL_STORAGE/ READ_EXTERNAL_STORAGE - Access to device storage to save documents on the device and to access Gallery.",
                "CAMERA - Application needs the permission to access your device’s camera and photo album to take photos if needed by any of the features.",
              ],
            },
            {
              platform: "For iOS",
              permissions: [
                "Camera and Photos: Access to capture and upload photos.",
                "Push Notifications: Permissions to send app alerts.",
                "Location Services: To improve the user experience based on geographic region.",
              ],
            },
          ],
        },
      ],
    },
  ],
};

const PrivacyPolicy = () => {
  const { title, introduction, agreement, sections } = privacyPolicyContent;

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto  p-8  rounded-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {title}
        </h1>
        <div className="w-16 h-1 bg-red-400 mx-auto mb-6"></div>

        {/* Introduction */}
        <p className="text-gray-600 mb-4">{introduction}</p>
        <p className="text-gray-600 mb-6">{agreement}</p>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {section.heading}
            </h2>
            <p className="text-gray-600 whitespace-pre-line mb-4">
              {section.content}
            </p>

            {/* Subsections */}
            {section.subSections &&
              section.subSections.map((subSection, subIndex) => (
                <div key={subIndex} className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    {subSection.title}
                  </h3>
                  {subSection.subContent.map((platformData, platformIndex) => (
                    <div key={platformIndex} className="mb-4">
                      <h4 className="text-base font-semibold text-gray-700">
                        {platformData.platform}
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 mt-2">
                        {platformData.permissions.map((permission, permIndex) => (
                          <li key={permIndex}>{permission}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ))}
      </div>
      <ContentPage/>
    </section>
  );
};

export default PrivacyPolicy;
