const ServiceCard = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center p-4 text-white hover:opacity-80 transition-opacity cursor-pointer">
    <div className="w-16 h-16 mb-3">{icon}</div>
    <p className="text-center text-sm">{title}</p>
  </div>
);

const SankashtiChaturthi = () => {
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

  const sankashtiChaturthi = {
    title: "SIGNIFICANCE OF SANKASHTI CHATURTHI",
    content: [
      {
        paragraph:
          "On this day, devotees pray to Lord Ganesha to overcome their hurdles and difficulties in life which is why this festival is also called 'Sankat Hara Chaturthi'. Angaraki Chaturthi falling on a Tuesday is considered to be the most auspicious.",
      },
      {
        paragraph:
          "One must deliberately see the Moon on this tithi to bring good luck in life and conclude their Vrat after observing this ritual.",
      },
      {
        paragraph:
          "This fast holds the power to grant all your wishes. The cycle of Sankashti Chaturthi fasting is completed with 13 vrats. And there is an exclusive Vrat Katha for each one.",
      },
      {
        title: "Sankatahara Chaturthi Puja Method Or Vidhi",
        pujaNorms: [
          "As per the norms devotees are expected to get up early and pray to Lord Ganesha.",
          "While doing this Puja they observe a fast where they are allowed to consume fruits, roots of plants, raw vegedatas, etc.",
          "Apart from that, they can also eat Peanuts, fresh potatoes, sabudana, etc.",
          "Lord Ganesha's idol is decorated with grass and flowers.",
          "The 'Vrat Katha' is recited after the puja to gain maximum benefits.",
          "It is best to perform the puja after seeing the Moon. Also, you can break the fast after that.",
        ],
      },
      {
        paragraph:
          "You can know more about Sankashti Chaturthi at Anytime Astro.",
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
            <span>Sankashti Chaturthi</span>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="bg-red-200">
        <header className="container mx-auto px-4 py-6 bg-red-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold">Sankashti Chaturthia</h1>
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
          <span className="text-gray-800">Sankashti Chaturthi Tithi</span>
        </h2>

        <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
          <p>
            Sankashti Chaturthi, also known as the Sankatahara Chaturthi is a
            festival devoted to Lord Ganesha, the benign elephant God. As the
            name suggests, it is celebrated on the fourth day of Krishna Paksha
            of every month, also called the Chaturthi tithi.
          </p>
          <p>
            According to the Hindu Panchang, the lunar month shows two Chaturthi
            Tithis - Sankashti and Vinayaka Chaturthi. The first one occurs
            after Purnima (Krishna Paksha) whereas the second one is observed
            after Amavasya (Shukla Paksha).
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <h3 className="text-xl text-center mb-6 text-red-500">
              Sankashti Chaturthi 2024 Dates
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
        <div className=" max-w-6xl mx-auto p-4">
          <section>
            <div className="p-4">
              <h1 className="text-2xl text-center font-bold mb-4">
                {sankashtiChaturthi.title}
              </h1>
              <div className="w-48 h-1 bg-red-500 mx-auto mt-2"></div>
            </div>
            {sankashtiChaturthi.content.map((item, index) => (
              <section key={index}>
                {item.title && (
                  <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                )}
                {item.paragraph && <p className="mb-4">{item.paragraph}</p>}
                {item.pujaNorms && (
                  <ul className="list-disc pl-6 mb-4">
                    {item.pujaNorms.map((norm, i) => (
                      <li key={i}>{norm}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </section>
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

export default SankashtiChaturthi;
