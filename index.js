var indice = 0;
palabras = new Array();
palabras= ["1.- SASS","2.- LESS","3.- STYLUS"];
indice = Math.random()*(palabras.length);
indice = Math.floor(indice);
function rotar() {
    if (indice == palabras.length) {indice = 0;}
        document.getElementById("rotando").innerHTML = palabras[indice];
        indice++;
        setTimeout("rotar();",3000);
}
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



