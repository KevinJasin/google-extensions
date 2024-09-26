console.log("Content script is running on", window.location.href);

const article = document.querySelector('article') || document.querySelector('#bodyContent');
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement('p');
  badge.classList.add('color-secondary-text', 'type--caption');
  badge.textContent = `⏱️ ${readingTime} min read`;

  const heading = article.querySelector('h1') || document.querySelector('#firstHeading');
  const date = article.querySelector('time')?.parentNode;

  (date ?? heading)?.insertAdjacentElement('afterend', badge);
}
