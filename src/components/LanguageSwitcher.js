import './LanguageSwitcher.css';
import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("hi")}>Hindi</button>
            <button onClick={() => changeLanguage("ja")}>Japanese</button>
            <button onClick={() => changeLanguage("zh")}>Chinese</button>
            <button onClick={() => changeLanguage("ar")}>Arabic</button>
        </div>
    );
}

export default LanguageSwitcher;

