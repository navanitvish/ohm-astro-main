const ServiceCard = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center p-4 text-white hover:opacity-80 transition-opacity cursor-pointer">
    <div className="w-16 h-16 mb-3">{icon}</div>
    <p className="text-center text-sm">{title}</p>
  </div>
);

const AmavasyaDates = () => {
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

  const amavasyas = [
    {
      title: "Mauni Amavasya",
      description: "It is observed between January and February and holds great spiritual significance. As per the Hindu calendar, it is observed in the month of Magh. On this day, devotees observe a maun vrat. Some refer to it as Magha Amavasya. Followers and devotees also bathe in the holy waters of Ganga on this day."
    },
    {
      title: "Mahalaya Amavasya",
      description: "This Amavasya occurs on the last day of Mahalaya Paksha. It is a great day to do charity and humanitarian work. It is observed in September or October. It is also the best day to make offerings to the deceased ancestors. And for this reason, it is also known as Pitru Paksha."
    },
    {
      title: "Somvati Amavasya",
      description: "It is the one that is observed on a Monday. Besides fulfillment of desires, the day holds special significance for married women. They fast for the long lives of their husband on this day."
    }
  ];

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
            <span>Amavasya Dates</span>
          </div>
        </div>
      </nav>

     <div className="bg-red-200">
       {/* Header Section */}
       <header className="container  mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold">Amavasya Dates</h1>
            <p className="text-gray-600">
            Amavasya Dates 2024
            | New Delhi, NCT, India
            </p>
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
          <span className="text-gray-800">Amavasya Tithi </span>
        </h2>

        <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
          <p>
            Amavasya, also referred to as 'New Moon Day' or 'No Moon Day,' is
            regarded as a significant Hindu tithi. On this day the Shukla Paksha
            (bright fortnight) begins. Amavasya is regarded as a potent and
            impactful celestial occurrence. This is the reason several
            significant traditions, as well as rituals, are observed all across
            India during this period.
          </p>
          <p>
            Paush Amavasya is observed in the specific Hindu lunar month of
            Paush. It is believed that the evil spirits are strongest on this
            day.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <h3 className="text-xl text-center mb-6 text-red-500">
            Amavasya Vrat 2024 Dates
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
        <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          IS AMAVASYA AUSPICIOUS?
          <div className="w-48 h-1 bg-red-500 mx-auto mt-2"></div>
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* General Information */}
          <div className="space-y-4">
            <p className="text-gray-700">
              Amavasya is considered inauspicious in many cultures worldwide. The energies present during this time can harm our physical and mental well-being. This time of the month is devoted to prayers and offerings. One can also remember their forefathers to minimize the negativity associated with this Hindu tithi.
            </p>
            <p className="text-gray-700">
              Some people don't work on Amavasya. And any auspicious work or traveling is also avoided. Many devotees fast on Amavasya to attain success and happiness, and to seek the blessings of their ancestors.
            </p>
          </div>

          {/* Mythological Importance */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mythological Importance Of Amavasya</h3>
            <p className="text-gray-700 mb-4">
              According to Garuda Purana, an Indian scripture, it is believed that Lord Vishnu said that Amavasya is the day when one's ancestors visit earth. If their descendants ignore their presence, it might displease their forefathers. It is also suggested to pray to Lord Vishnu on this day to fulfill all your desires.
            </p>
            <p className="text-gray-700">
              There are some festivals associated with Amavasya, with Diwali being the most significant one. Deepawali is when there is no moon in the sky and when the evil powers are strong. Here the negative spirits are warded off with the lights of diyas and candles.
            </p>
          </div>

          {/* Significant Amavasya Tithis */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Significant Amavasya Tithis</h3>
            <p className="text-gray-700 mb-4">These Amavasya dates hold immense religious importance:</p>
            <div className="space-y-6">
              {amavasyas.map((amavasya, index) => (
                <div key={index} className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-xl font-medium text-gray-800 mb-2">{amavasya.title}</h4>
                  <p className="text-gray-600">{amavasya.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Significance Of Amavasya Vrat */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Significance Of Amavasya Vrat</h3>
            <p className="text-gray-700 mb-4">
              Fasting on the day of Amavasya is said to benefit the devotees in many ways.
            </p>
            <p className="text-gray-700">
              Amavasya fast provides inner peace. This also helps the person get rid of the burdens of sins committed knowingly or unknowingly. It can attract love, success, health, prosperity, and wealth in one's life.
            </p>
          </div>
        </div>
      </section>


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

export default AmavasyaDates;
