---
layout: layouts/page.njk
title: Sicherheitseinstellungen für WebDAV tätigen
permalink: /faq/webdav.html
---
Für WebDAV, d.h. zur direkten Bearbeitung von Office Dokumenten aus Q.wiki heraus, müssen zwei grundlegende Anforderungen außerhalb von Q.wiki erfüllt sein: Die verwendete **Office Version** muss **2010 oder neuer** sein. Und Q.wiki muss auf dem lokalen Computer als **sichere Website** bekannt sein. Letzteres lässt sich auf zwei Weisen konfigurieren:

1. Zentrale Konfiguration aller Windows Betriebsysteme aller Computer über die IT: Ausrollen/Änderung der sog. Gruppenrichtlinie
2. Lokale Konfiguration eines Windows Betriebssystems eines Computers: Ergänzung von Q.wiki in die Sicherheitszone "lokales Intranet"

Beide Varianten werden Ihnen im Folgenden vorgestellt. Bitte beachten Sie jedoch, dass insbesondere die erste Variante nur durch Ihre zentrale IT durchgeführt werden kann.

# Ausrollen/Änderung der Gruppenrichtlinie

Öffnen Sie den **Editor für Gruppenrichtlinien** z.B. indem Sie "Gruppenrichtlinie" in die Windows 10 Suche eingeben.

![](/images/2021-10-10-13_43_04-filme-tv.png "Windows 10 Suche")

Anschließend navigieren Sie über Computerkonfiguration > Administrative Vorlagen > Windows-Komponenten > Internet Explorer > Internetsystemsteuerung > Sicherheitsseite zu **Liste der Site zu Zonenzuweisungen**.

![](/images/gruppenrichtlinien.png "Editor für Gruppenrichtlinien")

Hier können Sie nun die Zonenzuweisung aktivieren und für ihr jeweiliges Q.wiki ergänzen. Beachten Sie, dass hier ihre individuelle Adresse Ihres Q.wiki eingetragen werden muss. Als Wert hinterlegen Sie "1". Bestätigen Sie im Anschluss alle Änderungen.

![](/images/liste-der-site-zu-zonenzuweisung.png "Liste der Site zu Zonenzuweisungen")

# Ergänzung von Q.wiki in die Sicherheitszone "lokales Intranet"

Öffnen Sie die **Internetoptionen** z.B. indem Sie "Internetoptionen" in die Windows 10 Suche eingeben.

![](/images/internetoptionen.png "Windows 10 Suche")

Wechseln Sie auf den Reiter **Sicherheit** und **prüfen Sie ob unten die Warnmeldung "Einige Einstellungen werden vom Systemadministrator verwaltet." angezeigt wird.** Sehen Sie diese Warnmeldung ist dies ein Zeichen dafür, dass Ihre Internetoptionen durch eine Gruppenrichtlinie Ihrer zentralen IT verwaltet werden. Gehen Sie in diesem Fall mit dieser Anleitung auf Ihre IT zu und bitten um Anpassung der Gruppenrichtlinie (siehe oben).

Wird Ihnen die Warnmeldung nicht angezeigt wählen Sie **Lokales Intranet** aus und klicken anschließend auf **Sites**.

![](/images/internetoptionen2.png "Internetoptionen")

Hier können Sie nun "Intranet automatisch ermitteln" abwählen und **Erweitert** anklicken.

![](/images/lokales-intranet.png "Lokales Intranet")

Anschließend können Sie Ihre Q.wiki URL in der Form "***kundenname*.qwikinow.de**" der Zone "Lokales Intranet" hinzufügen. Bestätigen Sie im Anschluss alle Änderungen.

![](/images/lokales-intranet2.png "Websitezuweisung für lokales Intranet")