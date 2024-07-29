const allArticles = document.getElementById('all_article')
const contacts = document.getElementById('contacts')


console.log(allArticles);
console.log(contacts);

let articleCount = 3;

allArticles.querySelector('a').textContent = `Все статьи (${articleCount})`;

let lastArticlesSection = document.querySelector(".article_section")



let scrollIntoElement = (el) =>{
  el.scrollIntoView({ behavior: "smooth"})
};

allArticles.addEventListener("click", (e)=>{
  e.preventDefault();
  scrollIntoElement(lastArticlesSection);
});


let contactsSection = document.querySelector(".contacts");

contacts.addEventListener("click",(e) =>{
  e.preventDefault();
  scrollIntoElement(contactsSection);
});