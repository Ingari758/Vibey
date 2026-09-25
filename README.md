# Discord Musik-Bot (YouTube Music + Spotify)

## Setup

1. `npm install`
2. `yt-dlp.exe` herunterladen von https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe
   und in diesen Ordner legen (neben `package.json`)
3. `.env.example` nach `.env` kopieren und ausfüllen (siehe unten)
4. Slash-Commands einmalig registrieren: `npm run deploy-commands`
5. Bot starten: `npm start`

## .env ausfüllen

- `DISCORD_TOKEN` — aus dem Discord Developer Portal, Bot-Sektion
- `DISCORD_CLIENT_ID` — die Application-ID deiner Bot-Application (Discord Developer Portal, "General Information")
- `DISCORD_GUILD_ID` — die ID deines Servers (Rechtsklick auf Server-Icon in Discord → "ID kopieren", Entwicklermodus muss an sein), damit Slash-Commands sofort erscheinen
- `YTM_COOKIE` — YouTube-Music-Cookies (siehe vorherige Anleitung)
- `SPOTIFY_CLIENT_ID` / `SPOTIFY_CLIENT_SECRET` — kostenlos erstellen auf https://developer.spotify.com/dashboard → "Create app" (Redirect URI kann irgendeine URL sein, wird nicht genutzt)

## Befehle

Sowohl als Slash-Commands (`/play`, `/stop`, `/next`, `/back`, `/queue`) als auch als Text-Befehle mit Prefix:

- `!play <url>` — YouTube-Music- **oder** Spotify-Playlist-URL
- `!stop` — stoppt und leert die Warteschlange
- `!next` / `!skip` — nächster Song
- `!back` / `!previous` — vorheriger Song
- `!queue` — zeigt die Warteschlange

## Hinweis zu privaten Voice-Channels

Der Bot funktioniert in jedem Voice-Channel eines Servers, auch privaten (über Berechtigungen eingeschränkten) Channels — solange der Bot selbst Zugriff auf den Channel hat.

**Wichtig:** Discord-Bots können **nicht** in private 1:1- oder Gruppen-Anrufe (DM-Calls) beitreten — das ist eine Einschränkung von Discord selbst. Für "private" Musik-Sessions: einen Voice-Channel auf einem Server erstellen und dessen Sichtbarkeit auf bestimmte Rollen/Personen einschränken.
