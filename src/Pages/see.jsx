const languageToCountryCode = {
  'en': 'GB',
  'de': 'DE',
  'fr': 'FR',
  'pt': 'BR',
  'ru': 'RU',
  'it': 'IT',
  'es': 'ES',
  'tr': 'TR',
  'zh': 'CN',
  'ja': 'JP',
  // add more language to country code mappings if needed
}

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div>
        {children.map((child, index) => {
          const countryCode = languageToCountryCode[mappedArray[index]];
          return (
            <TranslationBox key={index}>
              <ReactCountryFlag
                className="emojiFlag"
                countryCode={countryCode}
                style={{ fontSize: '2em', lineHeight: '2em', marginRight: '1em' }}
                svg
              />
              {child}
            </TranslationBox>
          );
        })}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

const TranslationBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin: 1em 0;
  padding: 1em;
`;
