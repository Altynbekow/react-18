import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "Welcome": "Welcome"
                }
            },
            ru: {
                translation: {
                    "Welcome": "Добро пожаловать"
                }
            },
            kg: {
                translation: {
                    "Welcome": "Кош келиниздер"
                }
            },
        },
        lng: "ru",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default  i18n;