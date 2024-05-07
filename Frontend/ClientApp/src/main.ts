import arrowIcon from "./icon-arrow-up.svg";
import "./style.css";

const createHtmlNode = (htmlString: string | string[]) => {
  const placeholder = document.createElement("div");
  placeholder.innerHTML = typeof htmlString === `string` ? htmlString : htmlString.join(``);

  return placeholder.firstElementChild;
};

const createHtml = () => {
  return `
<div class="request request-get">
  <div class="request-header">
    <button class="request-summary">
      <div class="request-summary-method">GET</div>
      <span class="request-summary-path">/Users</span>
      <div class="request-summary-arrow"><img class="arrow" src=${arrowIcon} /></div>
    </button>
  </div>
</div>`;
};

(() => {
  const appDiv = document.querySelector<HTMLDivElement>("#app");
  const node = createHtmlNode(createHtml());
  if (appDiv && node) {
    appDiv.append(node);
  }
})();
