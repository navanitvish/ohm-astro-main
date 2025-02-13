const ServiceCard = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center p-4 text-white hover:opacity-80 transition-opacity cursor-pointer">
    <div className="w-16 h-16 mb-3">{icon}</div>
    <p className="text-center text-sm">{title}</p>
  </div>
);

const Ekadashi = () => {
  const services = [
    {
      title: "Chat with astrologers",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h2v3c0 .9 1.1 1.3 1.7.7L11.3 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 9h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zm0-3H7c-.6 0-1-.4-1-1s.4-1 1-1h10c.6 0 1 .4 1 1s-.4 1-1 1z" />
        </svg>
      ),
    },
    {
      title: "Free Janam Kundali",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "Kundali Matching",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14c-2.67 0-8-1.34-8-4v-2c0-2.66 5.33-4 8-4s8 1.34 8 4v2c0 2.66-5.33 4-8 4z" />
        </svg>
      ),
    },
    {
      title: "Choghadiya",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2c.55 0 1 .45 1 1v5l4.25 2.52c.48.28.64.9.35 1.38-.19.33-.54.51-.91.51-.17 0-.35-.04-.5-.14l-4.84-2.85c-.31-.18-.5-.51-.5-.87V7c0-.55.45-1 1-1z" />
        </svg>
      ),
    },
    {
      title: "Today's Panchang",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M19 3h-1V2h-2v1H8V2H6v1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
        </svg>
      ),
    },
    {
      title: "Shubha Hora",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z" />
        </svg>
      ),
    },
  ];

  const purnimaData = [
    {
      month: "January",
      date: "25 January, 2024",
      day: "Thursday",
      vratName: "Paush Purnima, Shakambhari Purnima",
      tithiTime: "Check Panchang",
    },
    {
      month: "February",
      date: "24 February, 2024",
      day: "Saturday",
      vratName: "Magha Purnima, Guru Ravidas Jayanti",
      tithiTime: "Check Panchang",
    },
    {
      month: "March",
      date: "25 March, 2024",
      day: "Monday",
      vratName: "Chhoti Holi, Holika Dahan, Phalguna Purnima, Vasanta Purnima",
      tithiTime: "Check Panchang",
    },
  ];

  // const festivals = [
  //   {
  //     name: "Paush Purnima",
  //     description:
  //       "Paush Purnima falls in December or January and is considered very auspicious as per the Hindu culture. Hindu devotees believe one should take a dip in the holy waters of Prayag Sangam on this day. The reason behind this ritual is that it helps them in attaining moksha or salvation by absolving them of any sin they have committed in their life consciously or unconsciously.",
  //   },
  //   {
  //     name: "Magha Purnima",
  //     description:
  //       "The Full Moon in the month of Magh is widely known as Magha Purnima or Maghi Purnima. The widely popular Kumbh Mela takes place on this occasion once every twelve years.",
  //   },
  //   {
  //     name: "Holi",
  //     description:
  //       "The Last Full Moon day in the month of Phalguna is celebrated as Holi. The festival of colors represents the arrival of the season of spring.",
  //   },
  //   {
  //     name: "Hanuman Jayanti",
  //     description:
  //       "The Full Moon in the month of Chaitra is celebrated as Hanuman Jayanti. It is believed that the Vanar God or Lord Hanuman was born on this auspicious day.",
  //   },
  //   {
  //     name: "Buddha Purnima",
  //     description:
  //       "The Full Moon in Vaishakha is celebrated as Buddha Purnima. It is considered the birth anniversary of Gautama Buddha and is widely celebrated in many Asian countries including India and Nepal.",
  //   },
  //   {
  //     name: "Vat Purnima",
  //     description:
  //       "Vat Purnima is celebrated in the month of Jyeshtha. On this occasion, the married women observe fast or vrat to pray for the long life of their husbands and happy married life.",
  //   },
  //   {
  //     name: "Ashadha Purnima",
  //     description:
  //       "Purnima in the month of Ashada is devoted to Gurus. This occasion is also famous for the holy Rath Yatra which takes place every year on this day.",
  //   },
  //   {
  //     name: "Raksha Bandhan",
  //     description:
  //       "The Full Moon day in the month of Shravan is celebrated as Raksha Bandhan. On this day, sisters tie a Rakhi or a sacred thread on the wrist of their brothers as a symbol of taking the promise of protection. This Rakhi also symbolizes the love and affection between siblings.",
  //   },
  //   {
  //     name: "Madhu Purnima",
  //     description:
  //       "Madhu Purnima or Honey Full-Moon Day is celebrated in the month of Bhadrapada. This festival is widely popular in Bangladesh and Thailand.",
  //   },
  // ];

  const ekadashiData = {
    title: "SIGNIFICANCE OF EKADASHI",
    content: [
      {
        paragraph:
          "Ekadashi ('Hari Vasara' or 'Hari din') is considered significant according to the Hindu culture. The significance of this auspicious period is mentioned in the pious texts of Padma Purana as well as Skanda Purana. This tithi is celebrated by both the Vaishnav and non-Vaishnav communities. On this day, the devotees avoid eating cereals, vegetables, etc.",
      },
      {
        paragraph:
          "The tithi of Ekadashi is devoted to Lord Vishnu. On this day, devotees worship Lord Vishnu by performing prayers as well as chanting mantras and ask for the blessings to get overall prosperity. It is a ritual to bathe and get ready early in the Dashami morning. After sunset on Ekadashi, devotees chant Aartis and read Ekadashi Vrat Katha.",
      },
      {
        title: "Ekadashi Mantra",
        paragraph:
          "While performing Ekadashi Puja, one should recite 'Om Namo Bhagavate Vasudevaya..'. It is the mantra of Lord Vishnu. On this auspicious day, it is also recommended to chant the Hare Krishna Maha Mantra 108 times. While doing their morning and evening prayers, devotees should also recite Ekadashi Mata Aarti.",
      },
      {
        title: "How is Ekadashi Puja done?",
        paragraph:
          "Ekadashi Puja starts with getting up early and doing the early morning prayer which includes taking a pledge to fast on this auspicious day. On this day, one should worship Lord Vishnu and include Gangajal and Panchgarni and other pious ingredients like Holy Basil in the ritual. This fast can be done in two different ways - Nirjala and Falahaar. While the devotees do not eat anything for the entire day in Nirjala, the devotees can eat the food allowed in the fast in Falaha. The food should be consumed after worshiping Lord Vishnu. But, the vidhi or process of Ekadashi Parana is finished on the Dwadashi tithi, the next day of the fast.",
      },
      {
        title: "Ekadashi Vrat Parana Vidhi",
        paragraph:
          "The whole process of opening the fast of Ekadashi once it is completed is known as Ekadashi Vrat Parana. Vrat Parana is done after the sunrise on the Dwadashi, the day after Ekadashi. The devotees should keep in mind that this ritual is performed exclusively on the tithi of Dwadashi and in the day's first quarter which is referred to as Hari Vasar.",
      },
      {
        paragraph:
          "On the occasion of Dwadashi tithi, it is believed that devotees should give food to the Brahmin or help the needy to bring prosperity.",
      },
      {
        title: "What Can You Eat During Ekadashi Fast?",
        paragraph:
          "Few things to take care of if you're fasting on the day of Ekadashi are mentioned below:\n- You are only allowed to consume a single meal in a day, take care of not including salt in your meal.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-red-500 text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="mx-2">›</span>
            <a href="/vrat-and-upvaas" className="hover:underline">
              Vrat and Upvaas
            </a>
            <span className="mx-2">›</span>
            <span>Ekadashi Vrat</span>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="bg-red-200">
        <header className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold">Ekadashi Vrat</h1>
              <p className="text-gray-600">New Delhi, NCT, India</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <input
                type="text"
                value="2024"
                className="border rounded px-3 py-1"
                readOnly
              />
              <input
                type="text"
                value="New Delhi, NCT, India"
                className="border rounded px-3 py-1"
                readOnly
              />
            </div>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-gray-800">Ekadashi Tithi </span>
        </h2>

        <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
          <p>
            Ekadashi Vrat is considered highly significant according to Hindu
            Calendar. The name 'Ekadashi,' which means 'eleven,' comes from the
            Sanskrit language. As per the Hindu Lunar Calendar, it corresponds
            to the eleventh day of every fortnight. Two Ekadashi Tithis come in
            every month, one in Shukla Paksha and another in Krishna Paksha.
          </p>
          <p>
            As per Hindu scriptures, the fast of Ekadashi begins on the eve of
            Ekadashi and lasts until the next day’s sunrise.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <h3 className="text-xl text-center mb-6 text-red-500">
              Ekadashi Vrat 2024 Dates
            </h3>
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-3 text-left">Month</th>
                  <th className="border px-4 py-3 text-left">Date</th>
                  <th className="border px-4 py-3 text-left">Day</th>
                  <th className="border px-4 py-3 text-left">Vrat Name</th>
                  <th className="border px-4 py-3 text-left">Tithi Time</th>
                </tr>
              </thead>
              <tbody>
                {purnimaData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border px-4 py-3">{item.month}</td>
                    <td className="border px-4 py-3">{item.date}</td>
                    <td className="border px-4 py-3">{item.day}</td>
                    <td className="border px-4 py-3">{item.vratName}</td>
                    <td className="border px-4 py-3 text-red-500 hover:underline cursor-pointer">
                      {item.tithiTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Importance of Purnima Section */}
        <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">{ekadashiData.title}</h1>
          {ekadashiData.content.map((item, index) => (
            <div key={index}>
              {item.title && (
                <h2 className="text-xl font-bold mb-4">{item.title}</h2>
              )}
              <p className="mb-4">{item.paragraph}</p>
            </div>
          ))}
        </div>

        {/* Explore Other Services Section */}
        <section className="bg-purple-900 py-12 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              EXPLORE OTHER SERVICES
              <div className="w-48 h-1 bg-red-500 mx-auto mt-2"></div>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ekadashi;
