import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./components/Home";
import About from "./components/About";
import LanguageSwitcher from "./components/LanguageSwitcher";
import i18n from "./i18n";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="App">
        <LanguageSwitcher />

        <div className="centered-container">
          <h2 className="language-display">
            {t("language")}: <strong>{t(`language.${i18n.language}`)}</strong>
          </h2>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
