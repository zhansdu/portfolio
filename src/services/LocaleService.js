import i18n from "@/locale";
export const setLocale = (locale) => {
  if (locale !== null && locale !== undefined) {
    i18n.global.locale = locale;
    localStorage.setItem("lang", locale);
  } else {
    i18n.global.locale = localStorage.getItem("lang") || "ru";
  }
};
