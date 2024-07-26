const allArticles = document.getElementById('all_article')
const contacts = document.getElementById('contacts')


console.log(allArticles);
console.log(contacts);

let articleCount = 3;

allArticles.querySelector('a').textContent = `Все статьи (${articleCount})`;

let lastArticlesSection = document.querySelector(".article_section")

allArticles.addEventListener("click", (e)=>{
  e.preventDefault();
  lastArticlesSection.scrollIntoView({ behavior: "smooth" });
});


let contactsSection = document.querySelector(".contacts");

contacts.addEventListener("click",(e) =>{
  e.preventDefault();
  contactsSection.scrollIntoView({ behavior: "smooth"})
})