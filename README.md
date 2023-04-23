**Dokumentation für ein neues Teammitglied
**

Schrtt 1:

Voraussetzungen:

Stellen Sie sicher, dass Docker auf Ihrem Computer installiert ist. Wenn Docker nicht installiert ist, können Sie es von der offiziellen Docker-Website herunterladen und installieren.

Falls dies nicht der Fall ist finden Sie weiter Unten eine Schritt-für-Schritt Anleitung

Stellen Sie sicher dass Sie über einen Git-Hub Account verfügen und Git oder Git-Desktop auf ihren Computer installiert haben.

Schritt 2:

Klonen Sie das Project mit Git oder mit Git Desktop.

Falls Sie nicht wissen wie das funktioniert, finden Sie auf der wieter unten eine Schritt-für-Schritt Anleitung.

Schritt 3: 

Docker-Image erstellen. Wechseln Sie in Ihrem Terminal in das Verzeichnis, in dem sich das Dockerfile befindet, und führen Sie den folgenden Befehl aus, um ein Docker-Image für Ihre Anwendung zu erstellen:

docker build -t datum-webapp

Dieser Befehl erstellt ein Docker-Image mit dem Tag "datum-webapp" basierend auf dem Dockerfile im aktuellen Verzeichnis. Stellen Sie sicher, dass der Punkt am Ende des Befehls enthalten ist, um das aktuelle Verzeichnis als Build-Kontext zu verwenden.

Schritt 4:

Docker-Container ausführen Führen Sie den following Befehl aus, um einen Docker-Container aus dem erstellten Docker-Image auszuführen:

docker run -p 3000:3000 -d datum-webapp

Dieser Befehl führt den Docker-Container im Hintergrund aus und verknüpft den Port 3000 des Hosts mit dem Port 3000 des Containers, auf dem Ihre Webanwendung läuft.

Schritt 6:

Webanwendung testen Öffnen Sie einen Webbrowser und geben Sie „ http://localhost:3000 “ ein. SIE sollten die Ausgabe Ihrer Webanwendung sehen, sterben das heutige Datum angezeigt.

**************************************************************************************************************

*Schritt für Schritt Anleitung um Docker zu installieren:*

-Gehe auf die Docker-Website und lade das Installationsprogramm für Docker Desktop herunter: https://www.docker.com/products/docker-desktop
-Starte das Installationsprogramm und folge den Anweisungen auf dem Bildschirm.
-Option Enable WSL 2 Windows Features wählen. Installationsprogramm durchlaufen lassen.
-Das Installationsprogramm wird Docker Desktop auf deinem System installieren. Das kann einige Minuten dauern.
-Sobald die Installation abgeschlossen ist, unbedingt danach den Computer neu starten. 
-Öffne Docker Desktop.
-Nach dem Restart kommt die folgende Meldung:
 
-Link in der Meldung anklicken (Fenster offen lassen)

-Auf der Webseite, die sich öffnet findest du den Link: ”Laden Sie das neueste Updatepaket für den WSL2-Linux-Kernel für x64-Computer herunter.” Diesen Link anklicken (Es wird ein weiteres Installationspaket heruntergeladen).

-Installationspaket ausführen.

-Dann im offen gelassenen Fenster “Restart” drücken.

-Wenn der Computer neu startet wird automatisch Docker gestartet (dies kann beim ersten Mal einige Zeit dauern, denn im Hintergrund entpackt er noch WSL2-Dateien um richtig funktionieren zu können.

-Ein Fenster geht auf und man wird aufgefordert ein Tutorial zu machen. Dieses Tutorial könnt ihr überspringen.

-In Docker Settings gehen. Unter Resources —> WSL Integration. Wenn es bei dir so aussieht müsstest du noch Ubuntu installieren.

-Dafür öffnest du ein Powershell-Window und gibst den folgenden Befehl ein: 

wsl --set-default-version 2

-Öffne dann Microsoft-Store und suche dort nach Ubuntu. Ich empfehle die Version 20.04 Version anklicken, herunterladen und dann die Installation laufen lassen.

-Wenn die Installation abgeschlossen ist, auf Starten klicken. Es geht ein Linux Fenster auf.

-In diesem Fenster musst du einen User und ein Passwort bestimmen, für diese Linux Installation. Danach das Fenster wieder schliessen.

-In Docker Settings unter Resources —> WSL Integration den Knopf “Refresh” anklicken und die Docker Integration in Ubuntu aktivieren.

-Falls du es auf deinem System noch nicht installiert hast, empfehle ich dir “Windows Terminal” aus dem Microsoft-Store zu installieren.

-Das war's! Jetzt solltest du Docker Desktop auf deinem Windows-System installiert haben und bereit sein, damit zu arbeiten.


**************************************************************************************************************

 *Schritt-für-Schritt-Anleitungen zum Klonen eines GitHub-Projekts, einmal mit Git und einmal mit Git Desktop:*
 
Mit Git:

-Öffne die Befehlszeile (Command Prompt) oder ein Terminal-Fenster auf deinem lokalen System.

-Navigiere zu dem Ordner, in dem du das Repository klonen möchtest. Verwende dazu den Befehl cd (Change Directory). Zum Beispiel:

cd C:\Users\Username\Documents

-Kopiere den Clone-Link des Repositories. Diesen findest du normalerweise auf der GitHub- oder GitLab-Webseite des Repositorys.

-Gib den Befehl git clone gefolgt vom Clone-Link des Repositorys ein. Zum Beispiel:

git clone https://github.com/username/repository.git

-Achte darauf, den Link deines eigenen Repositorys zu verwenden und nicht den hier gezeigten Beispiel-Link.

-Git wird das Repository nun herunterladen und in einen neuen Ordner innerhalb des aktuellen Ordners klonen. Dies kann einige Minuten dauern, je nach Größe des Repositorys und der Geschwindigkeit deiner Internetverbindung.

-Sobald der Vorgang abgeschlossen ist, solltest du eine Meldung erhalten, dass das Repository erfolgreich geklont wurde.

Mit Git Desktop:

-Lade Git Desktop von der offiziellen Website herunter und installiere es auf deinem lokalen System.

-Öffne Git Desktop und melde dich mit deinem GitHub-Account an, wenn du dazu aufgefordert wirst.

-Klicke auf den Button "Clone a repository" (Repository klonen).

-Wähle das Repository aus, das du klonen möchtest. Du kannst entweder nach dem Repository-Namen suchen oder die URL manuell eingeben.

-Wähle den Ordner aus, in dem du das Repository klonen möchtest.

-Klicke auf "Clone" (Klonen). Git Desktop wird das Repository nun herunterladen und in den ausgewählten Ordner klonen.

-Das war's! Du hast nun erfolgreich ein GitHub-Projekt geklont, einmal mit Git und einmal mit Git Desktop, und bist bereit, damit zu arbeiten.
