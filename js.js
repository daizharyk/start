import { articleElements } from "./articles-htmlelements.js"

const allArticles = document.getElementById('all_article')
const contacts = document.getElementById('contacts')


console.log(allArticles);
console.log(contacts);

let articleCount = 5;

allArticles.querySelector('a').textContent = `Все статьи (${articleCount})`;

let articlesSection = document.querySelector(".article_section")



let scrollIntoElement = (el) =>{
  el.scrollIntoView({ behavior: "smooth"})
};

allArticles.addEventListener("click", (e)=>{
  e.preventDefault();
  scrollIntoElement(articlesSection);
});


let contactsSection = document.querySelector(".contacts");

contacts.addEventListener("click",(e) =>{
  e.preventDefault();
  scrollIntoElement(contactsSection);
});




console.log(articleElements);


articlesSection.append(...articleElements);
console.log(...articleElements);