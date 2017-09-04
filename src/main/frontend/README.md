# myHelsana Frontend
Eigenständig mit Mock, ebefalls im Projekt. Enthält einen Reverse-Proxy, und wird bei einem Deployment vom API-Gateway abgelöst.

Bei diesem Projekt wird mit dem Branching-Model gearbeitet. Als Prefix wird _feature/MYH-xxx_ genommen.
![alt text][logo]

[logo]: https://le
anpub.com/site_images/git-flow/git-flow-nvie.png "Gitflow"

## Prerequisite
Node muss installiert sein.

## Getting Started
1. Dependencies installieren vom Frontend wie auch vom Backendmock (`npm i`)
2. In das Verzeichnis des Backendmocks wechseln und ```node index.ts``` oder `npm start` ausführen
4. Im Root-Verzeichnis  ```npm start``` ausführen
5. Browser mit localhost:4200 öffnen

## Tasks
###### Frontend
* Start für development `npm start`
* Build für Produktion `npm run prod`
* Build für Produktion and serve `npm run prod:serve`
* E2E zuerst Proxy setzten `set HTTP_PROXY=http://proxy-surf:8080` danach `npm run e2e`
###### Backendmock
* Start für development im Verzeichnis des Backendmocks `npm start` oder `node index.ts` ausführen

###### Neue Font erstellen / Icons hinzufügen
1. SVG Icon unter ./src/iconfont/icons hinzufügen und einen passenden Namen vergeben (analog bereits vorhandene)
2. Erstellen der Font durch `npm run font`

## DOD
* Feature ist mit Karma getestet
* Vor dem Merge wurde `npm run prod` ausgeführt um die funktionalität auch mit AOT zu gewährleisten

## Struktur
* Hauptseiten werden im Ordner Pages abgelegt analog Overview
* Globale(Falls Files in diversen inkludiert werden) Sachen im Ordner common
* Services falls diese nur an einem Ort verwendet werden sind im Komponentenordner abzulegen
* Aufteilung des componentes ordners
	* Modul Input für alle Felder in welchem etwas geschrieben wird, aber auch Radiobutton und Checkbox
	* Template Module alle anderen
	* Weitere Aufteilung des Template Modules wäre denkbar

## Refactoring / TODO
* ~~Dropdown vereinfachen (Style & Code)~~
* Remove e2e data Attributes for production
* Lazy Loading der PageModule
* CI vor Merge mit `npm run e2e` / `npm run test` / `npm run lint`
