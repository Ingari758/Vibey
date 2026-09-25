# Vibey
A discord music bot
# Pushschutz

Sichern Sie Ihre Geheimnisse, indem Sie sie daran hindern, Ihr Repository mit Pushschutz zu erreichen.

## Was ist Pushschutz?

Der Pushschutz ist eine Funktion, die verhindert, dass hartcodierte Anmeldeinformationen, wie etwa Geheimnisse oder Tokens, jemals in Ihr Repository gelangen. Anstatt Sie nach der Tatsache auf Lecks von Anmeldeinformationen aufmerksam zu machen, blockiert der Push-Schutz Pushes, die Geheimnisse enthalten, *bevor* sie Ihr Repository erreichen.

## Funktionsweise des Pushschutzes

Der Pushschutz blockiert Geheimnisse, die in Folgendem erkannt wurden:

* Pushes über die Kommandozeile
* Commits, die in der GitHub-Benutzeroberfläche vorgenommen wurden
* Dateiuploads in ein Repository auf GitHub
* Anforderungen an die REST-API
* Interaktionen mit dem GitHub MCP-Server (nur öffentliche Repositorys)

Wenn der Pushschutz während eines Push-Versuchs ein potenzielles Geheimnis erkennt, wird der Push blockiert, und eine detaillierte Meldung wird bereitgestellt, in der der Grund für die Blockierung erklärt wird. Sie müssen den betreffenden Code überprüfen, alle vertraulichen Informationen entfernen und den Push wiederholen.

## Typen des Pushschutzes

Es gibt zwei Arten von Schutz vor Push-Benachrichtigungen:

* [Pushschutz für Repositorys](#push-protection-for-repositories)
* [Pushschutz für Benutzer](#push-protection-for-users)

### Pushschutz für Repositories

Sie können den Pushschutz für Repositories auf der Repository-, Organisations- oder Unternehmensebene aktivieren. Diese Form des Push-Schutzes:

* Muss GitHub Secret Protection aktiviert sein
* Ist standardmäßig deaktiviert und kann von einem Repositoryadministrator, Organisationsbesitzer, Sicherheits-Manager oder Unternehmensbesitzer aktiviert werden.
* Blockiert Pushes, die geheime Informationen enthalten, daran, bestimmte geschützte Repositorys zu erreichen.
* Generiert Warnungen für Umgehungen des Push-Schutzes auf der **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-label="shield" role="img"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security and quality** Registerkarte der Repositorys, der Organisation und des Unternehmens.

> \[!TIP]
> Unabhängig vom Aktivierungsstatus des Pushschutzes können Organisationen auf GitHub Team und GitHub Enterprise einen kostenlosen Bericht ausführen, um ihren Code auf geheime Informationen zu überprüfen. Der Bericht zeigt auch, wie viele geheime Lecks durch Pushschutz verhindert werden könnten. Siehe [Geheime Sicherheit mit GitHub](/de/code-security/concepts/secret-security/secret-security-with-github#secret-risk-assessment).

### Pushschutz für Benutzer

Push-Benutzerschutz ist nur auf GitHub.com verfügbar und spezifisch für Ihr GitHub-Konto. Diese Form des Push-Schutzes:

* Ist standardmäßig aktiviert
* Verhindert, dass Sie Geheimnisse in öffentliche Repositorys pushen. GitHub
* Generiert keine Warnungen, wenn Sie den Pushschutz umgehen, es sei denn, der Pushschutz ist auch auf Repositoryebene aktiviert.

## Umgehungen des Push-Schutzes und Warnungen

Für den Pushschutz von Repositorien kann standardmäßig jeder, der Schreibzugriff hat, den Pushschutz umgehen, indem er einen Umgehungsgrund angibt. Wenn ein Mitwirkender einen Pushschutzblock umgeht,:GitHub

* Erstellt eine Warnung auf der **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-shield" aria-label="shield" role="img"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> Security and quality** Registerkarte des Repositorys, der Organisation und des Unternehmens.
* Fügt das Umgehungsereignis zum Überwachungsprotokoll hinzu.
* Sendet eine E-Mail-Benachrichtigung an persönliche Konto-, Organisations- und Unternehmensbesitzer, Sicherheitsmanager und Repositoryadministratoren, die das Repository beobachten, mit einem Link zum geheimen Schlüssel und dem Grund, warum es zulässig war

Diese Tabelle zeigt das Verhalten von Warnungen für jeden Umgehungsgrund, den ein Benutzer angeben kann.

| Grund der Umgehung                                                                       | Warnungsverhalten |
| ---------------------------------------------------------------------------------------- | ----------------- |
| Wird in Tests verwendet.                                                                 |                   |
| GitHub erstellt einen geschlossenen Alarm, der als "bei Tests verwendet" aufgelöst wird. |                   |
| Ist ein falsch positives Ergebnis.                                                       |                   |
| GitHub erstellt eine geschlossene Warnung, aufgelöst als "falsch positiv"                |                   |
| Wird später behoben.                                                                     |                   |
| GitHub erstellt eine geöffnete Benachrichtigung                                          |                   |

Wenn Sie eine bessere Kontrolle darüber haben möchten, welche Mitwirkenden den Push-Schutz umgehen können und welche Push-Vorgänge mit Geheimnissen zugelassen werden sollen, können Sie delegierte Umgehung für den Push-Schutz konfigurieren. Mit delegierter Umgehung können Sie Akteuren folgendes gewähren:

* **Umgehungsrechte**, die es ihnen ermöglichen, den Pushschutz selbst zu umgehen und Umgehungsanfragen von anderen Mitwirkenden zu überprüfen und zu genehmigen.
* **Ausnahme vom Pushschutz**, sodass sie Commits pushen können, ohne den Pushschutz auszulösen.

## Vorteile des Pushschutzes

* **Präventive Sicherheit:** Pushschutz fungiert als Frontline-Abwehrmechanismus, indem Code nach hartcodierten Geheimschlüsseln zum Zeitpunkt des Pushs gescannt wird. Dieser präventive Ansatz trägt dazu bei, Anmeldeinformationslecks zu verhindern, bevor sie im Verlauf des Repositorys verankert werden, wodurch es einfacher wird, Bedrohungen zu erkennen und zu beheben.
* **Sofortiges Feedback**: Entwickler erhalten sofortiges Feedback, wenn während eines Push-Versuchs ein potenzieller geheimer Schlüssel erkannt wird. Diese sofortige Benachrichtigung ermöglicht eine schnelle Behebung und verringert die Wahrscheinlichkeit, dass vertrauliche Informationen verfügbar gemacht werden.
* **Reduziertes Risiko von Anmeldeinformationenlecks:** Durch das Blockieren von Commits, die hartcodierte Anmeldeinformationen enthalten, reduziert der Pushschutz das Risiko versehentlicher Anmeldeinformationenlecks und geheimer Sprawl erheblich. Dies hilft beim Schutz vor potenziellen Verstößen und der Aufrechterhaltung der Integrität der Codebasis.
* **Effizientes Management von geheimen Schlüsseln:** Anstatt retrospektiv mit offengelegten geheimen Schlüsseln umzugehen, können Entwickler Probleme an der Quelle angehen. Dies macht die Verwaltung geheimer Schlüssel effizienter und weniger zeitaufwendig.
* **Umgehungsfunktion für Flexibilität:** Für Fälle, in denen falsch positive Ergebnisse auftreten oder bestimmte Muster erforderlich sind, können Sie den Pushschutz für Benutzer umgehen. Bestimmte Benutzer können zudem die delegierte Umgehungsfunktion verwenden, um den Pushschutz für Repositories zu umgehen.
  Darüber hinaus können Sie vertrauenswürdige Akteure vom Pushschutz vollständig ausschließen.
  Dies bietet Flexibilität, ohne die Gesamtsicherheit zu beeinträchtigen.
* **Möglichkeit zum Erkennen von benutzerdefinierten Mustern (für Repositorys in Organisationen):** Organisationen können benutzerdefinierte Muster zum Erkennen von geheimen Schlüsseln definieren, die für ihre Umgebung eindeutig sind. Durch diese Anpassung wird sichergestellt, dass der Pushschutz sogar nicht standardmäßige geheime Schlüssel effektiv identifizieren und blockieren kann.

## Anpassung

Nachdem Sie den Pushschutz für Repositorys aktiviert haben, können Sie ihn wie folgt anpassen:

* Definieren von benutzerdefinierten Mustern zum Blockieren von Pushs mit eindeutigen geheimen Mustern
* Zuweisen von Mitwirkenden, die den Pushschutz umgehen können und Umgehungsanforderungen für andere Mitwirkende genehmigen, oder die vollständig vom Pushschutz ausgenommen sind
* Konfigurieren, welche geheimen Muster im Pushschutz auf Unternehmens- oder Organisationsebene enthalten sind
  
