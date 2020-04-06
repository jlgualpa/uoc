  function irPaginaWebpack() {
    var pregunta = confirm("Desea ir al enlace externo?")
    if (pregunta){
      var win = window.open('https://webpack.js.org/', '_blank');
      win.focus();
    }
  }

  function irPaginaRollup() {
    var pregunta = confirm("Desea ir al enlace externo?")
    if (pregunta){
      var win = window.open('http://rollupjs.org/guide/en/', '_blank');
      win.focus();
    }
  }

  window.onload = function() {
    document.getElementById("boton_w").onclick = irPaginaWebpack;
    document.getElementById("boton_r").onclick = irPaginaRollup;
  }



