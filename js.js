const allArticles = document.getElementById('all_article')
const contacts = document.getElementById('contacts')


console.log(allArticles);
console.log(contacts);

let articleCount = 2;

allArticles.querySelector('a').textContent = `Все статьи (${articleCount})`;

