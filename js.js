const allArticles = document.getElementById('all_article')
const contacts = document.getElementById('contacts')


console.log(allArticles);
console.log(contacts);

let articleCount = 3;

allArticles.querySelector('a').textContent = `Все статьи (${articleCount})`;

let lastArticlesSection = document.querySelectorAll(".section_element")[
  document.querySelectorAll(".section_element").length -1
];

allArticles.addEventListener("click", ()=>{
  lastArticlesSection.scrollIntoView({ behavior: "smooth" });
});
