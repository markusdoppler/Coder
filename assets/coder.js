


window.addEventListener("load", function () {

  /* AUTO DARK MODE */
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log(document.querySelector('#darkmode-input'));
    document.querySelector('#darkmode-input').checked = true;
    changeColorMode();
  } else {
    document.querySelector('#darkmode-input').checked = false;
    changeColorMode();
  }
  document.querySelector('#darkmode-input').addEventListener("change", changeColorMode);
});

function changeColorMode() {
  if (document.querySelector('#darkmode-input').checked) {
    document.querySelector('body').classList.add('dark');
  } else {
    document.querySelector('body').classList.remove('dark');
  }
}
