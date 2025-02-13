import React from 'react';
import { useSelector } from 'react-redux';
import translations from '../translations/translations';
const FullscreenMenu = ({ isOpen, onClose }) => {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  z-50 overflow-y-auto top-20">
      {/* Header with close button */}

      {/* Menu content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 bg-[#CD2B31]">
        {/* ASTROLOGY ONLINE Section */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold border-b border-white/20 pb-2">
            {t.AstrologyOnline}
          </h3>
          <div className="space-y-2">
            <button className="text-white hover:text-yellow-200 block">{t.TalkToAstrologer}</button>
            <button className="text-white hover:text-yellow-200 block">{t.ChatWithAstrologer}</button>
            <button className="text-white hover:text-yellow-200 block">{t.MaritalLife}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Relationships}</button>
            <button className="text-white hover:text-yellow-200 block">{t.CareerJob}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Cheating}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Numerology}</button>
            <button className="text-white hover:text-yellow-200 block">{t.BreakUpDivorce}</button>
            <button className="text-white hover:text-yellow-200 block">{t.vedic}</button>
            <button className="text-white hover:text-yellow-200 block">{t.kidEducation}</button>
            <button className="text-white hover:text-yellow-200 block">{t.TarotReading}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Relationship}</button>
          </div>
        </div>

        {/* MUHURAT Section */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold border-b border-white/20 pb-2">
            {t.Muhurta}
          </h3>
          <div className="space-y-2">
            <button className="text-white hover:text-yellow-200 block">{t.Choghadiya}</button>
            <button className="text-white hover:text-yellow-200 block">{t.RahuKaal}</button>
            <button className="text-white hover:text-yellow-200 block">{t.ShubhaHora}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Gowri}</button>
          </div>

          <h3 className="text-white text-xl font-semibold border-b border-white/20 pb-2 mt-8">
            {t.ONLINEPUJA}
            <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full">
              {t.new}
            </span>
          </h3>
          <div className="space-y-2">
            <button className="text-white hover:text-yellow-200 block">{t.Breakup}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Divorce}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Manokamna}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Manokamna}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Money}</button>
          </div>
        </div>

        {/* ASTROLOGY & HOROSCOPE Section */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold border-b border-white/20 pb-2">
            {t.ASTROLOGYs}
          </h3>
          <div className="space-y-2">
            <button className="text-white hover:text-yellow-200 block">{t.Kundali}</button>
            <button className="text-white hover:text-yellow-200 block">{t.KundaliJanam}</button>
          </div>

          <h3 className="text-white text-xl font-semibold border-b border-white/20 pb-2 mt-8">
            {t.HOROSCOPE}
          </h3>
          <div className="space-y-2">
            <button className="text-white hover:text-yellow-200 block">{t.Dailyhoro}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Monthlyhoro}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Yearlyhoro}</button>
          </div>

          <h3 className="text-white text-xl font-semibold border-b border-white/20 pb-2 mt-8">
            {t.PANCHANG}
          </h3>
          <div className="space-y-2">
            <button className="text-white hover:text-yellow-200 block">{t.todayPanchang}</button>
          </div>
        </div>

        {/* VRAT AND UPAVAS & STORE/GEMS Section */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold border-b border-white/20 pb-2">
            {t.VRATANDUPVAASs}
          </h3>
          <div className="space-y-2">
            <button className="text-white hover:text-yellow-200 block">{t.Purnima}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Amavasya}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Ekadashi}</button>
            <button className="text-white hover:text-yellow-200 block">{t.PradoshVrat}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Sankashti}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Vinayaka}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Sankranti}</button>
            <button className="text-white hover:text-yellow-200 block">{t.Satyanarayan}</button>
          </div>

          <h3 className="text-white text-xl font-semibold border-b border-white/20 pb-2 mt-8">
            {t.storegems}
            <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full">
            {t.new}
            </span>
          </h3>
          <div className="space-y-2">
            <button className="text-white hover:text-yellow-200 block">{t.Bluesap}</button>
            <button className="text-white hover:text-yellow-200 block">{t.bloodblue}</button>
            <button className="text-white hover:text-yellow-200 block">{t.yellowsap}</button>
            <button className="text-white hover:text-yellow-200 block">{t.emerald}</button>
            <button className="text-white hover:text-yellow-200 block">{t.rubysap}</button>
            <button className="text-white hover:text-yellow-200 block">{t.morecate}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenMenu;