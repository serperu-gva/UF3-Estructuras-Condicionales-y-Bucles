## Exercici 4 - Unitat 8

La cooperativa *Cosmolab*, dedicada a la investigació espacial, gestiona diversos projectes interns que estudien la viabilitat de colònies fora del planeta Terra. En l’actualitat, treballen amb diferents prototips d’unitats experimentals que poden simular condicions d’hàbitat en diferents entorns, i necessiten una aplicació que els permeta supervisar en tot moment l’estat d’aquestes unitats. Fins ara, cada equip de recerca portava un registre manual, però amb l’arribada de nous membres s’ha decidit centralitzar tota la gestió.

Tota unitat operativa disposa d’un identificador numèric únic que el distingeix de les altres, i se li assigna un nom. També tenen un temps d'ús (en anys) i l’estat general en què es troba, que pot ser actiu o avariat.

En l’actualitat, hi ha tres tipus de prototips que funcionen de forma estable i que, per tant, han de poder ser registrats i gestionats: les unitats de cultiu, les d’anàlisi atmosfèric i les de generació d’energia. Cadascuna d’elles té característiques pròpies. Les unitats de cultiu estan especialitzades en simulacions de producció vegetal i compten amb un sistema de gestió d’aigua, que pot estar actiu o no, i una capacitat màxima de plantes que poden allotjar, a més del nombre actual de plantes allotjades i de la potencia en watts que consumeix. Les d’anàlisi atmosfèric enregistren el percentatge mitjà d'oxigen i la concentració mitjana de partícules contaminants detectades, en ppm (partícules per milió). Les unitats energètiques generen una certa potència cadascuna (per fer-ho senzill, serà constant).

Les diferents unitats són instal·lades de forma conjunta en zones (zona A, zona B, etc.). D'aquesta forma, cada zona és independent de la resta

Sumat a tot açò, cal tindre en compte que:

**Característiques de les Unitats de Cultiu:**
  - Si el sistema de gestió d'aigua està actiu, el sistema de cultiu consumirà una potència de 100 watts més altres 10 watts per planta.
  - En cada unitat de cultiu, el nombre de plantes no pot superar el maxim establit, que serà de 30. El nombre inicial de plantes s'establirà inicialment en 0.

**Característiques de les Unitats Energètiques:**
  - La potència generada per cada unitat energètica serà aleatòria entre 0.5 kW i 1.5 kW (tindria més sentit incorporar una variabilitat en funció de l'hora, per tal de simular el cicle dia/nit, però ho deixem més senzill).

**Característiques de les Unitats Atmosfèriques:**
  - Consumiran una potència constant de 300 watts.
  - El percentatge mitjà d'oxigen detectat per la unitat d'anàlisi atmosfèric començarà amb un número inicial de 10%.
  - El valor inicial en ppm de les partícules contaminants serà de 0.

**Característiques de les Zones:**
  - Cada zona no podrà tindre més d'una unitat d'anàlisi atmosfèric.
  - Tindran la capacitat de realitzar processos d'anàlisi atmosferic on:
    - Per cada planta allotjada en les diferents unitats de cultiu de la zona afegirà un valor aleatori comprés entre 0,05% i 0,15% al percentatge mitjà d'oxigen.
    - El valor de ppm augmentarà a mesura que es vagen afegint unitats energètiques (a raó d'un valor aleatori entre 25 i 75 per cada unitat energètica).


El sistema proporcionarà a l'usuari formes de modificar la composició dels elements de cada zona, amb la possibilitat d'afegir zones, afegir i eliminar unitats, i de variar alguns paràmetres d'aquests. Només es podran fer aquestes modificacions a zones operatives, que són aquelles que tenen, almenys, una unitat de cada tipus i, a més, almenys una unitat de cultiu té el sistema de gestió d'aigua activat. Les opcions que el sistema oferirà a l'usuari es divideixen en els següents menús:

::: details Menú General

```plaintext
Benvingut a la Cooperativa Cosmolab: Que desitjes fer hui?
1) Habilitar una nova Zona.
2) Buscar Zona per a realitzar alguna acción.
0) Eixir.
```
:::

- Possibilitat d'afegir una nova Zona demanant un nom a l'usuari.
- Possibilitat de buscar una Zona per a realitzar accions. La zona es buscarà per nom i oferirem a l'usuari la llista de zones existents perquè puga escriure el nom d'una d'elles fàcilment.

::: details Menú d'accions en les Zones 

```plaintext
Selecciona l'acció a fer en la zona: [NOM DE LA ZONA];
1) Afegir Unitat Operativa.
2) Modificar Unitat Operativa.
3) Eliminar Unitat Operativa.
4) Realitzar Analisi Atmosfèric.
5) Realitzar Analisi Energètic.
6) Reparar unitats avariades.
0) Tornar al menú anterior.
```
:::

- Possibilitat d'afegir noves unitats operatives.
- Possibilitat de modificar unitats de cultiu en zones operatives:
  - Possibilitat d'augmentar i disminuir el nombre de plantes, dins del límit establit.
  - Possibilitat d'activar o desactivar el sistema de gestió d'aigua. Per a afegir plantes, el sistema ha d'estar actiu. Mentre hi haja plantes, no es podrà desactivar. Per a eliminar la unitat, caldrà primer deixar el nombre de plantes a 0.

::: details Menú d'accions per a modificar una Unitat de Cultiu

```plaintext
Selecciona l'acció a fer en la zona: [NOM DE LA ZONA];
Quina modificació vols fer?
1) Afegir plantes.
2) Eliminar plantes.
3) Apagar el sistema de gestió d'aigua.
4) Activar el sistema de gestió d'aigua.
0) Tornar.
```
:::
- **Anàlisi atmosfèric**: es mostra informació sobre el percentatge d'oxigen en l'aire i sobre el nombre mitja de partícules contaminants. En cas de trobar valors fora des valors raonables per a la vida, informarà.
  - Els valors buscats d'oxigen mitjà a l'aire són entre 8% i 21%.
  - Els valors acceptables de partícules contaminants seran mai superiors a 100 ppm.
  - Com cada anàlisi agafa mostres d'aire diferents, sempre cap algun error en les dades. El percentatge d'oxigen pot variar en cada anàlisi de forma aleatoria en ±1% respecte del valor real, i les partícules contaminants poden variar en ±5 ppm.
- **Anàlisi energètic**: es mostra la informació de la potència disponible en el sistema i de la consumida, amb el detall desglossat per cada elements que en fa ús.

::: details Exemple d'eixida d'anàlisi energètic

```plaintext
ANÀLISI ENERGÈTIC DEL SISTEMA

Potència total disponible: 973 W
Potència total consumida: 790 W

Distribució del consum:

Unitat de cultiu 1: 320 W
  -> Sistema de gestió d'aigua actiu: 100 W
  -> Potència consumida per planta (22): 220 W 

Unitat de cultiu 2:  170 W
  -> Sistema de gestió d'aigua actiu: 100 W
  -> Potència consumida per planta (7): 70 W 

Unitats d’anàlisi atmosfèrica: 300 W
```
:::

**Característica Extra: Avaries (Reparar unitats avariades.)**

Tant les unitats energètiques com les d'anàlisi atmosfèric es poden avariar, però en cadascuna el mal funcionament tindrà una naturalesa diferent:

- Les unitats energètiques poden, de sobte, oferir fins a un 20% menys de la potència que deurien. Aquest comportament inesperat pot ocórrer en qualsevol moment que l'usuari demane un anàlisi energètic, amb una probabilitat d'avaria del 5% més un 2% addicional per cada any d'ús que tinga. Si la potència oferida cau per baix de la consumida, es considera que es perd la zona de manera irrecuperable amb totes les seues unitats operatives. Per fer-ho senzill, només farem aquesta comprovació quan fem un anàlisi energètic, no cada vegada que canvie el consum energètic de la zona.
- Les unitats d'anàlisi atmosfèric poden, de sobte, donar dades completament incorrectes si s'avarien, cosa que pot passar en una probabilitat del 10% més un altre 1% per cada any d'ús, i pot ocórrer cada vegada que l'usuari fa un anàlisi atmosfèric. Quan s'avarien donaràn valors negatius d'oxigen i ppm.
- Ambdues situacions es poden solucionar. L'usuari sempre tindrà accés a l'opció que permet solucionar les avaries  en cadascun dels dos tipus d'unitats, però en cas de seleccionar aquesta opció sense que la unitat estiga avariada es mostrarà un missatge informant que ningun mal funcionament ha sigut detectat. En cas de sí haver, es solucionarà.