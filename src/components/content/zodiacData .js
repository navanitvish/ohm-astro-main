// zodiacData.js
export const zodiacData = {
    Aries: {
      id: 1,
      name: 'Aries',
      dates: 'Mar 21 - Apr 19',
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png',
      dailyHoroscope: {
        prediction: "Today brings exciting opportunities for leadership and personal growth. Your energetic approach will open new doors. Focus on starting new projects and taking initiative in your professional life. Exercise caution in financial decisions.",
        luckyColor: ['Red', 'Orange'],
        luckyNumber: [1, 9],
        element: 'Fire',
        ruler: 'Mars'
      },
      monthlyHoroscope: {
        prediction: "This month highlights your career aspirations and personal goals. Network connections will prove valuable. Watch your spending habits and focus on long-term financial planning."
      },
      yearlyHoroscope: {
        prediction: "2024 promises significant growth in your professional life. Focus on building lasting relationships and strengthening your financial foundation. Health improvements through regular exercise will boost your confidence."
      }
    },
    
    Taurus: {
      id: 2,
      name: 'Taurus',
      dates: 'Apr 20 - May 20',
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Taurus.png',
      dailyHoroscope: {
        prediction: "Your efforts will soon prove to be financially profitable. Unexpected gifts may provide happiness. Your health should be your top priority right now and you shouldn't ignore it. Your trust in your decision-making will generate positive results.",
        luckyColor: ['Green', 'Pink'],
        luckyNumber: [5, 17],
        element: 'Earth',
        ruler: 'Venus'
      },
      monthlyHoroscope: {
        prediction: "A month of material growth and emotional stability awaits. Focus on personal relationships and financial planning. Creative ventures will bring unexpected rewards."
      },
      yearlyHoroscope: {
        prediction: "2024 emphasizes personal growth and financial security. Property investments and career advancement opportunities will present themselves. Focus on maintaining work-life balance."
      }
    },
  
    Gemini: {
      id: 3,
      name: 'Gemini',
      dates: 'May 21 - Jun 20',
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Gemini.png',
      dailyHoroscope: {
        prediction: "Communication channels open up today, bringing new opportunities. Your quick wit serves you well in negotiations. Focus on completing pending tasks before starting new ones. Social connections prove beneficial.",
        luckyColor: ['Yellow', 'Blue'],
        luckyNumber: [3, 12],
        element: 'Air',
        ruler: 'Mercury'
      },
      monthlyHoroscope: {
        prediction: "Your communication skills will be highlighted this month. Educational pursuits and travel plans gain momentum. Watch your energy levels and maintain a balanced schedule."
      },
      yearlyHoroscope: {
        prediction: "2024 brings intellectual growth and career advancement. Focus on developing new skills and expanding your network. Travel opportunities will broaden your horizons."
      }
    },
  
    Cancer: {
      id: 4,
      name: 'Cancer',
      dates: 'Jun 21 - Jul 22',
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Cancer.png',
      dailyHoroscope: {
        prediction: "Emotional intelligence guides your decisions today. Family matters take precedence. Financial planning brings peace of mind. Trust your intuition in personal relationships.",
        luckyColor: ['Silver', 'White'],
        luckyNumber: [2, 7],
        element: 'Water',
        ruler: 'Moon'
      },
      monthlyHoroscope: {
        prediction: "Focus on home and family this month. Property matters show positive progress. Emotional bonds strengthen through open communication."
      },
      yearlyHoroscope: {
        prediction: "2024 emphasizes emotional growth and family connections. Career advancement through creative pursuits. Focus on building emotional and financial security."
      }
    },
  
    Leo: {
      id: 5,
      name: 'Leo',
      dates: 'Jul 23 - Aug 22',
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Leo.png',
      dailyHoroscope: {
        prediction: "Leadership opportunities arise today. Creative projects gain momentum. Focus on personal growth and self-expression. Financial decisions require careful consideration.",
        luckyColor: ['Gold', 'Orange'],
        luckyNumber: [1, 4],
        element: 'Fire',
        ruler: 'Sun'
      },
      monthlyHoroscope: {
        prediction: "Creative projects flourish this month. Professional recognition boosts confidence. Focus on building lasting relationships and maintaining work-life balance."
      },
      yearlyHoroscope: {
        prediction: "2024 brings recognition and career growth. Focus on personal development and creative expression. Financial investments show promising returns."
      }
    },
  
    // Continue with remaining signs...
    Virgo: {
      id: 6,
      name: 'Virgo',
      dates: 'Aug 23 - Sep 22',
      // Add similar structure as above
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Aries.png',
    },
    Libra: {
      id: 7,
      name: 'Libra',
      dates: 'Sep 23 - Oct 22',
      // Add similar structure as above
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Leo.png',
    },
    Scorpio: {
      id: 8,
      name: 'Scorpio',
      dates: 'Oct 23 - Nov 21',
      // Add similar structure as above
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Leo.png',
    },
    Sagittarius: {
      id: 9,
      name: 'Sagittarius',
      dates: 'Nov 22 - Dec 21',
      // Add similar structure as above
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Leo.png',
    },
    Capricorn: {
      id: 10,
      name: 'Capricorn',
      dates: 'Dec 22 - Jan 19',
      // Add similar structure as above
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Leo.png',
    },
    Aquarius: {
      id: 11,
      name: 'Aquarius',
      dates: 'Jan 20 - Feb 18',
      // Add similar structure as above
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Leo.png',
    },
    Pisces: {
      id: 12,
      name: 'Pisces',
      dates: 'Feb 19 - Mar 20',
      // Add similar structure as above
      image: 'https://cdn.anytimeastro.com/anytimeastro/web/content/images/zodiac/Leo.png',
    }
  };
  
  // Helper function to get all signs as an array
  export const getAllSigns = () => Object.values(zodiacData);
  
  // Helper function to get a specific sign's data
  export const getSignData = (sign) => zodiacData[sign];
  
  // Helper function to get horoscope by type (daily, monthly, yearly)
  export const getHoroscope = (sign, type) => {
    const signData = zodiacData[sign];
    switch(type.toLowerCase()) {
      case 'daily':
        return signData.dailyHoroscope;
      case 'monthly':
        return signData.monthlyHoroscope;
      case 'yearly':
        return signData.yearlyHoroscope;
      default:
        return signData.dailyHoroscope;
    }
  };