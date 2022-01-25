# educationApp

## dt173g_moment5_steg2 

### Skapande av en fristående publik webbapplikation som konsumerar REST-webbtjänsten courses_api 

#### Obligatorisk funktionalitet:
* Läsa ut listan över kurser/alla poster.
* Skapa formulär som gör det möjligt att lägga till ny kurs/post.

### Följande funktionalitet ska finnas i lösningen för godkänt:
1. Webbapplikationen ska använda Fetch API för att hämta (GET) och skicka data (POST) från och till webbtjänsten.

2. Lösningen ska skapas med enbart HTML, CSS och JavaScript (ej PHP). SASS ska användas för din CSS.

3. Lösningen ska publiceras till publikt tillgänglig webbhost.

4. Källkoden ska publiceras till ett online repository som exempelvis Github eller Git bucket.

5. Det ska finnas en README-fil som ger en beskrivning av din webbapplikation samt inkluderar en webblänk till din publicerade webbplats för testkörning.

#### Frivillig funktionalitet:
* möjlighet att uppdatera informationen om en kurs/post i listan.
* möjlighet att radera kurs/post i listan.

### GRUND
I steg 2 av moment 5 har jag använt git, gulp och flera andra npm paket, VSC samt VSC terminalen samt testkört i webbläsaren Chrome genom tillägget Browser-sync. 

Då jag hade tyvärr inte gjorde båda delarna under samma period så var jag tvungen att gå tillbaka och säkerställa att versionerna var uppdaterade innan jag gick vidare med steg 2 och utvecklade webbapplikationen. NPM version 8.1.2 är den som använts. Information om resterande versioner finns i filen **package.json** 

Bestämde tidigt att applikationen skulle heta educationApp och att den skulle publiceras som en del av webbplatsen där alla moment finns med. 

Jag klonade därför ner min källkod för moment 4 i kursen då jag ville använda liknande utseende och navigation under alla kursens delmoment. Källkoden justerades utifrån moment 5 t.ex. adderade jag en ny knapp med länk så att repo till både Steg 1 och Steg 2 finns med. Dessutom justerades huvudmenyn och under arbetets gång även sidans layout.

### DEL 1

    Hämta och läsa ut mina kurser:

Jag påbörjade arbetet lokalt som jag nämnt tidigare. Mitt första steg var att skapa JavaScriptfilen **table.js** där jag i stora drag följde videon där Malin visar hur man enkelt konsumerar ett REST-api med hjälp av Fetch. Började med en grundvariabel **coursesEl** och en händelslyssnare som triggar funktionen getCourses när sidan laddas. Funktionen använder Fetch för att hämta alla kurser som är sparade i mitt api [courses-api](https://www.frida360.se/courses-api/api). Jag testade detta först i konsollen. Se bild nedan: 

![Skärmavbild - course.courseName](https://github.com/frla1901/educationApp/blob/master/src/images/Skärmavbild%202022-01-21%20kl.%2010.00.55.png).

För att kunna visa kurserna i applikationen testade jag med att lägg in tomma elementen som p (paragraf) och li (listobjekt) i filen index.html. Slutligen valde jag att göra en tabell för kurserna och lämnande **tbody** elementet tomt. Det fungerade med p och li men tyckte det såg tydligast ut med en tabell. I **table.js** filen adderade jag även en "Radera kurs" och en "Uppdatera kurs" knapp per tabellrad, som jag återkommer till längre ner i denna README fil. 

    Lägga till en ny kurs: 

I filen **index.html** skapade jag ett fomulär samt en knapp för att lägga till/skicka den nya kursen till mitt REST-api. Därefter skapade jag variabler, händelselyssnare och funktionen addCourse i filen **forms.js**. När knappen "Lägg till kurs" klickas så triggas funktionen addCourse som tar de värden som finns i formuläret och skickar dessa till courses-api i JSON format genom att använda Fetch och metoden POST. Därefter körs funktionen getCourses igen och den nya kursen har lagts till i listan. 

### DEL 2
I steg 2 av moment 5 har jag enbart använt mig av HTML, JavaScript och SCSS för min CSS. Jag har använts en enkel mappstruktur för respektive CSS område - Base, Components, Layout som länkas samman i en huvud stilmall: **_main.scss**.

### DEL 3
Publiceringen gjordes genom mitt webbhotell hos Inleed samt FileZilla (ftp överföring av filer) och därefter testkördes allt igen i webbläsaren Chrome. Länk till min publicerade webbapplikation: 
[https://www.frida360.se/educationApp/](https://www.frida360.se/educationApp/)

### DEL 4
* Länk till detta repo där alla källkodsfiler som använts finns:  
[https://github.com/frla1901/dt173g_moment2.git](https://github.com/frla1901/dt173g_moment2.git)  

Genom **.gitignore** filen synkroniseras inte node moduler samt de publicerade filerna till mitt repo:

    /node_modules
    /pub

### DEL 5
När du läst så här långt så har du kommit till slutet av min README-fil som har skapats för att beskriva webbapplikationen och mitt arbetssätt. Webblänken till min fristående publicerade webbapplikation finner du under DEL 3 ovan! 

### Frivillig funktionalitet

    Radera kurs i listan

Denna del ville jag definitivt göra eftersom jag testade att lägga till kurser och därmed blev listan längre än vad den är egentligen:) 

Varje kurs har ett id och visas på en rad i min tabell. Ytterst i denna rad placerade jag en "Radera kurs" knapp som jag beskrivit tidigare i DEL 1. När denna knapp klickas triggas funktionen deleteCourse som tar kursens id nummer som parameter. 

Skapade inte en ny JavaScript fil för att särskilja denna funktion från tabellen utan valde att lägga den längre ner i **table.js** filen. Funktionen deleteCourse använder Fetch, där det specifika id som specificerats, utifrån vilken rad som klickats, hämtas från mitt REST-api och sen används metoden DELETE. Därefter körs funktionen getCourses som hämtar alla kurser och visar att den raderade kursen är borttagen.

    Uppdatera kurs i listan

På liknande sätt ville jag testa att uppdatera informationen om en kurs eftersom jag i Steg 1 skapat PUT funktionalitet och testat i Advanced Rest Client.Jag valde dock att ta bort knappen och inkluderar inte denna funktionalitet i detta moment utan testade vidare lokalt efter publicering för att kunna applicera det i mitt projekt istället.  

