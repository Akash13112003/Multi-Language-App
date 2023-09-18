import React from "react";
import { useTranslation } from "react-i18next";
import './Home.css';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home">
            <h1>{t("home.title")}</h1>
            <p>{t("home.content")}</p>
        </div>
    );
}

export default Home;
