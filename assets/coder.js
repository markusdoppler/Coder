
window.addEventListener("DOMContentLoaded", function () {

  /* Dark mode */
  const isStoredSetting = sessionStorage.getItem('darkmode');
  const darkModeSetting = sessionStorage.getItem('darkmode') == "true";
  const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  updateBodyDarkmode(isStoredSetting ? darkModeSetting : systemDarkMode);
  document.querySelector('#darkmode-input').addEventListener("change", changeColorMode);

  /* Page Path */
  document.querySelector(".page-title").addEventListener("click", function(e) {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
  })

  /* Table of Contents */
  for (let tapElement of document.querySelectorAll('.toc, .fork-me-on-github')) {
    tapElement.addEventListener("click", function() {
      console.log(this.classList.value)
      this.classList.toggle("tapped");
    });
    tapElement.addEventListener("mouseenter", function() {
      if (!this.classList.value.includes("tapped")) this.classList.add("tapped");
    });
    tapElement.addEventListener("mouseleave", function() {
      if (this.classList.value.includes("tapped")) this.classList.remove("tapped");
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


  /* Code */
  document.querySelectorAll("pre").forEach((codeBlock, c) => {
    codeBlock.addEventListener("touchstart", function() { this.classList.add("active"); });
    codeBlock.addEventListener("mousedown", function() { this.classList.add("active"); });
    codeBlock.addEventListener("mouseup", function() { this.classList.remove("active"); });
    codeBlock.addEventListener("touchend", function() { this.classList.remove("active"); });
    codeBlock.addEventListener("click", function() { navigator.clipboard.writeText(this.innerText); });
  });
});

function changeColorMode() {
  if (document.querySelector('#darkmode-input').checked) {
    sessionStorage.setItem('darkmode', true);
    updateBodyDarkmode(true);
  } else {
    sessionStorage.setItem('darkmode', false);
    updateBodyDarkmode(false);
  }
}

function updateBodyDarkmode(darkmode) {
  document.querySelector('#darkmode-input').checked = darkmode;
  if (darkmode) {
    document.querySelector('body').classList.add('dark');
  } else {
    document.querySelector('body').classList.remove('dark');
  }
}
