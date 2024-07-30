const allArticles = document.getElementById('all_article')
const contacts = document.getElementById('contacts')


console.log(allArticles);
console.log(contacts);

let articleCount = 3;

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


let articles = [
  { name: "Frontend-разработчик", text: "Отвечает за верхушку айсберга, то есть за ту его часть, которую мывидим. Пользователь заходит на определенный сайт и видит некую картинку.", link: "frontend.html" },
  { name: "Backend-специалист", text: "Это главный по внутренностям сайта, ответственный за его серверный отдел.", link: "backend.html" },
  { name: "Fullstack-разработчик", text: "Это универсальный работник.", link: "Fullstack.html"},
  { name: "JavaScript", text: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.", link: "Fullstack.html"},
  { name: "DOM", text: "DOM — это независящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML-, XHTML- и XML-документов, а также изменять содержимое, структуру и оформление таких документов.", link: "Fullstack.html"},
];

let articleElements = articles.map ((article) =>{
  let { name, text, link } = article;

  let articleCard = document.createElement("article");
  articleCard.className = "section_element";
  let title = document.createElement("h2");
  title.innerText = name;
  articleCard.append(title);
  let paragraph = document.createElement("p");
  paragraph.innerText = text;
  articleCard.append(paragraph);
  let linkbt = document.createElement("a");
  linkbt.setAttribute("href", link);
  linkbt.innerText = "Читать далее";
  articleCard.append(linkbt);
  return articleCard;
});

console.log(articleElements);


articlesSection.append(...articleElements);
console.log(...articleElements);