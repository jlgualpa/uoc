  function abrirNuevoTabLess() {
    var win = window.open('http://lesscss.org/', '_blank');
    win.focus();
  }

  function abrirNuevoTabStylus() {
    var win = window.open('https://stylus-lang.com/', '_blank');
    win.focus();
  }

  function abrirNuevoTabWebpack() {
    var win = window.open('https://webpack.js.org/', '_blank');
    win.focus();
  }

  function abrirNuevoTabRollup() {
    var win = window.open('http://rollupjs.org/guide/en/', '_blank');
    win.focus();
  }

  function abrirNuevoTabSas() {
    var win = window.open('https://sass-lang.com/', '_blank');
    win.focus();
  }

  window.onload = function() {
    document.getElementById("boton_w").onclick = abrirNuevoTabWebpack;
    document.getElementById("boton_r").onclick = abrirNuevoTabRollup;
  }


