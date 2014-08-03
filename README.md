# AEDE-gCache

Script para [Greasemonkey](1), que resalta los enlaces a medios de asociados a AEDE y modifica los enlaces para visitarlos a través de la caché de google y de esta manera no generar visitas.

El script es muy similar a [anti-AEDE](https://github.com/pykiss/anti-AEDE) pero con menos funcionalidades y bastante más simple.

Aunque AEDE-gCache se puede usar en Chrome/Chromium/Iron con la extensión [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/), funciona mejor con [Greasemonkey](1) en Firefox/Iceweasel.

### Instalación

 1. Instala [Greasemonkey](1) en Firefox/Iceweasel/IceCat
 2. Instala el script desde [este enlace](https://github.com/).

### Chrome/Chromium no respeta tu privacidad

 - Envia información a Google a través de la función de sugerencias y autocompletado Omnibox
 - Envia información a Google de estadisticas de uso e informes de fallos.
 - Cada copia de Chrome/Chromium va identificada con un numero de instalación
 - El rastreador RLZ transmite información cifrada a Google: Lugar y fecha de descarga de Chrome, etc...
 - Google updater está siempre activo permitiendo a Google modificar lo que se le antoje.
 - Rastreador de URLs se abre en segundo plano 5 segundos después de abrir la página principal.
 - No es posible cambiar el User-Agent
 - Para instarlar extensiones necesitas asociar una cuenta de google

Existe un fork de Chromium llamado Iron desarrollado por SRWare sin todos estos problemas pero no está disponible en los repositorios de las principales distribuciones con lo que las actualizaciones deben realizarse de forma manual. En la web dicen que es software libre y abierto pero no especifican la licencia de forma clara. En wikipedia aparece como software propietario, en wikipedia.es como BSD y en softonic como GPL.

Por lo tanto si valoras tu libertad y privacidad utiliza IceCat/Iceweasel/Firefox.

[1]: https://addons.mozilla.org/es/firefox/addon/greasemonkey/  "Greasemonkey"


