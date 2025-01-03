---
id: cs16-becomeadmin
title: "CS 1.6: Admin auf dem eigenen Server werden"
description: Informationen, wie du Admin auf deinem CS 1.6-Server von ZAP-Hosting wirst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

## Konfigurations
Das Hinzufügen eines Admins erfolgt über die **users.ini** Config. Damit du überhaupt Admin werden kannst und diese Dateien findest, musst du vorher **AMXmodX** und **Metamod** installieren. Falls du dies noch nicht getan hast, dann lohnt es sich einen Blick in die folgende Anleitung zu werfen: [Plugins installieren](cs16-plugins.md)

Damit die **users.ini** Konfigurationsdatei bearbeitet werden kann, muss eine Verbindung per FTP zum Server hergestellt werden. Dort navigieren wir in das ``/gXXXXXX/cs16/cstrike/addons/amxmodx/configs`` Verzeichnis. Als Nächstes öffnen wir die Config mit einem Text-Editor und bearbeiten diese.

```
...
; Examples of admin accounts:
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "My Name" "my_password" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

In der Config wird nun der Eintrag ``"loopback" "" "abcdefghijklmnopqrstu" "de"`` angepasst. Damals wurde die Authentifizierung lediglich per Name und Passwort gemacht. Heutzutage wird das nur noch über die SteamID64 gemacht. Deine SteamID64 kannst du ausfindig machen, indem du zunächst dein Steam Profil aufrufst und dort dann an einer beliebigen Stelle einen Rechtsklick machst. Dort klickst du dann auf **Steam URL kopieren**. 

Im Anschluss rufst du dann eine der folgenden Seiten auf:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/EFHQSqf72bDjRrp/preview)

Dadurch erhältst du dort sowohl allgemeine Informationen als auch die Steam ID von deinem Account. In dem Fall wird nur die SteamID64 benötigt. Den vorhandenen Eintrag passen wir dann wie folgt an: 

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

Die Zeile beinhaltet folgende Informationen:

1. Name/SteamID - Eindeutige ID des Spielers
2. Passwort - Keins vorhanden wenn Steam Authentifizierung
3. Berechtigungslevel 
4. Verbindungsflags - Die Flags steuern, wie AMX Mod X versucht, einen verbindenden Admin zu autorisieren.

In dem Fall wird kein Passwort benötigt, da es sich um eine Authentifizierung über Steam handelt. Deshalb wird auch statt ``de`` dann ``ce`` eingetragen. Im Folgenden findest du eine Übersicht von allen Berechtigungslevel und Verbindungsflags:



**Berechtigungslevel**

| Berechtigungslevel | Funktion                                                     |
| ------------------ | ------------------------------------------------------------ |
| a                  | Immunität (kann nicht gekickt/gebannt/geschlagen/geschlagen und von anderen Befehlen beeinflusst werden) |
| b                  | Reservierung (kann an reservierten Plätzen teilnehmen)       |
| c                  | Zugriff auf den amx_kick Befehl                              |
| d                  | Zugriff auf den amx_ban und amx_unban Befehl                 |
| e                  | Zugriff auf den amx_slay und amx_slap Befehl                 |
| f                  | Zugriff auf den amx_map Befehl                               |
| g                  | Zugriff auf den amx_cvar-Befehl (nicht alle cvars werden verfügbar sein) |
| h                  | Zugriff auf den amx_cfg Befehl                               |
| i                  | Zugriff auf den amx_chat und andere Chat-Befehle             |
| j                  | Zugriff auf den amx_vote und andere Vote-Befehle             |
| k                  | Zugriff auf sv_password cvar (mit dem Befehl amx_cvar)       |
| l                  | Zugriff auf amx_rcon Befehl und rcon_password cvar (durch amx_cvar Befehl) |
| m                  | Benutzerdefinierte Berechtigung A (für zusätzliche Plugins)  |
| n                  | Benutzerdefinierte Berechtigung B (für zusätzliche Plugins)  |
| o                  | Benutzerdefinierte Berechtigung C (für zusätzliche Plugins)  |
| p                  | Benutzerdefinierte Berechtigung D (für zusätzliche Plugins)  |
| q                  | Benutzerdefinierte Berechtigung E (für zusätzliche Plugins)  |
| r                  | Benutzerdefinierte Berechtigung F (für zusätzliche Plugins)  |
| s                  | Benutzerdefinierte Berechtigung G (für zusätzliche Plugins)  |
| t                  | Benutzerdefinierte Berechtigung H (für zusätzliche Plugins)  |
| u                  | Zugangs-Menü                                                 |
| z                  | Spieler (keine Administrator-Berechtigungen)                 |



**Verbindungsflags** 

| Flag | Beschreibung                                                 |
| ---- | ------------------------------------------------------------ |
| a    | Spieler bei ungültigem Passwort trennen                      |
| b    | Clan Tag                                                     |
| c    | SteamID                                                      |
| d    | IP                                                           |
| e    | Passwort wird nicht geprüft (nur Name/Ip/Steamid erforderlich) |


## Abschluss

Glückwunsch, du hast erfolgreich die Administratorberechtigungen konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂