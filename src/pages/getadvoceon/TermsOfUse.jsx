import React from "react";

const termsContent = {
  title: "TERMS OF USE",
  intro:
    "This agreement “Member Terms of Use” pertain to all the users (“members”) who access and/or utilize the services of Anytime Astro platform for online Astrologer guidance.",
  sections: [
    {
      heading: "What is Anytime Astro?",
      content: [
        "Anytime Astro provides a guidance platform which allows the members to locate an Astrologer, to seek guidance and advice from these Astrologers. Anytime Astro provides a platform that enables one-on-one communication between the user and the Astrologers through direct consultation (chat or call), and messages, and allows the users to pay for services purchased from an Astrologer.",
        "The call feature of Anytime Astro, i.e. Talk To Astrologer service, is only available in India.",
      ],
    },
    {
      heading: "Disclaimer – For Entertainment Purposes Only",
      content: [
        "It is the sole responsibility of the Users/Members to verify an Astrologer’s identity, credentials, qualifications, licenses, biographic information etc. Anytime Astro will not be liable for verifying such details.",
        "The User/Member concedes to the fact that these Astrologers are neither employed by nor agents or representatives of Anytime Astro and Anytime Astro does not undertake any responsibility for conduct of any such Astrologer.",
        "All the Astrologers are individual contractors of Anytime Astro, and because they function as independent contractors, Anytime Astro cannot administer the quality, accuracy or accordance with the advice or guidance provided by an Astrologer.",
        "Anytime Astro also does not ascertain:",
        [
          "The qualification of an Astrologer to guide on a particular subject.",
          "Whether an Astrologer is accurately categorized to guide a member in a sought field.",
          "Whether the postings by an Astrologer or a Member on our Website or Application are relevant, appropriate and correct.",
        ],
        "ANY OPINION, ADVICE, GUIDANCE, RESPONSE, INFORMATION, PREDICTION OR OTHER SERVICES PROVIDED BY AN ASTROLOGER ARE FOR ENTERTAINMENT PURPOSE ONLY.",
      ],
    },
  ],
};

const TermsOfUse = () => {
  return (
    <div className="max-w-6xl mx-auto p-6  text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">{termsContent.title}</h1>
      <p className="mb-6 text-sm">{termsContent.intro}</p>
      {termsContent.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>
          {section.content.map((item, idx) => {
            if (Array.isArray(item)) {
              return (
                <ul key={idx} className="list-disc list-inside ml-4 mb-4">
                  {item.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx} className="mb-4">{item}</p>;
          })}
        </div>
      ))}
    </div>
  );
};

export default TermsOfUse;
