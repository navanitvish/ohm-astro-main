import React, { useState, useEffect } from "react";
import { Calendar, X } from "lucide-react";
import LocationAutocomplete from "../../components/Autocomplete";
import translations from "../../components/translations/translations";
import { useSelector } from "react-redux";
import ConsultWithTopVedicAstrologers from "../ConsultWithTopVedicAstrologers";
import PanchangLoader from "../../components/PanchangLoader";
import AstroLoader from "../../components/PanchangLoader";

const formatDateTime = (dateTimeStr) => {
  try {
    const date = new Date(dateTimeStr);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch (e) {
    return dateTimeStr;
  }
};

const PanchangPage = () => {
  const language = useSelector((state) => state.language.language);
  const [selectedDate, setSelectedDate] = useState("24/12/2024");
  const [location, setLocation] = useState({
    address: "New Delhi, NCT, India",
    latitude: 10.214747,
    longitude: 78.097626,
  });
  const t = translations[language];
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [panchangData, setPanchangData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPanchangData = async () => {
      try {
        setIsLoading(true);
        setError(null);
          // Request configuration
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              // Add any additional headers if needed
              // 'Authorization': 'Bearer your-token-here'
            },
            body: JSON.stringify({
              latitude: location.latitude,
              longitude: location.longitude,
              ayanamsa: 1,
              language: 'en'
            })
          };
        
        const response = await fetch(
          `https://astrology-3bjo.onrender.com/api/free-services/panchang?latitude=${location.latitude}&longitude=${location.longitude}&ayanamsa=1&language=en`,    requestOptions
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch panchang data");
        }
        
        const data = await response.json();
        setPanchangData(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPanchangData();
  }, [location.latitude, location.longitude]);

  if (isLoading) return <AstroLoader title="Loading Panchang data..." />;
  if (error) return <div className="p-4">Error loading Panchang data: {error}</div>;
  if (!panchangData) return <div className="p-4">No panchang data available</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
       <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">
            {t.todayPanchang}{" "}
            <span className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
              (AAJ KA PANCHANG)
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            Panchang is the Hindu calendar followed by Vedic astrology, which
            provides complete detail on each day's Tithis and auspicious and
            inauspicious timings. Today's Panchang on Anytime Astro is based on
            Vijay Vishwa Panchang, which is the rarest of Panchang, used by
            Astrologers for hundreds of years. Through Daily Panchang, you can
            get all the information about the time, date, and day to determine
            the Muhurat for everything. Astrologers suggest people should follow
            the Day Panchang while doing new work or performing any auspicious
            event.
          </p>
        </div>
      <div className="bg-red-50 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-pink-600 text-transparent bg-clip-text">
        {t.todayPanchang}{" "}
        </h1>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              value={selectedDate}
              className="w-full p-2 border rounded-md pl-10"
              readOnly
              onClick={() => setIsCalendarOpen(true)}
            />
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <LocationAutocomplete
            defaultValue={location.address}
            onLocationSelect={setLocation}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-center bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Basic Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b">
                <span className="font-medium">Day</span>
                <span>{panchangData.vaara}</span>
              </div>
              <div className="flex justify-between items-center border-b">
                <span className="font-medium">Nakshatra</span>
                <span>{panchangData.nakshatra?.[0]?.name}</span>
              </div>
              <div className="flex justify-between items-center border-b">
                <span className="font-medium">Tithi</span>
                <span>{panchangData.tithi?.[0]?.name} ({panchangData.tithi?.[0]?.paksha})</span>
              </div>
              <div className="flex justify-between items-center border-b">
                <span className="font-medium">Karana</span>
                <span>{panchangData.karana?.[0]?.name}</span>
              </div>
              <div className="flex justify-between items-center border-b">
                <span className="font-medium">Yoga</span>
                <span>{panchangData.yoga?.[0]?.name}</span>
              </div>
            </div>
          </div>

          {/* Timings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-center bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Important Timings
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b">
                <span className="font-medium">Sunrise</span>
                <span>{formatDateTime(panchangData.sunrise)}</span>
              </div>
              <div className="flex justify-between items-center border-b">
                <span className="font-medium">Sunset</span>
                <span>{formatDateTime(panchangData.sunset)}</span>
              </div>
              <div className="flex justify-between items-center border-b">
                <span className="font-medium">Moonrise</span>
                <span>{formatDateTime(panchangData.moonrise)}</span>
              </div>
              <div className="flex justify-between items-center border-b">
                <span className="font-medium">Moonset</span>
                <span>{formatDateTime(panchangData.moonset)}</span>
              </div>
            </div>
          </div>

          {/* Auspicious Periods */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-center bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Auspicious Periods
            </h3>
            <div className="space-y-4">
              {panchangData.auspicious_period?.map((period) => (
                <div key={period.id} className="flex justify-between items-center border-b">
                  <span className="font-medium">{period.name}</span>
                  <span>
                    {period.period?.[0] && 
                      `${formatDateTime(period.period[0].start)} - ${formatDateTime(period.period[0].end)}`
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Inauspicious Periods */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-center bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Inauspicious Periods
            </h3>
            <div className="space-y-4">
              {panchangData.inauspicious_period?.map((period) => (
                <div key={period.id} className="flex justify-between items-center border-b">
                  <span className="font-medium">{period.name}</span>
                  <span>
                    {period.period?.[0] && 
                      `${formatDateTime(period.period[0].start)} - ${formatDateTime(period.period[0].end)}`
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ConsultWithTopVedicAstrologers />
    </div>
  );
};

export default PanchangPage;