
window.addEventListener("DOMContentLoaded", function () {

  /* Dark mode */
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log(document.querySelector('#darkmode-input'));
    document.querySelector('#darkmode-input').checked = true;
    changeColorMode();
  } else {
    document.querySelector('#darkmode-input').checked = false;
    changeColorMode();
  }
  document.querySelector('#darkmode-input').addEventListener("change", changeColorMode);


  /* Table of Contents */
  const toc = document.querySelector('.toc ul');
  const headings = document.querySelectorAll('h2');
  headings.forEach((heading, h) => {
    const listItem = document.createElement("li");
    const tocLink = document.createElement("a");
    tocLink.href = `#${heading.getAttribute('id')}`;
    tocLink.innerHTML = heading.innerHTML;
    listItem.appendChild(tocLink);
    toc.appendChild(listItem);
  });

});

function changeColorMode() {
  if (document.querySelector('#darkmode-input').checked) {
    document.querySelector('body').classList.add('dark');
  } else {
    document.querySelector('body').classList.remove('dark');
  }
}
