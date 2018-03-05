# SimpleChatApp

## Setup

[Install VSCode](https://www.google.com)

[Install nodejs](https://nodejs.org/en/download/)

Install ['Allow-Control-Allow-Origin: *'-extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)
(We need to allow cross origin requests to be able to reach the chat server)

Dont forget to disable it after this tutorial!

Install angular cli:

`$ npm install -g @angular/cli`

Set ip address to the chat server in: [environment.ts](./src/environments/environment.ts)

Go to root folder:

`$ cd simpleChatApp`

Install dependencies:

`$ npm i`

Start serving the web app and open it in a tab:

`$ ng serve --open`

## Workshop

### Components

In this tutorial, were going to GET and POST messages to a simple chat server.

In the `app/src/app-component.html` there is a preconfigured router with a single `welcome` route.
Now lets create two new views, one for messages and one for settings. This can be done using the angular cli likeso:

`$ ng generate component <name>`

You can prepend a path to the name if you want to place your component in a specific folder.

Next:
- Find the router component and map your generated components to a route
- Create links to the routes in the root component. 

### Services

Now lets create a service for handling messages to and from the chat server. The angular cli can provide us with a template for that, too:

`$ ng generate service message --module=app`

The `module=app` param creates a shared instance of the service and provides it to the angular injection system.

Next:
- Try to fetch messages from the chat server using the [HttpClient](https://angular.io/guide/http) 
- Try to display each message using [NgForOf directive](https://angular.io/api/common/NgForOf)

### Data binding & Component Interaction

In the message view, create a message `<input>` and a `<button>` and try to trigger a `POST` to the api when the user clicks. There are [multiple ways](https://angular.io/guide/template-syntax) to bind and reference the value from the input field.

### Extra:

- Create a input field for settings username.
- Read up on [Pipes](https://angular.io/guide/pipes) and play around with them. Try to display the messages via an `async` pipe in the template.
