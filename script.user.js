// ==UserScript==
// @name        aede
// @namespace   aede
// @description Resalta y visita los enlaces de medios aede desde la caché de google
// @include     *
// @updateURL   https://github.com/P3nko/AEDE-gCache/raw/master/script.user.js
// @version     1
// @grant       none
// ==/UserScript==

socios = [
  "abc.es",
  "aede.es",
  "as.com",
  "canarias7.es",
  "cincodias.com",
  "dbalears.cat",
  "deia.com",
  "diaridegirona.cat",
  "diaridetarragona.com",
  "diarideterrassa.es",
  "diariocordoba.com",
  "diariodeavila.es",
  "diariodeavisos.com",
  "diariodeburgos.es",
  "diariodecadiz.es",
  "diariodeibiza.es",
  "diariodejerez.es",
  "diariodelaltoaragon.es",
  "diariodeleon.es",
  "diariodemallorca.es",
  "diariodenavarra.es",
  "diariodenoticias.org",
  "diariodepontevedra.galiciae.com",
  "diariodesevilla.es",
  "diarioinformacion.com",
  "diariojaen.es",
  "diariopalentino.es",
  "diariosur.es",
  "diariovasco.com",
  "eladelantado.com",
  "elalmeria.es",
  "elcomercio.es",
  "elcorreo.com",
  "elcorreoweb.es",
  "eldiadecordoba.es",
  "eldiariomontanes.es",
  "eleconomista.es",
  "elmundo.es",
  "elnortedecastilla.es",
  "elpais.com",
  "elpais.es",
  "elperiodico.cat",
  "elperiodico.com",
  "elperiodicodearagon.com",
  "elperiodicoextremadura.com",
  "elperiodicomediterraneo.com",
  "elprogreso.es",
  "europasur.es",
  "expansion.com",
  "farodevigo.es",
  "granadahoy.com",
  "heraldo.es",
  "heraldodesoria.es",
  "hoy.es",
  "ideal.es",
  "intereconomia.com",
  "lagacetadesalamanca.es",
  "laopinion.es",
  "laopinioncoruna.es",
  "laopiniondemalaga.es",
  "laopiniondemurcia.es",
  "laopiniondezamora.es",
  "laprovincia.es",
  "larazon.es",
  "larioja.com",
  "lasprovincias.es",
  "latribunadealbacete.es",
  "latribunadeciudadreal.es",
  "latribunadetalavera.es",
  "latribunadetoledo.es",
  "lavanguardia.com",
  "laverdad.es",
  "lavozdealmeria.es",
  "lavozdegalicia.es",    
  "lavozdigital.es",
  "levante-emv.com",
  "lne.es",
  "majorcadailybulletin.es",
  "malagahoy.es",
  "marca.com",
  "menorca.info",
  "mundodeportivo.com",
  "noticiasdealava.com",
  "noticiasdegipuzkoa.com",
  "regio7.cat",
  "sport.es",
  "superdeporte.es",
  "ultimahora.es"
];

document.onload=cambiarEnlaces;

window.addEventListener('DOMContentLoaded', cambiarEnlaces , false);

function cambiarEnlaces(){
  enlaces = document.getElementsByTagName("a");
  for(var i in enlaces){ 
    if( !hasClass(enlaces[i],'aede') ){
      enlaces[i].classList.add("aede");
      var hostname = enlaces[i].hostname; 
      var parts = String(hostname).split('.');
      var subdomain = parts.shift();
      var upperleveldomain = parts.join('.');
      for(var j in socios){
        if( hostname == socios[j] || upperleveldomain  == socios[j] ){
          enlaces[i].href = "http://webcache.googleusercontent.com/search?q=cache:"+enlaces[i].href;
          enlaces[i].style.backgroundColor = "#42193A" ;
          enlaces[i].style.color = "#fff" ;
        }
      }  
    }
  }
}

function hasClass(el, selector) {
   var className = " " + selector + " ";
   if ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1) {
     return true;
   } return false;
}


