let searchInput  = document.getElementById('searchBox');
let searchButton  = document.getElementById('submitButton');
let articleList = document.getElementById('articleList');


// Function to perform the search
submitButton.addEventListener('click', performSearch);
// Function to perform the search
function performSearch() {
    const searchQuery = searchInput.value.toLowerCase(); // Get the search query and convert to lowercase
    // Get all articles from the list
    const articles = articleList.getElementsByTagName('article');
    // Loop through each article and check if it matches the search query
    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      const title = article.querySelector('h4').innerText.toLowerCase(); // Assuming the title is inside an <h4> element
      // Check if the title contains the search query
      if (title.includes(searchQuery)) {
        article.style.display = 'block'; // Show the article
      } else {
        article.style.display = 'none'; // Hide the article
      }
    }
  }