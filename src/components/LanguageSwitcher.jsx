import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    // Cette fonction met à jour l'état global de la langue
    i18n.changeLanguage(lng);
    // Gère la direction de la page (LTR/RTL) pour l'arabe
    document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
  };

  // Détermine la langue active pour mettre en évidence le bouton
  const isFrench = i18n.language === 'fr';
  const isArabic = i18n.language === 'ar';

  return (
    <div className="language-switcher-container">
      <button 
        onClick={() => changeLanguage('fr')}
        style={{ fontWeight: isFrench ? 'bold' : 'normal' }} // Optionnel: met en évidence la langue active
      >
        Français
      </button>
      <span> | </span>
      <button 
        onClick={() => changeLanguage('ar')}
        style={{ fontWeight: isArabic ? 'bold' : 'normal' }}
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;