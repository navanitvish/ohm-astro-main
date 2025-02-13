// import React, { useState } from "react";

import { useState } from "react";

const ModernPage = () => {
  const [isTableExpanded, setIsTableExpanded] = useState(false);

  // Static English content for Varna Koota
  const varnaKootContent = {
    title: "What is Varna Koota?",
    description:
      "Varna Koota is the classification of individuals in one of four Varnas based on the Moon sign in their birth chart. This Koot denotes the innate disposition, temperament, and probable social or spiritual role in the marriage.",
    typesTitle: "Types of Varna Koot",
    types: [
      {
        name: "Brahmin",
        description: "Brahmins represent knowledge, wisdom, and spiritual orientation.",
      },
      {
        name: "Kshatriya",
        description: "Kshatriyas are warriors, representing leadership, bravery, and action.",
      },
      {
        name: "Vaishya",
        description: "Vaishyas are merchants, representing commerce and flexibility.",
      },
      {
        name: "Shudra",
        description: "Shudras are laborers, representing humility, service, and nurturing.",
      },
    ],
  };

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-red-600 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm">
            Home &gt; Astrology &gt;{" "}
            <span className="font-semibold">What is Varna Koota in Kundli Matching?</span>
          </p>
        </div>
      </header>

      {/* Title Section */}
      <section className="py-6 px-6 text-center bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">What is Varna Koota in Kundli Matching?</h1>
          <p className="text-sm text-gray-600">
            22 Nov, 2024 by <span className="text-red-600">Parita Soni</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="md:col-span-2">
          <img
            src="https://wpcontent.anytimeastro.com/blog_anytimeastro/blogimages/1413/3697-varna-koota.jpg"
            alt="Marriage Image"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Content (CTA Panel) */}
        <div className="bg-red-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Need Guidance On Your Problems?</h2>
          <p className="text-gray-700 mb-6">Consult With The Best Online Astrologers</p>
          <button className="w-full bg-red-600 text-white py-3 rounded-md mb-4 hover:bg-red-700">
            📞 Talk To Astrologer
          </button>
          <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700">
            💬 Chat With Astrologer
          </button>
        </div>
      </main>

      {/* Varna Koota Content Section */}
      <section className="max-w-7xl mx-auto py-6 px-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">{varnaKootContent.title}</h2>
          <p className="text-gray-700 mb-6">{varnaKootContent.description}</p>

          <h3 className="text-xl font-semibold mb-4">{varnaKootContent.typesTitle}</h3>
          <div>
            {varnaKootContent.types.map((type, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-bold">{type.name}</h4>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents Section */}
      <section className="max-w-7xl mx-auto py-6 px-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <button
            className="flex justify-between items-center w-full text-left font-semibold text-gray-800"
            onClick={() => setIsTableExpanded(!isTableExpanded)}
          >
            Table of Contents
            <span
              className={`text-red-600 text-2xl transform transition-transform ${
                isTableExpanded ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          {/* Expandable Content */}
          {isTableExpanded && (
            <div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Ashtakootas in Astrology</li>
                <li>What is Varna Koot?</li>
                <li>Types of Varna Koot</li>
                <ul className="pl-6 list-disc">
                  <li>Brahmin</li>
                  <li>Kshatriya</li>
                  <li>Vaishya</li>
                  <li>Shudra</li>
                </ul>
                <li>How Varna Koota Works in Kundli Matching?</li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ModernPage;
