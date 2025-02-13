import KundaliMatchingForm from "./KundaliMatchingForm";
import ConsultWithTopVedicAstrologers from "../ConsultWithTopVedicAstrologers";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import {
  kootaData,
  KundliMilan,
  steps,
  benefits,
} from "../../components/content/astordata";
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
            KUNDALI MATCHING | KUNDALI MATCH FOR MARRIAGE | HOROSCOPE MATCHING
          </h2>

          {/* Introduction Cards */}
          <div className="space-y-6 mb-12">
            <div className="  p-2">
              <p className="text-lg text-center">
                Have you finalized the person you wish to get married to and
                want to do the Kundali matching?
              </p>
            </div>

            <div className="  p-2">
              <p className="text-lg text-center">
                Do you want to check if the person with whom you are vibing well
                is compatible enough, as per astrology, to get married?
              </p>
            </div>
            <p className="text-lg text-center">
              Before proceeding to marriage, which is a turning point for any
              individual, Kundali Milan is performed to ensure a good
              compatibility in the future between the couple. A compatibility
              score of 18 and above is usually considered auspicious for a
              successful marriage. However, gun milan should not be the only
              criteria to judge the forecast of marriage as planetary positions
              and their effect on compatibility are also significant factors. It
              is suggested the prospective couple gets the Kundali matching by
              name and date of birth details assessed further by expert
              astrologers to study if the aspects essential for great
              compatibility are matched well. So, let us find a general outline
              of the Kundli Milan for marriage and check the compatibility
              between couples.
            </p>
          </div>

          <div>
            <h2 className="text-center text-3xl font-bold mb-8  bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
              Enter Details to Get Free Online Kundali Matching Report For
              Marriage
            </h2>
            <p className="text-lg text-center">
              Anytime Astro is a premium online horoscope-matching site that can
              help you check Kundali Milan by name and date of birth. Here, the
              team of expert astrologers analyze the compatibility of both the
              partners and present accurate results based upon the Ashtakoots or
              eight categories considered to check the var vadhu gun milan.
            </p>

            <p className="text-lg text-center">
              So, what keeps you waiting, check your marriage compatibility by
              entering below the details of both partners, such as name, birth
              date, birth time, and birthplace for horoscope matching by date of
              birth.
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
              Got the Patrika Matching analysis, but not sure about what it
              means. Rest assured, connect with expert astrologers instantly
              over call or chat to ensure minute details about your
              compatibility and also receive recommendations to fix any issues
              that might hinder in marital life. Connect with astrologers now!
            </p>
          </div>
        </div>
      </div>
      <ConsultWithTopVedicAstrologers />
      <div>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-center">
            Before you chat with the astrologers, you can also refer to the
            below details to learn more about the analysis given by the
            astrologers.
          </p>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text mt-6 uppercase">
              {t.GunaMilan}
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          <p className="text-lg text-center">
            The online Kundali Matchmaker for Marriage calculates the
            Ashtakootas, to check the compatibility between the couple. Let us
            know the meaning of the Ashtakoota in the Lagna patrika matching to
            get a clear idea about what these scores denote -
          </p>
        </div>

        <div className="p-6 max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full ">
              <thead>
                <tr className="bg-pink-50">
                  <th className="px-4 py-3 text-left text-pink-600 font-semibold border border-slate-600">
                    Koota
                  </th>
                  <th className="px-4 py-3 text-center text-pink-600 font-semibold border border-slate-600">
                    Maximum Score
                  </th>
                  <th className="px-4 py-3 text-left text-pink-600 font-semibold border border-slate-600">
                    Interpretation
                  </th>
                </tr>
              </thead>
              <tbody>
                {kootaData.map((item, index) => (
                  <tr
                    key={item.name}
                    className={`border-b border border-slate-600 ${
                      index % 2 === 0 ? "bg-pink-50/20" : "bg-white"
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
          Gun Milan by date of birth is a significant factor in predicting
          marriage compatibility by evaluating the shared qualities and
          characteristics of both partners. It considers the factors such as
          intellect, temperament, and spirituality based on the ancient texts. A
          high Gun Milan online suggests harmony and a strong foundation in
          marriage. However, it should not be considered the sole indicator of a
          successful marriage but definitely helps determine valuable insights
          to make an informed decision.
        </p>
        <div className="p-6 max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full ">
              <caption className="caption-top text-left p-2">
                Now, let us know about the scores that make a couple compatible
                for marriage in the table below -
              </caption>
              <thead>
                <tr className="bg-pink-50">
                  <th className="px-4 py-3 text-left text-pink-600 font-semibold border border-slate-600">
                    Score Obtained by Kundli Milan
                  </th>
                  <th className="px-4 py-3 text-left text-pink-600 font-semibold border border-slate-600">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody>
                {KundliMilan.map((item, index) => (
                  <tr
                    key={item.name}
                    className={`border-b border border-slate-600 ${
                      index % 2 === 0 ? "bg-pink-50/20" : "bg-white"
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
            The process for Kundli Milan for marriage works as follows -
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
            BENEFITS OF ONLINE KUNDALI MATCHING OR ONLINE HOROSCOPE MATCHING
          </h2>
          <p className="text-gray-700 mb-4">
            The online free kundali matching site provides the following
            benefits -
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
