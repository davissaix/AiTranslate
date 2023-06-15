const handleOptionChange = (event) => {
  const selectedValue = event.target.value.toLowerCase();
  setSelectedOption(selectedValue);
  console.log('Selected language:', selectedValue);

  // Unselect the flag that corresponds to the selected source language
  switch(selectedValue){
      case 'en':
          setEnglish(1);
          setEnglish1('translateY(0px)');
          break;
      case 'de':
          setGermany(1);
          setGermany1('translateY(0px)');
          break;
      // ...do this for all languages
  }
};
