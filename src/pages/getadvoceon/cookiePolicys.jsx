
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";


const CookiePolicy = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const cookiePolicyData = {
    title: t.COOKIEtitle,
    useOfCookies: t.useOfCookies,
    whatAreCookies: t.whatAreCookies,
    cookieTypes:t.cookieTypes,
    cookieManagement: t.cookieManagement,
    refusalNote: t.refusalNote,
  };
  return (
    <div className="max-w-6xl mx-auto bg-white p-8">
      <h2 className="text-2xl font-bold text-center mb-4">{cookiePolicyData.title}</h2>
      <p className="text-gray-700 mb-4">{cookiePolicyData.useOfCookies}</p>
      <p className="text-gray-700 mb-4">{cookiePolicyData.whatAreCookies}</p>
      <h3 className="text-xl font-bold mb-2">{t.cookiePolicyData}</h3>
      {cookiePolicyData.cookieTypes.map((cookie, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-lg font-bold">{cookie.type}</h4>
          <p className="text-gray-700">{cookie.description}</p>
        </div>
      ))}
      <p className="text-gray-700 mb-4">{cookiePolicyData.cookieManagement}</p>
      <p className="text-gray-700">{cookiePolicyData.refusalNote}</p>
    </div>
  );
};

export default CookiePolicy;