const input = document.getElementById("markdown-input");
const output = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let html = input.value;

  const headingRegex = /^\s*(#{1,3})\s+(.+?)\s*$/gm;
  html = html.replace(headingRegex, (match, hashes, content) => {
    const level = hashes.length;
    return `<h${level}>${content.trim()}</h${level}>`;
  });

  const blockquoteRegex = /^\s*> (.+)$/gm;
  html = html.replace(blockquoteRegex, (match, content) => `<blockquote>${content}</blockquote>`);

  const imageRegex = /!\[([^\]]+)\]\(([^)]+)\)/gm;
  html = html.replace(imageRegex, (match, alt, src) => `<img alt="${alt}" src="${src}">`);

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/gm;
  html = html.replace(linkRegex, (match, text, url) => `<a href="${url}">${text}</a>`);

  const boldRegex = /(\*\*|__)(.+?)\1/gm;
  html = html.replace(boldRegex, (match, wrapper, content) => `<strong>${content}</strong>`);

  const italicRegex = /(\*|_)(.+?)\1/gm;
  html = html.replace(italicRegex, (match, wrapper, content) => `<em>${content}</em>`);

  return html;
}

input.addEventListener("input", () => {
  const html = convertMarkdown();
  output.innerText = html;
  preview.innerHTML = html;
});
