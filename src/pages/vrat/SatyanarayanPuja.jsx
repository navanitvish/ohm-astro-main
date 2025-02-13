const ServiceCard = ({ icon, title }) => (
    <div className="flex flex-col items-center justify-center p-4 text-white hover:opacity-80 transition-opacity cursor-pointer">
      <div className="w-16 h-16 mb-3">{icon}</div>
      <p className="text-center text-sm">{title}</p>
    </div>
  );
  
  const SatyanarayanPuja = () => {
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
  
  
  
    const pradoshVratData = {
      title: "MEANING OF PRADOSH VRAT",
      content: [
        {
          paragraph:
            "In Hindi, Pradosh Vrat means the one that is observed in the night's initial phase. People keep this Vrat to seek blessings of Lord Shiva and Goddess Parvati.",
        },
        {
          title: "Pradosh Vrat Hindu Tithi",
          paragraph:
            "Trayodashi or the thirteenth day of any Hindu month is considered the Pradosham Vrat tithi. Two days or tithis of Pradosh fall in any given Hindu month. One is in the Shukla Paksha or the waxing moon phase and the other is in the Krishna Paksha or the waning moon phase.",
        },
        {
          title: "Significance Of Pradosh Vrat",
          paragraphs: [
            "Pradosh Vrat is regarded as a highly auspicious and significant Vrat. It is believed that if you worship Lord Shiva during Pradosh Kaal, it will absolve you of your sins and give you Moksha.",
            "It is recommended to check the Pradosh timings to do Shiv Puja to reap the maximum benefits.",
          ],
        },
        {
          title: "Benefits Of Observing Pradosh Vrat On Different Days",
          benefits: [
            "Fasting on Sunday will promote longevity and good health.",
            "Monday fast will get all your prayers answered.",
            "Relief from diseases and illness can be achieved by fasting on Tuesdays.",
            "Fasting on Wednesdays will get your wishes fulfilled.",
            "All the evil energies are eliminated by fasting on Thursdays.",
            "Fasting on Friday will bless you with luck and a happy married life.",
            "Fasting on Saturday will bless you with a child.",
          ],
        },
        {
          title: "Best Time To Do Pradosh Vrat Puja As Per The Hindu Calendar",
          paragraph:
            "Trayodashi Tithi after Sunset is considered the best time to perform the Pradosh Vrat puja as per the Hindu traditions.",
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
              <span>Pradosh Vrata</span>
            </div>
          </div>
        </nav>
  
        {/* Header Section */}
        <div className>
        <header className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold">Pradosh Vrata</h1>
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
            <span className="text-gray-800">Pradosh Vrata Tithi</span>
          </h2>
  
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
            <p>
            Pradosh Vrat also known as Pradosham is one of the most celebrated Hindu Vrats. It is observed to obtain Lord Shiva and Goddess Parvati's blessings.
            </p>
            <p>
            People keep this vrat for happiness, spirituality, and health. The timings of Pradosh Kaal usually fall in 'Sandhyakal,' or at the time of twilight.
            </p>
          </div>
  
          {/* Table */}
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <h3 className="text-xl text-center mb-6 text-red-500">
              Pradosh Vrat 2024 Dates
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
            <section>
              <h1 className="text-2xl font-bold mb-4">{pradoshVratData.title}</h1>
              {pradoshVratData.content.map((item, index) => (
                <section key={index}>
                  {item.title && (
                    <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                  )}
                  {item.paragraph && <p className="mb-4">{item.paragraph}</p>}
                  {item.paragraphs && (
                    <div>
                      {item.paragraphs.map((paragraph, i) => (
                        <p key={i} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                  {item.benefits && (
                    <ul className="list-disc pl-6 mb-4">
                      {item.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
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
  
  export default SatyanarayanPuja;
  