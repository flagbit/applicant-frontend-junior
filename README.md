## Weather-Widget Aufgabe

Ich hoffe, FontAwesome geht nicht als Framework/Library durch, habe mich aber bewusst gegen die "mitgelieferten" Icons (`weather[0].icon`) entschieden, da es ein SVG-Icon sein soll. Außerdem sind diese nicht ganz so schön ;)  

Für die Liste der möglichen Icons habe ich mich an [https://openweathermap.org/weather-conditions](https://openweathermap.org/weather-conditions) orientiert, falls das zu Problemen führen sollte, bitte ich das zu entschuldigen, meine Absicht mit dem switch/case ist denke ich mal klar geworden, außerdem ist der Default-Case die Sonne, da kann man sich denke ich nicht beschweren :D  

Ansonsten habe ich die Darstellung minimal gehalten, soll ja auch noch simpel bleiben. Nicht optimal sind auf jeden Fall die vielen Requests, die FontAwesome neuerdings abfeuert, bis das gewünschte Icon gefunden ist. Hier könnte man natürlich auch seine eigene IconFont bereit stellen.
Entwickelt und getestet unter Windows 10, Firefox 67.0.4 auf Desktop (Widget ist nicht für mobile optimiert).

## Fragen

**How could you request data inside the browser, from another domain?**
 Via a (not always that simple) cross domain request or a websocket connection.

**What does CORS stand for?**
Cross Origin Resource Sharing, which is disabled by default.

**Please name 5 different HTTP methods and explain what they are used for.**
 - GET - used to get a resource, can deliver visible parameters via the URL
 - POST - this gets also a resource but parameters are delivered within the request body so they are not visible to everyone
 - DELETE - delets a resource, mainly used for deleting database entries
 - PUT - replaces an existing resource, mainly used for changing database entries
 -  PATCH - updates an existing resource, mainly used for updating existing database entries

**What is the difference between 'DOMContentLoaded' and 'Load' events?**
DOMContentLoaded -> DOM is ready
Load -> whole page (with 'final' content) is ready

**What is the DOM?**
Document Object Model, tree-like structure which represents the HTML elements, can be manipulated via JavaScript