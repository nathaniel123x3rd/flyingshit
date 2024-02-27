var container = document.createElement("div");
  container.classList.add("container");

  for (var i = 0; i < 3; i++) {
    var ring = document.createElement("div");
    ring.classList.add("ring");
    container.appendChild(ring);
  }

  document.body.appendChild(container);
  document.title = "Flying Shit";

const charsetMeta = document.createElement('meta');
charsetMeta.setAttribute('charset', 'utf-8');

const viewportMeta = document.createElement('meta');
viewportMeta.setAttribute('name', 'viewport');
viewportMeta.setAttribute('content', 'width=device-width');

const ogTitleMeta = document.createElement('meta');
ogTitleMeta.setAttribute('name', 'og:title');
ogTitleMeta.setAttribute('content', 'Flying Shit');

const ogSiteNameMeta = document.createElement('meta');
ogSiteNameMeta.setAttribute('name', 'og:site_name');
ogSiteNameMeta.setAttribute('content', 'Flying Shit');

const ogDescriptionMeta = document.createElement('meta');
ogDescriptionMeta.setAttribute('name', 'og:description');
ogDescriptionMeta.setAttribute('content', 'This is some random shit that does random shit');

const ogImageMeta = document.createElement('meta');
ogImageMeta.setAttribute('data-n-head', 'ssr');
ogImageMeta.setAttribute('data-hid', 'og:image');
ogImageMeta.setAttribute('property', 'og:image');
ogImageMeta.setAttribute('content', 'https://nathaniel.world/spinningwheel/emoji.png');
ogImageMeta.setAttribute('type', 'image/x-png');

const ogUrlMeta = document.createElement('meta');
ogUrlMeta.setAttribute('name', 'og:url');
ogUrlMeta.setAttribute('content', 'https://nathaniel.world/flyingshit');

const ogTypeMeta = document.createElement('meta');
ogTypeMeta.setAttribute('property', 'og:type');
ogTypeMeta.setAttribute('content', 'website');

const themeColorMeta = document.createElement('meta');
themeColorMeta.setAttribute('name', 'theme-color');
themeColorMeta.setAttribute('content', '#39ffe2');

// Create link elements
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.setAttribute('rel', 'stylesheet');
fontAwesomeLink.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
fontAwesomeLink.setAttribute('integrity', 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==');
fontAwesomeLink.setAttribute('crossorigin', 'anonymous');
fontAwesomeLink.setAttribute('referrerpolicy', 'no-referrer');

const customStylesheetLink = document.createElement('link');
customStylesheetLink.setAttribute('href', 'style.css');
customStylesheetLink.setAttribute('rel', 'stylesheet');
customStylesheetLink.setAttribute('type', 'text/css');

const faviconLink = document.createElement('link');
faviconLink.setAttribute('href', 'https://nathaniel.world/spinningwheel/emoji.png');
faviconLink.setAttribute('rel', 'icon');
faviconLink.setAttribute('type', 'image/png');

// Append meta and link elements to the head
const head = document.head || document.getElementsByTagName('head')[0];
head.appendChild(charsetMeta);
head.appendChild(viewportMeta);
head.appendChild(ogTitleMeta);
head.appendChild(ogSiteNameMeta);
head.appendChild(ogDescriptionMeta);
head.appendChild(ogImageMeta);
head.appendChild(ogUrlMeta);
head.appendChild(ogTypeMeta);
head.appendChild(themeColorMeta);
head.appendChild(fontAwesomeLink);
head.appendChild(customStylesheetLink);
head.appendChild(faviconLink);
document.addEventListener("DOMContentLoaded", function() {
  // Create a style element
  var styleElement = document.createElement("style");
  styleElement.setAttribute("type", "text/css");

  // Set the CSS rules
  var cssRules = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #111;
    }

    .container {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  // Append the CSS rules to the style element
  styleElement.appendChild(document.createTextNode(cssRules));

  // Append the style element to the head of the document
  document.head.appendChild(styleElement);
});