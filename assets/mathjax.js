MathJax = {
  loader: {load: ['[tex]/physics', '[tex]/ams', '[tex]/color']},
  tex: {
    packages: {'[+]': ['physics', 'ams', 'color']},
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    tags: 'ams' // automatic equation numbering
  },
  // svg: {
  // 	fontCache: 'global',
  // 	scale: 1
  // }
};

(function () {
  var script = document.createElement('script');
//   script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();