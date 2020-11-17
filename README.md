# Release Notes for Q.wiki

## Bilder einbetten

```md
![Alt-Text](/pfad/zum/bild.jpg "Ich stehe dann unterm Bild drunter")
```

**Dateinamen dürfen keine Umlaute beinhalten!** Ansonsten wird die Seite, auf der das Bild eingebunden werden soll, nicht gebaut.

## YouTube-Videos embedden

einfach die Video-URL (z.B. https://www.youtube.com/watch?v=1svA2sGhDEE) als einzigen Inhalt in eine Zeile kopieren

## Links innerhalb der Release Notes

Um auf Seiten innerhalb der Release Notes zu verlinken als href-Attribut zum Beispiel `/faq/blablabla` angeben – also ohne `https://releases.modell-aachen.de`. Diese relativen Links funktionieren dann auch immer auf Testsystemen und sind insgesamt etwas weniger Fehleranfällig.
