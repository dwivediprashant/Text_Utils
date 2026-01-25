const { LingoDotDevEngine } = require("lingo.dev/sdk");

//---------------lingo translatuon-----------
const lingoDotDev = new LingoDotDevEngine({
  apiKey: process.env.LINGODOTDEV_API_KEY,
});

const translate = async (text) => {
  const locale = await lingoDotDev.recognizeLocale(text);
  const result = await lingoDotDev.localizeText(text, {
    sourceLocale: locale,
    targetLocale: "hin",
  });
  return result;
};

module.exports = translate;
