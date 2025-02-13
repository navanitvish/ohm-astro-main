import { useState, useEffect } from 'react';
import { Star, Sun, Moon, CloudMoon, Sparkles, Clock, Heart } from 'lucide-react';

const astroIcons = [
  {
    icon: <Sun className="w-8 h-8" />,
    label: "Sun Energy",
    color: "text-yellow-500"
  },
  {
    icon: <Moon className="w-8 h-8" />,
    label: "Moon Blessing",
    color: "text-blue-400"
  },
  {
    icon: <Star className="w-8 h-8" />,
    label: "Star Guidance",
    color: "text-purple-500"
  },
  {
    icon: <CloudMoon className="w-8 h-8" />,
    label: "Night Rituals",
    color: "text-indigo-500"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    label: "Divine Spark",
    color: "text-pink-500"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    label: "Sacred Love",
    color: "text-red-500"
  }
];

const pujaTypes = [
  "Ganapati Puja", "Lakshmi Puja", "Durga Puja",
  "Saraswati Puja", "Navgraha Puja", "Satyanarayan Puja",
  "Rudrabhishek", "Kali Puja", "Hanuman Puja"
];

const ComingSoonPage = () => {
  const [countdown, setCountdown] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 });
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % astroIcons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-white mb-4">
            <Clock className="w-16 h-16" />
          </div>
          <p className="text-white text-xl animate-pulse">Loading Divine Experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-yellow-200 text-white relative overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {astroIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute animate-float opacity-20 ${
              index % 2 === 0 ? 'animate-spin-slow' : 'animate-reverse-spin'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            {icon.icon}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Icon */}
          <div className="mb-8 transition-all duration-500 transform hover:scale-110">
            <div className={`inline-block ${astroIcons[currentIconIndex].color}`}>
              {astroIcons[currentIconIndex].icon}
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-6 animate-fade-in">
            🙏Online Puja 📿🪔 Coming Soon🙏
          </h1>
          
          <p className="text-xl mb-12 text-gray-300">
            Experience the divine from the comfort of your home. Connect with certified priests for authentic pujas and rituals.
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            {Object.entries(countdown).map(([unit, value]) => (
              <div key={unit} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold">{value}</div>
                <div className="text-sm text-gray-300 capitalize">{unit}</div>
              </div>
            ))}
          </div>

          {/* Notification Form */}
          <div className="mb-16">
            <h3 className="text-2xl mb-4">Get Notified When We Launch</h3>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:border-white/40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors">
                Notify Me
              </button>
            </div>
          </div>

          {/* Available Puja Types */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6">Upcoming Puja Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {pujaTypes.map((puja, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {puja}
                </div>
              ))}
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-yellow-400 mb-4">
                <Star className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Priests</h3>
              <p className="text-gray-300">Connect with verified and experienced priests for authentic rituals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-blue-400 mb-4">
                <CloudMoon className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Streaming</h3>
              <p className="text-gray-300">Watch and participate in pujas through high-quality video streaming</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-purple-400 mb-4">
                <Sparkles className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sacred Items</h3>
              <p className="text-gray-300">Get puja samagri delivered to your doorstep</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;