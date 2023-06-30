module.exports = {
  locales: ["en", "fr"],
  defaultLocale: "en",
  defaultNS: "common",
  pages: {
    "*": ["common", "seo"],
    "/": ["home"],
  },
  loadLocaleFrom: (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
};
