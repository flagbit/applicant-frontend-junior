# Junior Frontend Developer

## Task

Write a simple "widget" that uses JavaScript to request data from an external
weather API, and visualize it inside the Browser.

For ease of use, we suggest to use this public API, as it doesn't need an app
registration (no key needed):

[Weather API](https://fcc-weather-api.glitch.me/)

...but if you want to use anything else, please feel free to do so! :)

But please do **NOT** use a framework or library for the implementation of any
part of this task!

### FYI:

Of course we are using frameworks and libraries here at flagbit... many of them.
But this task is about getting to know **YOU**, how you are coding and what your
personal opinion or solution for specific technical questions/problems is.

### Requirements

1. Get the location of the user
2. Get the weather data for the location of the user
3. Write a "widget" that is showing the following information
   - Weather Location
   - current temperature
   - current cloudiness with an svg-icon representing this information (sun, sun & clouds, rain and so on)
   - current wind

You don't have to take too much care about cross-browser testing. If its working in
the latest versions of chrome and firefox everything is fine :)

## Questions

- How could you request data inside the browser, from another domain?

  - In this example the JavaScript `fetch()` method was used to access the given weather API, which provides the data visualized inside the browser. An API enables one piece of software to interact with another within a set of rules.

- What does CORS stand for?

  - CORS stands for Cross-Origin Resource Sharing. It enables web applications running at one origin to access certain resources from another origin.

- Please name 5 different HTTP methods and explain what they are used for.

  - GET - retrieves data from a specified resource
  - POST - submits data to the resource
  - PUT - updates / modifies the resource by replacing it
  - PATCH - updates / modifies a part of the resource
  - DELETE - deletes the resource specified

- What is the difference between 'DOMContentLoaded' and 'Load' events?

  - The DOMContentLoaded event is triggered when the loading of the document is completed (not including images & stylesheets for example). Load events wait until the page is completely loaded.

- What is the DOM?
  - DOM stands for Document Object Model and is a representation of the structure of a document as a logical tree. It allows scripts / programming languages to access the objects contained in each node of the tree's branches.
