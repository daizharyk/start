

const params = new URLSearchParams(location.search);

let articlesSection = document.querySelector(".article_section")

const articleId = params.get("articleId");
console.log(articleId);

const currentArticle = articlesData.articles.find((article) => {
  return article.id === Number(articleId);
});
console.log(currentArticle);
if(currentArticle) {
  const { name, text , link } = currentArticle;
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
  articlesSection.append(articleCard);
}