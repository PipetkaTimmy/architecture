const loadTranslations = async (page, language) => {
  try {
    const translations = await import(`../locales/${page}/${language}.js`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for ${page} in ${language}:`, error);
    return {};
  }
};

export default loadTranslations;