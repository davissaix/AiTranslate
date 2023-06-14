{children.map((child, index) => {
  const countryCode = languageToCountryCode[responseFlags[index]];
  return (
    <TranslationBox key={index}>
      <RoundedFlagContainer>
        <ReactCountryFlag
          className="emojiFlag"
          countryCode={countryCode}
          style={{ fontSize: '2em', lineHeight: '2em', marginRight: '1em' }}
          svg
        />
      </RoundedFlagContainer>
      {child}
    </TranslationBox>
  );
})}
