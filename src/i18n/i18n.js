import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import EN from "./locales/en.json";
import KG from "./locales/kg.json";
import RU from "./locales/ru.json";
import UK from "./locales/uk.json";
import FR from "./locales/fr.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: EN
            },
            ru: {
                translation: RU
            },
            kg: {
                translation: KG
            },
            uk: {
                translation: UK
            },
            fr: {
                translation: FR
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;