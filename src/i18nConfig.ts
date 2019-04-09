import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: {
      order: ['querystring', 'subdomain', 'path', 'cookie', 'localStorage', 'navigator', 'htmlTag']
    },
    resources: {
      ru: {
        translation: {
          'reports': 'Отчеты',
          'statistics': 'Статистика',
          'offers': 'Офферы',
          'instruments': 'Инструменты',
          'for developers': 'Разработчикам',
          'services': 'Сервисы',
          'finance': 'Финансы',
          'filter': 'Фильтр',
          'reset': 'Сбросить',
          'promocode': 'Промокод',
          'get a bonus': 'Получить бонус',
          'balance': 'Баланс',
          'to payoff': 'К выплате'
        }
      },
      en: {
        translation: {
          'reports': 'Reports',
          'statistics': 'Statistics',
          'offers': 'Offers',
          'instruments': 'Instruments',
          'for developers': 'For developers',
          'services': 'Services',
          'finance': 'Finance',
          'filter': 'Filter',
          'reset': 'Reset',
          'promocode': 'Promocode',
          'get a bonus': 'Get a bonus',
          'balance': 'Balance',
          'to payoff': 'To payoff'
        }
      }
    },

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;