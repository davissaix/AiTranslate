import ReactCountryFlag from "react-country-flag";

const language = ['GB'];

const LanguageFlags = () => {
  return language.map((countryCode) => (
    <ReactCountryFlag
      key={countryCode}
      className="emojiFlag"
      countryCode={countryCode}
      style={{
        fontSize: '5em',
        lineHeight: '5em',
      }}
      aria-label={countryCode}
      svg
    />
  ));
};

export default LanguageFlags;
