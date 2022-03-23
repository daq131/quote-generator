let apiQuotes = [];

//show new quote
function newQuote() {
  // pick a random qoute from a aPi quotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
}

// get quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

//on load
getQuotes();
