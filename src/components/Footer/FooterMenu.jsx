import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import translations from "../../components/translations/translations";
import contentData from '../../components/content/pageContent';
const Footer = () => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const footerData = {
    getAdviceOn: {
      title: t.GetAdviceOn,
      // links: [
      //   { text: t.Finance, url: "/finance" },
      //   { text: t.Psychic, url: "/psychic" },
      //   { text: t.BreakUpDivorce, url: "/break-up-divorce" },
      //   { text: t.vedic, url: "/vedic" },
      //   { text: t.kidEducation, url: "/kid-education" },
      //   { text: t.TarotReading, url: "/tarot-reading" },
      //   { text: t.MaritalLife, url: "/marital-life" },
      //   { text: t.Relationships, url: "/relationships" },
      //   { text: t.CareerJob, url: "/career-job" },
      //   { text: t.Cheating, url: "/cheating" },
      //   { text: t.Numerology, url: "/numerology" },
      //   { text: t.horaryAstrology, url: "/horary-astrology" },
      //   { text: t.Relationship, url: "/relationship" },
      // ],
    },
    muhuratSection: {
      mainSections: [
        {
          title: t.Muhurta,
          links: [
            { text: t.Choghadiya, url: "/choghadiya" },
            { text: t.RahuKaal, url: "/rahukaal" },
            { text: t.ShubhaHora, url: "/shubhahora" },
            { text: t.Gowri, url: "/gowri" },
          ],
        },
        {
          title: t.Tarot,
          links: [],
        },
        {
          title: t.Panchang,
          links: [{ text: t.todayPanchang, url: "/Panchang" }],
        },
        {
          title: t.ASTROLOGYs,
          links: [
            { text: t.Kundali, url: "/astrology" },
            { text: t.KundaliJanam, url: "/kundali-janam" },
          ],
        },
      ],
    },
    vratAndUpvaas: {
      mainSections: [
        {
          title: t.VRATANDUPVAAS,
          links: [
            { text: t.Purnima, url: "/Purnima" },
            { text: t.Amavasya, url: "/amavasya" },
            { text: t.Ekadashi, url: "/ekadashi" },
            { text: t.PradoshVrat, url: "/pradoshvrat" },
            { text: t.Sankashti, url: "/sankashti" },
            { text: t.Vinayaka, url: "/vinayaka" },
            { text: t.Sankranti, url: "/sankranti" },
            { text: t.Satyanarayan, url: "/satyanarayan" },
          ],
        },
        {
          title: t.HOROSCOPE,
          links: [
            { text: t.Dailyhoro, url: "/DailyHoroscope" },
            { text: t.Monthlyhoro, url: "/monthly-horoscope" },
            { text: t.Yearlyhoro, url: "/yearly-horoscope" },
          ],
        },
      ],
    },
    usefulAndPolicy: {
      mainSections: [
        {
          title: t.UsefulLinks,
          links: [
            { text: t.AboutUs, url: "/about-us" },
            { text: t.ContactUs, url: "/contact-us" },
            { text: t.Blog, url: "/AstrologyBlog" },
            { text: t.FAQs, url: "/faqs" },
            { text: t.Support, url: "/contact-us" },
            { text: t.AstrologerRegistration, url: "/astrologer-registration" },
            { text: t.OnlinePuja, url: "/ComingSoonPage" },
            { text: t.StoreGems, url: "/GemstoneShowcase" },
          ],
        },
        {
          title: t.Policy,
          links: [
            { text: t.PrivacyPolicy, url: "/privacy-policy" },
            { text: t.TermsOfUse, url: "/terms-of-use" },
            // { text: t.RefundAndCancellation, url: "/refund-and-cancellation" },
            { text: t.Disclaimer, url: "/disclaimer" },
            { text: t.CookiePolicy, url: "/cookie-policy" },
            // { text: t.StoreRefundPolicy, url: "/store-refund-policy" },
            // { text: t.ShippingAndDeliveryPolicy, url: "/shipping-delivery-policy" },
          ],
        },
      ],
    },
  };

  const socialIcons = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      color: "text-blue-700 hover:text-blue-600",
    },
    { name: "Twitter", icon: FaXTwitter, color: "hover:text-blue-400" },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      color: "text-blue-700 hover:text-blue-700",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      color: "text-pink-700 hover:text-pink-600",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      color: "text-red-700 hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-red-800 text-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Column 1: Get Advice On */}
          {/* <div className="space-y-4">
            <h3 className="font-semibold text-lg md:text-xl">
              {footerData.getAdviceOn.title}
            </h3>
            <ul className="space-y-2">
            {Object.values(contentData).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/get-advice/${service.id}`}
                    className="text-white text-sm  hover:text-white transition"
                  >
                    {service.title.main} {service.title.highlight}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Column 2: Muhurat Section */}
          <div className="space-y-6">
            {footerData.muhuratSection.mainSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-lg md:text-xl">{section.title}</h3>
                {section.links.length > 0 && (
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.text}>
                        <Link
                          to={link.url}
                          className="text-sm hover:text-gray-300 transition-colors duration-200"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Column 3: Vrat and Upvaas Section */}
          <div className="space-y-6">
            {footerData.vratAndUpvaas.mainSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-lg md:text-xl">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        to={link.url}
                        className="text-sm hover:text-gray-300 transition-colors duration-200"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: Useful Links and Policy */}
          <div className="space-y-6">
            {footerData.usefulAndPolicy.mainSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-lg md:text-xl">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        to={link.url}
                        className="text-sm hover:text-gray-300 transition-colors duration-200"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 5: Download Apps */}
          <div className="space-y-6 col-span-full xs:col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="font-semibold text-lg md:text-xl">{t.DownloadOurApps}</h3>

            {/* Store Buttons */}
            <div className="flex flex-row gap-4 justify-start lg:flex-col lg:gap-3">
              <Link to="#" className="block w-40 lg:w-full">
                <img
                  src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/google-play.png"
                  alt="Get it on Google Play"
                  className="h-12 w-full object-contain"
                />
              </Link>
              <Link to="#" className="block w-40 lg:w-full">
                <img
                  src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/app-store.png"
                  alt="Download on App Store"
                  className="h-12 w-full object-contain"
                />
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-4 mt-6 justify-start">
              {socialIcons.map((social) => (
                <Link
                  key={social.name}
                  to="#"
                  className={`bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-all duration-200 ${social.color}`}
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-red-700 text-center text-sm">
          <p>
            Copyright © 2020-2024 Innovana Astro Services Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;