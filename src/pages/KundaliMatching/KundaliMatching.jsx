import KundaliMatchingForm from "./KundaliMatchingForm";
import ConsultWithTopVedicAstrologers from "../ConsultWithTopVedicAstrologers";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";

import MarriageBanner from "./MarriageBanner";
import KundaliInfo from "./KundaliInfo";
import FAQ from "./FAQ";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  return (
    <div className="bg-red-500 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
        <Link to="/" className="hover:underline">
          {t.Home}
        </Link>
        <span>›</span>
        <Link to="/astrology" className="hover:underline">
          {t.ASTROLOGYs}
        </Link>
        <span>›</span>
        <span>{t.kundaliMatching}</span>
      </div>
    </div>
  );
};
const KundaliMatching = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const kootaData = [
    {
      name: t.Kundalname1,
      score: t.score1,
      interpretation:
        t.interpretation1,
    },
    {
      name: t.Kundalname2,
      score: t.score2,
      interpretation: t.interpretation2,
    },
    {
      name: t.Kundalname3,
      score: t.score3,
      interpretation: t.interpretation3,
    },
    {
      name: t.Kundalname4,
      score: t.score4,
      interpretation: t.interpretation4,
    },
    {
      name: t.Kundalname5,
      score: t.score5,
      interpretation: t.interpretation5,
    },
    {
      name: t.Kundalname6,
      score: t.score6,
      interpretation: t.interpretation6,
    },
    {
      name: t.Kundalname7,
      score: t.score7,
      interpretation: t.interpretation7,
    },
    {
      name: t.Kundalname8,
      score: t.score8,
      interpretation: t.interpretation7,
    },
  ];

  const KundliMilan = [
    {
      obtain: t.Milanobtain1,
      Result: t.Milanresult1,
    },
    {
      obtain: t.Milanobtain2,
      Result: t.Milanresult2,
    },
    {
      obtain: t.Milanobtain3,
      Result: t.Milanresult3,
    },
    {
      obtain: t.Milanobtain4,
      Result: t.Milanresult4,
    },
  ];

  const steps = [
    {
      step: 1,
      description:
        t.step1,
    },
    {
      step: 2,
      description:
        t.step2,
    },
    {
      step: 3,
      description:
        t.step3,
    },
    {
      step: 4,
      description:
        t.step4,
    },
    {
      step: 5,
      description:
        t.step5,
    },
    {
      step: 6,
      description:
        t.step6,
    },
  ];


  const benefits = [
    t.benefits1,
    t.benefits2,
    t.benefits3,
    t.benefits4,
    t.benefits5,
    t.benefits6,
    t.benefits7,
  ];
  return (
    <div>
      <Breadcrumb />
      {/* Header Section */}
      <div className=" flex justify-between items-center mb-8 bg-red-100 p-10">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">{t.kundaliMatching}</h1>
        <div className="w-16 h-16">
          <svg viewBox="0 0 100 100" className="fill-current text-pink-500">
            {/* Circle representing planets in a kundali */}
            <circle cx="30" cy="30" r="12" />
            <circle cx="70" cy="30" r="12" />
            <circle cx="30" cy="70" r="12" />
            <circle cx="70" cy="70" r="12" />

            {/* Connecting lines representing relationships between planets */}
            <path
              d="M30 30 L70 30"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />
            <path
              d="M30 30 L30 70"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />
            <path
              d="M30 70 L70 70"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />
            <path
              d="M70 30 L70 70"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />

            {/* Additional decorative lines for astrological significance */}
            <path
              d="M50 10 L50 90"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />
            <path
              d="M10 50 L90 50"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            />
          </svg>
        </div>
      </div>
      <div className="min-h-screen bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
            {t.kundliTitle}
          </h2>

          {/* Introduction Cards */}
          <div className="space-y-6 mb-12">
            <div className="  p-2">
              <p className="text-lg text-center">
                {t.kundliIntro1}
              </p>
            </div>

            <div className="  p-2">
              <p className="text-lg text-center">
                {t.kundliIntro2}
              </p>
            </div>
            <p className="text-lg text-center">
              {t.kundliIntro3}
            </p>
          </div>

          <div>
            <h2 className="text-center text-3xl font-bold mb-8  bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
              {t.kundliFormHeading}
            </h2>
            <p className="text-lg text-center">
              {t.kundliFormPara1}
            </p>

            <p className="text-lg text-center">
              {t.kundliFormPara2}
            </p>
          </div>

          {/* Form Section */}
          <div className=" rounded-lg shadow-md">
            <div className="p-2 border-b">
              <h2 className="text-center text-lg  font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
                {t.EnterDetails}
              </h2>
            </div>
            <KundaliMatchingForm />
          </div>

          {/* Description */}
          <div className="mt-8 text-center text-gray-700 space-y-4">
            <h2 className="text-center text-xl font-bold  mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
              {t.KundaliMatchingAnalysis}
            </h2>
            <p className="text-lg text-center">
              {t.kundliAnalysisPara}
            </p>
          </div>
        </div>
      </div>
      <ConsultWithTopVedicAstrologers />
      <div>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-center">
            {t.kundliBeforeChatPara}
          </p>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mt-6 uppercase">
              {t.GunaMilan}
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          <p className="text-lg text-center">
            {t.kundliAshtakootaPara}
          </p>
        </div>

        <div className="p-6 max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full ">
              <thead>
                <tr className="bg-pink-50">
                  <th className="px-4 py-3 text-left text-pink-600 font-semibold border border-slate-600">
                    {t.kootaTitle}
                  </th>
                  <th className="px-4 py-3 text-center text-pink-600 font-semibold border border-slate-600">
                    {t.maxScoreTitle}
                  </th>
                  <th className="px-4 py-3 text-left text-pink-600 font-semibold border border-slate-600">
                    {t.interpretationTitle}
                  </th>
                </tr>
              </thead>
              <tbody>
                {kootaData.map((item, index) => (
                  <tr
                    key={item.name}
                    className={`border-b border border-slate-600 ${index % 2 === 0 ? "bg-pink-50/20" : "bg-white"
                      }`}
                  >
                    <td className="px-4 py-3 text-gray-700 font-medium border border-slate-600 ">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700 border border-slate-600">
                      {item.score}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {item.interpretation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold  bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-2 uppercase">
            {t.ImportanceOfKundliMilan}
          </h2>
          <div className="w-32 h-1 bg-red-500 mx-auto"></div>
        </div>
        <p className="text-md text-left p-2">
          {t.gunMilanInfo}
        </p>
        <div className="p-6 max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full ">
              <caption className="caption-top text-left p-2">
                {t.scoreIntroText}
              </caption>
              <thead>
                <tr className="bg-pink-50">
                  <th className="px-4 py-3 text-left text-pink-600 font-semibold border border-slate-600">
                    {t.scoreHeading}
                  </th>
                  <th className="px-4 py-3 text-left text-pink-600 font-semibold border border-slate-600">
                    {t.resultLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {KundliMilan.map((item, index) => (
                  <tr
                    key={item.name}
                    className={`border-b border border-slate-600 ${index % 2 === 0 ? "bg-pink-50/20" : "bg-white"
                      }`}
                  >
                    <td className="px-4 py-3 text-gray-700 font-medium border border-slate-600 ">
                      {item.obtain}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{item.Result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Process Section */}
        <div>
          <h1 className="text-3xl font-bold text-center  bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-8">
            {t.OnlineKundaliMatchingProcess}
          </h1>
          <p className="text-gray-700 mb-6">
            {t.processIntro}
          </p>
          <div className="space-y-6">
            {steps.map(({ step, description }) => (
              <div key={step} className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="font-bold text-gray-800">Step {step}:</span>
                </div>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-3xl font-bold text-center  bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mb-8">
            {t.benefitsTitle}
          </h2>
          <p className="text-gray-700 mb-4">
            {t.processIntro}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-gray-700">
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Red underline decorations for headings */}
        {/* <div
          className="absolute left-1/2 transform -translate-x-1/2 w-32 h-1 bg-red-500"
          style={{ top: "3rem" }}
        ></div>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-32 h-1 bg-red-500"
          style={{ top: "24rem" }}
        ></div> */}
      </div>

      <MarriageBanner />
      <KundaliInfo />
      <FAQ />
    </div>
  );
};

export default KundaliMatching;
