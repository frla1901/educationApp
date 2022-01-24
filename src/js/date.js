// Skapar ett Date objekt - current day and date
var date = new Date(),
options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };

// Konverterar och lägger till språk/land
date = date.toLocaleString( "sv-SE", options );

// Skriver ut genom innerHTML till "date"
document.getElementById("date").innerHTML = date;