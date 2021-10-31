# education

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

##### GRUND
I steg 2 av moment 5 har jag använt gulp, npm paket, VSC samt VSC terminalen samt testkört i webbläsaren Chrome genom Browser-sync. 

###### NPM paket / verktyg
1. **gulp** - för automatisering.
2. **gulp-concat** - för att slå ihop mina js-filer och css-filer.
3. **gulp-terser** - för att minifirera mina js-filer.
4. **gulp-cssnano** - för att minifiera mina CSS-filer. 
5. **gulp-imagemin** - för att minifiera mina bilder. 
6. **browser-sync** - för att kunna använda och se hur sidan uppdateras live (som Live-server i VSC).
7. **gulp-sourcemaps** - för att kunna se källkodens ursprung/sökväg (visar src mapparna).


Publiceringen gjordes genom mitt webbhotell hos Inleed samt FileZilla (ftp överföring av filer) och därefter testkördes allt igen i webbläsaren Chrome.
