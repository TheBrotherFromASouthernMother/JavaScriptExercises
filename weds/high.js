/* header */
  var body = document.getElementsByTagName('body')[0];
  body.style.fontFamily = "Lucia Grande, sans-serif";
  var header = document.createElement('div');
  header.classList.add('pageHeader');
  body.appendChild(header);
  header.style.backgroundColor = "rgb(72, 147, 249)";
  header.style.color = "white";
  header.style.width = "95%";
  header.style.height = "10%";
  header.style.marginLeft = "2.5%"
  header.style.marginRight = "2.5%"
  header.style.position = "absolute"
  header.style.top = "2%"

  /* header title */
  var pageTitle = document.createElement('h1');
  pageTitle.textContent = "HighOnCoding"
  header.appendChild(pageTitle);
  pageTitle.style.marginLeft = "2%";
  pageTitle.style.marginRight = "2%";
  pageTitle.style.display = "inline block"
  pageTitle.style.float = "left"


  /* header menu */
  var pageHeaderMenu = document.createElement('ul');
  pageHeaderMenu.style.listStyleType = "none";
  pageHeaderMenu.style.marginLeft = "50%";
  pageHeaderMenu.style.fontSize = "1.5em"
  pageHeaderMenu.style.marginTop = "2%"
  pageHeaderMenu.style.display = "block";
  pageHeaderMenu.width = "10%";
  header.appendChild(pageHeaderMenu);
  var home = document.createElement('li');
  var categories = document.createElement('li');
  home.innerHTML = "<strong>Home</strong>";
  categories.textContent = "categories"
  pageHeaderMenu.appendChild(home);
  pageHeaderMenu.appendChild(categories);
  home.style.display = "inline-block";
  categories.style.display = "inline-block";
  home.style.marginRight = "5%"


  //Content Header
  var contentHeader = document.createElement('div');
  contentHeader.style.backgroundColor = "#D8D9DC"
  contentHeader.style.width = "80%";
  contentHeader.style.height = "20%";
  contentHeader.style.color = "#494E54"
  contentHeader.style.marginTop = "5%";
  body.appendChild(contentHeader);
  contentHeader.style.position = "absolute";
  contentHeader.style.top = "7%";
  contentHeader.style.left = "10%";
  contentHeader.style.overflow = "hidden"


  //Content Header Title
  var contentHeaderTitle = document.createElement('h1');
  contentHeaderTitle.textContent = "Curse of the Current Reviews";
  contentHeader.appendChild(contentHeaderTitle);
  contentHeaderTitle.style.marginLeft = "2%"

  //Content Header paragraph
  var contentHeaderParagraph = document.createElement("p");
  contentHeaderParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim sed magna at consectetur. Quisque nec mauris facilisis, finibus lorem et, gravida massa. Nullam at metus lectus. Duis ullamcorper enim sit amet urna feugiat aliquam. Donec orci velit, ultrices ut vulputate vitae, maximus sed augue. Aenean pellentesque maximus nunc quis varius.";
  contentHeader.appendChild(contentHeaderParagraph);
  contentHeaderParagraph.style.marginLeft = "2%";
  contentHeaderParagraph.style.marginTop = "3%";

  //artilce one
  var firstArtlce = document.createElement('article');
  firstArtlce.style.width = "80%";
  firstArtlce.style.height = "15%";
  firstArtlce.style.position = "absolute";
  firstArtlce.style.top = "30%";
  firstArtlce.style.left = "10%";
  firstArtlce.style.marginTop = "5%";
  firstArtlce.style.padding = "0";
  firstArtlce.style.overflow = "scroll"
  body.appendChild(firstArtlce);

  //first article title
  var firstArtlceTitle = document.createElement('h2');
  firstArtlceTitle.style.color = "#1b66be";
  firstArtlceTitle.textContent = "Hello Watchkit";
  firstArtlce.appendChild(firstArtlceTitle);
  firstArtlceTitle.style.marginTop = "1%";


  //first article content
  var firstArtlceContent = document.createElement('p');
  firstArtlceContent.style.color = "#494E54";
  firstArtlceContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim sed magna at consectetur. Quisque nec mauris facilisis, finibus lorem et, gravida massa. Nullam at metus lectus.";
  // firstArtlceContent.style.position = "absolute";
  // firstArtlceContent.style.bottom = "5%;"
  firstArtlce.appendChild(firstArtlceContent)


  //first article footer
  var firstArtlceFooter = document.createElement('div');
  firstArtlceFooter.style.backgroundColor = "#F18517";
  firstArtlceFooter.style.position = "absolute";
  firstArtlceFooter.style.bottom = "1%"
  firstArtlceFooter.style.width = "100%";
  firstArtlceFooter.style.color = "white"
  firstArtlceFooter.innerHTML = "<span style=\"margin-right: 10%\">12 comments </span>"
  firstArtlceFooter.innerHTML += "<span>124 likes</span>"
  firstArtlce.appendChild(firstArtlceFooter)


  //second article
  var secondArticle = document.createElement("article");
  secondArticle.style.width = "80%";
  secondArticle.style.height = "15%";
  secondArticle.style.position = "absolute";
  secondArticle.style.top = "50%";
  secondArticle.style.left = "10%";
  secondArticle.style.marginTop = "5%";
  secondArticle.style.padding = "0";
  secondArticle.style.overflow = "scroll";
  body.appendChild(secondArticle);

  //secondArticle Title
  var secondArticleTitle = document.createElement('h2');
  secondArticleTitle.style.color = "#1b66be";
  secondArticleTitle.textContent = "Introduction to Swift";
  secondArticle.appendChild(secondArticleTitle);
  secondArticleTitle.style.marginTop = "1%";


  //second article content
  var secondArticleContent = document.createElement('p');
  secondArticleContent.style.color = "#494E54";
  secondArticleContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim sed magna at consectetur. Quisque nec mauris facilisis, finibus lorem et, gravida massa. Nullam at metus lectus.";
  // firstArtlceContent.style.position = "absolute";
  // firstArtlceContent.style.bottom = "5%;"
  secondArticle.appendChild(secondArticleContent)


  //second article footer
  var secondArticleFooter = document.createElement('div');
  secondArticleFooter.style.backgroundColor = "#F18517";
  secondArticleFooter.style.position = "absolute";
  secondArticleFooter.style.bottom = "1%"
  secondArticleFooter.style.width = "100%";
  secondArticleFooter.style.color = "white"
  secondArticleFooter.innerHTML = "<span style=\"margin-right: 10%\">12 comments </span>"
  secondArticleFooter.innerHTML += "<span>124 likes</span>"
  secondArticle.appendChild(secondArticleFooter)
