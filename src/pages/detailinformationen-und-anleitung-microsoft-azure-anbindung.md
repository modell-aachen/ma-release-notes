---
layout: layouts/page.njk
title: Detailinformationen und Anleitung Microsoft Azure Anbindung
permalink: /faq/microsoft-azure.html
---
**Achtung!** Diese Informationen und Anleitung dienen dem entsprechendem IT Fachpersonal. Sie unterstützen das selbstständige Einrichten der Anbindung von Q.wiki an ein Microsoft Azure Active Directory. Diese Seite entspricht dem aktuellem **Stand vom 09.06.2021** und wird nicht aktualisiert. Bei Unklarheiten verweisen wir auf unseren [Modell Aachen Support](https://www.modell-aachen.de/de/support) oder [offizielle Anleitungen von Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/tutorial-list).

## Limitierungen

* Es können mit Mircosoft Azure ausschließlich Nutzer synchronisiert werden, **eine Gruppen-Synchronisation wird aktuell nicht unterstützt.**
* Des Weiteren kann und darf Microsoft Azure nicht zusammen mit anderen Providern (z.B. LDAP) konfiguriert werden. Lediglich der Topic Provider ist immer aktiv und erlaubt es, externe Nutzer in Qwiki zu registrieren. 
* **Wird einmal das Azure AD genutzt, gibt es kein Zurück mehr.**
* Es ist notwendig, dass jeder Nutzer eine einzigartige E-Mail-Adresse hat, bevor ein Azure AD angebunden werden kann. Der Konfigurationsdialog in Q.wiki weist darauf hin, falls diese Voraussetzung nicht erfüllt ist. Über die Q.wiki Nutzerverwaltung kann der Q.wiki KeyUser doppelt vergebene E-Mail-Adresse abändern.
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

Damit das Microsoft Azure Active Directory mit Q.wiki verbunden werden kann, muss Q.wiki über https und der Q.wiki Endpunkt /api/v1/scim für das Azure AD erreichbar sein.

## Konfigurationsdialog in Q.wiki öffnen

* Als **KeyUser** in Q.wiki anmelden
* Unter **KeyUser Werkzeuge** die **Nutzer-Verwaltung** aufrufen

![](/images/keyuserwerkzeuge.png)

* Im Drei-Punkte-Menü auf **Azure Active Directory anbinden** klicken

![](/images/azure_ad_anbinden.png)

* **Konfigurationsdialog** öffnet sich (**wird im späteren Verlauf benötigt**)

![](/images/self-service-maske.png "Konfigurationsdialog Azure Active Directory Anbindung")

## Neue Enterprise Applikation in Microsoft Azure anlegen

* **All Services** auswählen
* **Enterprise applications** auswählen

![](/images/enterprise_applications_auswählen.png)

* **All Applications** auswählen
* **New applications** auswählen

![](/images/new_application.png)

* **Create your own application** auswählen

![](/images/create_your_own_application.png)

* **Namen** eingeben
* **Non-gallary** app auswählen

![](/images/namen_eingeben.png)

* **Create** anklicken

## Provisionierung einstellen

* In der angelegten App **Provisioning** auswählen
* **Get started** klicken[](https://storage.3.basecamp.com/4269870/blobs/1cb99588-c513-11eb-8d61-ecf4bbd72d92/download/Provisioning.png?attachment=true)

![](/images/provisioning.png)

* **Provisioning Mode** auf **Automatic** setzen[](https://storage.3.basecamp.com/4269870/blobs/4c5344f6-c513-11eb-9239-8e17cd0352bb/download/Provisioning_Mode.png?attachment=true)

![](/images/provisioning_mode.png)

* **Tenant URL** eintragen (**aus Konfigurationsdialog in Q.wiki kopieren, siehe oben**)
* **Secret Token** eintragen (**über Konfigurationsdialog in Q.wiki generieren und kopieren, siehe oben**)
* **Test Connection** klicken und erfolgreiche Verbindung überprüfen[](https://storage.3.basecamp.com/4269870/blobs/c1bfaf54-c513-11eb-b0cb-a0369f740dfe/download/Test_connection.png?attachment=true)

![](/images/test_connection.png)

* **Save** klicken
* Unter **Mappings** auf **Provision Azure Active Directory Groups** klicken, **Enabled** auf **No** setzen und **speichern**[](https://storage.3.basecamp.com/4269870/blobs/09373c6c-c514-11eb-a714-ecf4bbd72a70/download/Provision_Azure_AD_Groups.png?attachment=true)

![](/images/provision_azure_ad_groups.png)

* Unter **Settings** die **Notification Email** den Verantwortlichen eintragen, der bei Synchronisierungsproblemen benachrichtigt werden soll.
* Bei **Scope** auswählen, ob alle Nutzer synchronisiert werden sollen oder nur die Nutzer, die explizit ausgewählt werden[](https://storage.3.basecamp.com/4269870/blobs/5789b0ac-c514-11eb-8da2-ecf4bbd72d92/download/Notification_Email.png?attachment=true).

![](/images/notification_email.png)

* **Provisioning Status** auf **On** setzen
* **Save** klicken
* Unter **Mappings** auf **Provision Azure Active Directory Users** klicken
* Unter **Attribute Mappings** sind alle Attribute gelistet, die an Q.wiki gesendet werden. Die Standardeinstellung sollte bereits alle für Q.wiki notwendigen Attribute beinhalten. Im Folgenden sind alle Attribute aufgelistet, die von Q.wiki verwendet werden. Alle anderen Attribute können bedenkenlos gelöscht werden.
* Die Attribute **name.givenName, name.familyName** und **phoneNumbers\[type eq "work"].value** sind optional und werden in Q.wiki nur für die Darstellung in der Mitarbeiterprofile Applikation verwendet.

![](/images/image.png)

* Wurde der Scope so eingestellt, dass nur zugewiesene Nutzer synchronisiert werden sollen, müssen diese Nutzer noch unter **Users and groups** hinzugefügt werden.[](https://storage.3.basecamp.com/4269870/blobs/2b2318d2-bdf3-11eb-a702-8e17cd0352bb/download/image.png?attachment=true)
* Dort können Gruppen und Nutzer hinzugefügt werden. Werden Gruppen hinzugefügt, dann werden zwar die Gruppen nicht synchronisiert, dafür aber alle **direkten** Mitglieder.

![](/images/user_and_groups.png)

## Authentifizierung einstellen

* **All services** auswählen
* **Azure Active Directory** auswählen[](https://storage.3.basecamp.com/4269870/blobs/2c7495e8-c515-11eb-9a04-ecf4bbd72a70/download/Azure_Active_Directory.png?attachment=true)

![](/images/azure_active_directory.png)

* **App registrations** auswählen[](https://storage.3.basecamp.com/4269870/blobs/4f41dedc-c515-11eb-a254-8e17cd0352bb/download/App_registrations.png?attachment=true)

![](/images/app_registrations.png)

* **All applications** auswählen[](https://storage.3.basecamp.com/4269870/blobs/7d9f4238-c515-11eb-ae46-a0369f740dfe/download/All_applications.png?attachment=true)

![](/images/all_applications.png)

* Die zuvor angelegte Applikation für Q.wiki auswählen
* Die **Application (client) ID** kopieren und im **Konfigurationsdialog in Q.wiki** eintragen
* Die **Directory (tenant) ID** kopieren und im **Konfigurationsdialog in Q.wiki** eintragen
* **Authentication** auswählen
* **Add a platform** auswählen[](https://storage.3.basecamp.com/4269870/blobs/a5e3a220-c515-11eb-a89a-a0369f740dfe/download/Add_a_platform.png?attachment=true)

![](/images/add_a_platform.png)

* **Web application** auswählen[](https://storage.3.basecamp.com/4269870/blobs/d77e4902-c515-11eb-88ef-ecf4bbd72a70/download/Web_application.png?attachment=true)

![](/images/web_application.png)

* **Redirect URI** aus Q.wiki Konfigurationsdialog kopieren und hier eintragen
* **Configure** klicken
* **Certificates & secrets** auswählen
* **New client secret** klicken
* **Description** eingeben
* **Add** klicken
* Den **Value** des generierten Secrets kopieren und im **Q.wiki Konfigurationsdialog** einfügen
* **API permissions** auswählen
* **Add a permission** klicken
* **Microsoft Graph** auswählen[](https://storage.3.basecamp.com/4269870/blobs/54aa99a8-c516-11eb-8afb-ecf4bbd6f7a8/download/Microsoft_Graph.png?attachment=true)

![](/images/microsoft_graph.png)

* **Delegated permissions** auswählen
* Unter OpenId permissions **email**, **openid** und **profile** auswählen[](https://storage.3.basecamp.com/4269870/blobs/8f4ab3c2-c516-11eb-92aa-ecf4bbd72a70/download/OpenId_permissions.png?attachment=true)

![](/images/openid_permissions.png)

* **Add a permission** klicken 
* **Grant admin consent** klicken und mit **Yes** bestätigen