  function abrirNuevoTabWebpack() {
    var win = window.open('https://webpack.js.org/', '_blank');
    win.focus();
  }

  function abrirNuevoTabRollup() {
    var win = window.open('http://rollupjs.org/guide/en/', '_blank');
    win.focus();
  }

  window.onload = function() {
    document.getElementById("boton_w").onclick = abrirNuevoTabWebpack;
    document.getElementById("boton_r").onclick = abrirNuevoTabRollup;
  }


