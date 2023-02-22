const dictionaryApiPath = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const fetchDictApi = async (word = 'hydro') => {
  const urlToFetch = `${dictionaryApiPath}/${word}`;
  const response = await fetch(urlToFetch)
    .then((res) => res.json())
    .then((data) => data[0]);
  return response;
};

export default fetchDictApi;
