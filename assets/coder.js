
window.addEventListener("DOMContentLoaded", function () {

  /* Dark mode */
  const isDarkMode = sessionStorage.getItem('darkmode') == "true";
  const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (systemDarkMode && isDarkMode) {
    document.querySelector('#darkmode-input').checked = true;
  } else {
    document.querySelector('#darkmode-input').checked = false;
  }
  changeColorMode();
  document.querySelector('#darkmode-input').addEventListener("change", changeColorMode);


  /* Table of Contents */
  for (let tapElement of document.querySelectorAll('.toc, .fork-me-on-github')) {
    tapElement.addEventListener("touchstart", function() {
      this.classList.toggle("tapped");
    });
  }
  
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
    sessionStorage.setItem('darkmode', true);
  } else {
    document.querySelector('body').classList.remove('dark');
    sessionStorage.setItem('darkmode', false);
  }
}
