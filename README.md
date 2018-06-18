# Zendesk Coding Challenge

## Installation
1. Clone the repo to your local machine
2. cd into the `/react` folder, run either `yarn install` or `npm install`
3. cd into the `/server` folder and, as above run either `yarn install` or `npm install`
4. To start the server, in the terminal, run `node server.js` from the `/server` directory. You should see a console message saying that the server is running on `localhost:7000`
5. From the `/react` directory run either `yarn start` or `npm start`. This should start the react dev server on an available port (most likely `localhost:3000`)
6. In the browser of your choice (even if it's IE) navigate to `http://localhost:3000/`
7. Enjoy some tickets.

#### Requirements
- Node
- Git

#### Running Tests

To test the React code, cd into the `/react` directory, and run either `yarn test` or `npm test`

---

## Challenge Brief

#### Zendesk Ticket Viewer

Zendesk is a customer service tool that allows the creation and management of support tickets.
Your company needs you to build a Ticket Viewer that will:
- Connect to the Zendesk API
- Request all the tickets for your account
- Display them in a list
- Display individual ticket details
- Page through tickets when more than 25 are returned
Non-functional requirements:
- Include a README with installation and usage instructions
- The UI can be browser-based or CLI (see example output below)
- The amount of data you display in the ticket list view and the single ticket view is up to
you
- How you format and display the ticket data is up to you, just ensure it is easy to read
- The Ticket Viewer should handle the API being unavailable
- We need to see you write at least a few happy path tests


#### Criteria for Assessment:
1. Meets requirements:
>  - No extra features are added.
>  - All required features have been attempted.
2. Displays some knowledge of application design:
>  - Separation of concerns.
>  - Simplicity.
3. Handles basic errors:
>  - Displays a friendly error message if the API is unavailable or the response is invalid.
>  - Tells the user something is wrong if there is a program error.
4. Includes tests.

5. UI is easy to use and displays ticket results clearly.

6. Code demonstrates:
>  - Consistency.
>  - Adherence to common standards.

#### Getting Started

- Sign up for a free trial with Zendesk: https://zendesk.com/. You’ll need to pick an account
name. Take note of this, you’ll need it later.
- Take a look at the Zendesk Ticket API Documentation:
https://developer.zendesk.com/rest_api/docs. You’ll find instructions on how to connect
to the API and make requests for tickets.
- We have also sent you a script you can run to populate your account with some data to
use for testing.

#### Gotchas:
- Do Not Use ​Javascript in the browser (running on Node is fine). You won’t be able to
successfully complete a GET request as we prevent cross-domain requests.
- Remember that even though the response comes back as JSON format it is still just a
string and needs to be parsed to be of any use to you.
- Use basic authentication, see
https://developer.zendesk.com/rest_api/docs/core/introduction#basic-authentication

