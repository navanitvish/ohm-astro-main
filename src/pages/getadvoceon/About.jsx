import React from "react";

const About = () => {
  const stats = [
    {
      icon: "👥",
      title: "Astrologers selected through a 7-Step Interview Process",
    },
    {
      icon: "👨‍🦲",
      title: "1000+ Certified Astrologers",
    },
    {
      icon: "⭐",
      title: "#1 Astrology App",
    },
    {
      icon: "😊",
      title: "1Cr+ Happy Customers",
    },
    {
      icon: "🔒",
      title: "100% Privacy",
    },
    {
      icon: "🕐",
      title: "24*7 Availability",
    },
  ];

  const features = [
    {
      title: "EXPERIENCED ASTROLOGERS",
      description:
        "Get advice from the most accomplished and renowned Astrologers, Tarot Readers & Fortune-Tellers.",
    },
    {
      title: "QUALITY SERVICES",
      description:
        "Unmatched services to ensure a hassle-free connection and the best user experience.",
    },
    {
      title: "MULTIPLE WAYS TO CONNECT",
      description:
        "Connect to an Astrologer via chat or call as per your choice and convenience.",
    },
    {
      title: "PRIVATE AND SECURE",
      description:
        "Your privacy, and anonymity are our top priority which will not be compromised with.",
    },
  ];

  const featurese = [
    {
      title: "Chat With Astrologer",
      description:
        "Engage in live chats for immediate, personalized guidance with astrologers.",
      icon: "💬", // Replace with an icon from a library if preferred
    },
    {
      title: "Talk To Astrologers",
      description:
        "Connect instantly with Anytime Astro's expert astrologers for personalized insights.",
      icon: "📞", // Replace with an icon from a library if preferred
    },
    {
      title: "Astro Pooja",
      description:
        "Book online pujas for peace, happiness, and relief with experienced pandits!",
      icon: "🪔", // Replace with an icon from a library if preferred
    },
  ];

  const contentData = {
    heading: "ASTROLOGY - THE CONCEPT BEHIND IT",
    paragraphs: [
      "Based on this Rebirth concept, our great ancient seers divided the Zodiacs of 360 degrees approximately into three human life cycles (Janmas) of 120 degrees each which is equal to 120 years of a human life span.",
      "By using triangular (Trikona) bhavas of the Janam Kundali: 1st House is associated with the Present Birth, 5th house is associated with the Rebirth (Punar Janma) and the last one is the 9th house which is associated with Pre-Birth (Poorva Janma). And, to read all these Astrological combinations, numerous Dasha concepts have been given by famous sages in our classics, like Vimshottari Dasha which is also calculated for 120 years to read one’s life cycle which is based on Karmas.",
      "Different Systems of Vedic Astrology have Karma as one of their significant factors to determine one’s fate. It is the Karmas that create destinies and give timely pre-warning about an upcoming impact of various Planets. The past life Karma reveals the problems, challenges and obstacles one would face in their present life. And through the platform of Anytime Astro, renowned Vedic astrologers will help you to discover your *Rinanu Bandhan* (past life Sanchit Karma) to instill happiness, joy and positivity in your present as well as future and to resolve every mystery and concern of your life that troubles you.",
    ],
  };

  const { heading, paragraphs } = contentData;

  return (
    <div>
      {/* Stats Section */}

      {/* Who We Are Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            WHO WE ARE
            <div className="w-32 h-1 bg-pink-500 mx-auto mt-2"></div>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-6">
              <p className="text-gray-300 mb-8">
                Embark on a journey of astrological insight with Anytime Astro,
                your trusted ally. Access premier astrologers in India
                seamlessly, bridging the gap between believers and the profound
                world of astrology. We prioritize your safety and security,
                guaranteeing a reliable and transformative experience. Embrace
                the cosmic journey with confidence in our commitment to your
                well-being! 🔮 ⌛️ ✨
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className=" p-4 rounded-2xl">
                <img
                  src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/about-img.png"
                  alt="Zodiac Wheel"
                  className="w-full h-62 rounded-xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pink-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-sm font-medium text-gray-800">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Do We Do Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            WHAT DO WE DO?
            <div className="w-32 h-1 bg-pink-500 mx-auto mt-2"></div>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-6">
                Welcome to the celestial sanctuary of Anytime Astro, where the
                tapestry of your destiny is woven with the threads of
                astrological wisdom. Here, we unite renowned astrologers,
                granting you 24/7 access to their profound knowledge of the
                occult science of Astrology. Whether you stand at life's
                crossroads or seek insight into the cosmic dance of your
                existence, our platform is your perpetual beacon of guidance.
              </p>

              <p className="text-gray-700">
                But Anytime Astro is more than just a compass in life's journey;
                it's a cosmic haven. Immerse yourself in Free Live astrology
                sessions, where the celestial whispers of our astrologers guide
                you through the labyrinth of the future. Elevate your daily
                experience with personalized horoscopes, and forge meaningful
                connections with our Free kundli matching service. Explore our
                Spiritual store, a treasure trove of mystical artifacts,
                enriching your spiritual expedition. At Anytime Astro, we don't
                just decipher the stars; we empower, enlighten, and elevate your
                cosmic voyage. Join us today!
              </p>
            </div>

            <div className="md:w-1/2">
              <div className=" p-4 rounded-2xl">
                <img
                  src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/about-img-2.png"
                  alt="Mystical Sun Symbol"
                  className="w-full h-auto rounded-xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-pink-100 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">WITH ANYTIME ASTRO, YOU CAN</h2>
          <div className="mx-auto w-16 h-1 bg-red-400 mt-2"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featurese.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          {heading}
        </h2>
        <div className="w-16 h-1 bg-red-400 mx-auto mb-8"></div>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side (Image) */}
          <div className="flex-1 text-center">
            <img
              src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/about-img-3.png"
              alt="Sanskrit Frame"
              className="max-w-full mx-auto "
            />
          </div>

          {/* Right Side (Description) */}
          <div className="flex-1 text-gray-700">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
