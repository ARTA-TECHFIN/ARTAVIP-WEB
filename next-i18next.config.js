const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["tc", "en", "sc"],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales')
};
