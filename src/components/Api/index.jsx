async function translateText(text) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your Mymemory API key
    const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=en|fr`;
  
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'User-Agent': 'Mozilla/5.0',
        },
      });
  
      if (response.data && response.data.responseStatus === 200) {
        const translatedText = response.data.responseData.translatedText;
        console.log(translatedText);
        // Do something with the translated text, such as updating the state or displaying it in your component
      } else {
        console.error('Translation failed');
      }
    } catch (error) {
      console.error('Error occurred during translation', error);
    }
  }
  