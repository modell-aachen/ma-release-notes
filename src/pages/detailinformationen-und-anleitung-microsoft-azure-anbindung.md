---
layout: layouts/page.njk
title: Detailinformationen und Anleitung Microsoft Azure Anbindung
permalink: /faq/microsoft-azure.html
---
**Achtung!** Diese Informationen und Anleitung dienen dem entsprechendem IT Fachpersonal. Sie unterstützen das selbstständige Einrichten der Anbindung von Q.wiki Now! an Microsoft Azure. Diese Seite entspricht dem aktuellem **Stand vom 09.06.2021** und wird nicht aktualisiert. Bei Unklarheiten verweisen wir auf unseren [Modell Aachen Support](https://www.modell-aachen.de/de/support) oder [offizielle Anleitungen von Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/tutorial-list).

## Limitierungen

* Es können ausschließlich Nutzer synchronisiert werden, **eine Gruppen-Synchronisation wird aktuell nicht unterstützt.**
* Des Weiteren kann und darf Azure AD nicht zusammen mit anderen Providern (z.B. LDAP) konfiguriert werden. Lediglich der Topic Provider (Q.wiki Nutzer) ist immer aktiv und erlaubt es, externe Nutzer in Qwiki zu registrieren. 
* Wird einmal das Azure AD genutzt, gibt es kein Zurück mehr.
* Es ist notwendig, dass jeder Nutzer eine einzigartige Email-Adresse hat, bevor ein Azure AD angebunden werden kann. Der Konfigurationsdialog in Q.wiki weist darauf hin, falls diese Voraussetzung nicht erfüllt ist. Über die Q.wiki Nutzerverwaltung kann ein KeyUser doppelt vergebene E-Mail-Adresse abändern.
* Für die Mitarbeiterprofile Applikation liefert die Microsoft Azure Anbindung lediglich folgende Werte:

  * email
  * givenName
  * sn
  * telephoneNumber
* Aus Sicherheitsgründen sind alle synchronisierten Nutzerdaten längenbeschränkt. Die maximale Zeichenanzahl beträgt 100. Nutzer, die einen Anzeigenamen mit mehr als 100 Zeichen haben, können daher nicht synchronisiert werden.

## Migration vorhandener Topic/LDAP Nutzer

Wird ein Azure AD angebunden und darüber die Nutzer provisioniert, werden automatisch alle vorhandenen Nutzer migriert, **die eine übereinstimmende Email Adresse haben**.\
\
Alle migrierten Nutzer werden anschließend entsprechend der Daten aus dem Azure AD aktualisiert und müssen von diesem Zeitpunkt an über das Azure AD verwaltet werden. Migrierte Topic User sind dann auch keine Topic User mehr: Ihr Q.wiki Passwort wird zurückgesetzt. Sie können sich nicht mehr mit ihrem Nutzernamen und Passwort direkt im Q.wiki anmelden, sondern müssen dies über den Office 365 Login-Button machen.

## Voraussetzungen

Damit das Azure AD konfiguriert werden kann, muss Q.wiki über https und der Q.wiki Endpunkt /api/v1/scim für das Azure AD erreichbar sein.

Anleitung zur Anbindung von Microsoft Azure an Q.wiki