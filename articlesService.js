import articlesData from "./articles.json" with { type: "json" };



const params = new URLSearchParams(location.search);

const articleId = params.get("articleId");


const currentArticle = articlesData.articles.find((article) => {
  return article.id === Number(articleId);
});


export let articleElements = articlesData.articles.map ((article) =>{
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




