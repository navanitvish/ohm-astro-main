const ServiceCard = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center  text-white hover:opacity-80 transition-opacity cursor-pointer">
    <div className="w-16 h-16 mb-3">{icon}</div>
    <p className="text-center text-sm">{title}</p>
  </div>
);

const PurnimaVrat = () => {
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

  const festivals = [
    {
      name: "Paush Purnima",
      description:
        "Paush Purnima falls in December or January and is considered very auspicious as per the Hindu culture. Hindu devotees believe one should take a dip in the holy waters of Prayag Sangam on this day. The reason behind this ritual is that it helps them in attaining moksha or salvation by absolving them of any sin they have committed in their life consciously or unconsciously.",
    },
    {
      name: "Magha Purnima",
      description:
        "The Full Moon in the month of Magh is widely known as Magha Purnima or Maghi Purnima. The widely popular Kumbh Mela takes place on this occasion once every twelve years.",
    },
    {
      name: "Holi",
      description:
        "The Last Full Moon day in the month of Phalguna is celebrated as Holi. The festival of colors represents the arrival of the season of spring.",
    },
    {
      name: "Hanuman Jayanti",
      description:
        "The Full Moon in the month of Chaitra is celebrated as Hanuman Jayanti. It is believed that the Vanar God or Lord Hanuman was born on this auspicious day.",
    },
    {
      name: "Buddha Purnima",
      description:
        "The Full Moon in Vaishakha is celebrated as Buddha Purnima. It is considered the birth anniversary of Gautama Buddha and is widely celebrated in many Asian countries including India and Nepal.",
    },
    {
      name: "Vat Purnima",
      description:
        "Vat Purnima is celebrated in the month of Jyeshtha. On this occasion, the married women observe fast or vrat to pray for the long life of their husbands and happy married life.",
    },
    {
      name: "Ashadha Purnima",
      description:
        "Purnima in the month of Ashada is devoted to Gurus. This occasion is also famous for the holy Rath Yatra which takes place every year on this day.",
    },
    {
      name: "Raksha Bandhan",
      description:
        "The Full Moon day in the month of Shravan is celebrated as Raksha Bandhan. On this day, sisters tie a Rakhi or a sacred thread on the wrist of their brothers as a symbol of taking the promise of protection. This Rakhi also symbolizes the love and affection between siblings.",
    },
    {
      name: "Madhu Purnima",
      description:
        "Madhu Purnima or Honey Full-Moon Day is celebrated in the month of Bhadrapada. This festival is widely popular in Bangladesh and Thailand.",
    },
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
              Vrat And Upvaas
            </a>
            <span className="mx-2">›</span>
            <span>Purnima Vrat</span>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="bg-red-200">
        <header className="container mx-auto px-4 py-6 bg-red-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold">Purnima Vrat</h1>
              <p className="text-gray-600">
                Purnima Vrat 2024 Date | New Delhi, NCT, India
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
          <span className="text-gray-800">PURNIMA </span>
          <span className="text-red-500">DATE 2024</span>
        </h2>

        <div className="text-center max-w-6xl mx-auto space-y-6 mb-12">
          <p>
            In Hinduism, the Purnima tithi is considered a symbol of abundance,
            prosperity, and wholeness. The dates of many Hindu festivals are
            aligned with Purnima.
          </p>
          <p>
            As per the Hindu lunar calendar, the Full Moon occurs at least once
            a month and at most twice a month. It is considered to be an
            auspicious celestial occurrence and is celebrated as a significant
            religious occasion.
          </p>
          <p>
            Margashirsha Purnima occurs on the Full Moon in the Shukla Paksha of
            the month of Margashirsha. On this occasion, performing sacred
            activities like doing charity or worshiping your deity is considered
            auspicious.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <h3 className="text-xl text-center mb-6 text-red-500">
              Purnima Vrat 2024 Dates
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
        <section className="mt-16 mb-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            IMPORTANCE OF PURNIMA
          </h2>

          <div className="max-w-6xl mx-auto">
            <p className="text-gray-700 mb-8">
              Poornima or Full Moon is considered of great importance as per the
              Hindu calendar. Several Hindu festivals are aligned with this
              auspicious celestial occurrence. This day is believed to bring
              brightness by eliminating darkness. On this day, special rituals
              like Satyanarayan Pooja should be done.
            </p>

            <h3 className="text-xl font-semibold mb-6">
              Festivals Celebrated on Purnima
            </h3>

            <div className="space-y-6">
              {festivals.map((festival, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <h4 className="text-lg font-medium text-red-800 mb-2">
                    {index + 1}. {festival.name}
                  </h4>
                  <p className="text-gray-600">{festival.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Services Section */}
      </main>
      <section className=" bg-rose-950 py-12 mt-16">
        <div className="max-w-6xl mx-auto ">
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
    </div>
  );
};

export default PurnimaVrat;
