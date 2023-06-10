async function translateText(text, selectedOption, mappedArray) {
    try {
      // For each language in mappedArray, perform a translation request
      const responses = await Promise.all(mappedArray.map(async (lang) => {
        const options = {
          method: 'GET',
          url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
          params: {
            langpair: `${selectedOption}|${lang}`,
            q: text,
            mt: '1',
            onlyprivate: '0',
            de: 'a@b.c',
          },
          headers: {
            'X-RapidAPI-Key': '3730f2a775msh0140bb14ad28e72p170f94jsn65f4586c35c4',
            'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com',
          },
        };
  
        const response = await axios.request(options);
        return response.data.responseData.translatedText;
      }));
  
      // Combine the translated responses into a single string
      const translatedText = responses.join('\n');
  
      setResponse(translatedText);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  }
  
  // And change handleTranslateClick as below
  const handleTranslateClick = async () => {
    console.log('Selected option input:', selectedOption);
    await translateText(inputText, selectedOption, mappedArray);
  };
  