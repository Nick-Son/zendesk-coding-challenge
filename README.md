# Zendesk Coding Challenge
A Node server, serving ticket data from the Zendesk API, serving it to a React front end.

## Installation & Usage

#### Requirements
- Node
- Git

### Step 1: Setting up the project locally

1. Clone the repo to your local machine, or, alternatively, download the project as a zip file and extract it to your local machine.
2. From the root of the project, cd into the `/react` folder, run either `yarn install` or `npm install`
3. From the root of the project, cd into the `/server` folder and, as above run either `yarn install` or `npm install`

### Step 2: Starting the backend server
4. To start the server, in the terminal, run `node server.js` from the `/server` directory. You should see a console message saying that the server is running on `localhost:7000`

### Step 3: Start the Front end server
5. From the `/react` directory run either `yarn start` or `npm start`. This should start the react dev server on an available port (most likely `localhost:3000`)

### Step 4: Starting the app
6. In the browser of your choice (even if it's IE) navigate to `http://localhost:3000/`
7. Enjoy some tickets.

## Usage
After navigating to localhost:3000 (or whatever port is used), the app will send a GET request to the backend, sending a GET request to the API, retrieving and sending back ticket data. This data will be populated in a Ticket List, in acsending order, based on ID. 

Clicking a ticket will display additional information in a modal. To close the modal, the user can use the close button, click the background or press the escape key.

The tickets are paginated, showing 25 tickets per page, with a pagination bar at both the top and bottom of the Ticket List.

#### Running Tests

To run the tests for the React code, cd into the `/react` directory, and run either `yarn test` or `npm test`

## Code/App Design

#### Back End (Node + Express)
The basic idead was to have a backend that would request the data from the Zendesk API, then send it to a React front end. This was necessary as cross-domain requests are prevented. The HTTP client I decided to use was Axios which can work on both client and server. It also, by default, parses JSON data.

#### Front End (React)
I chose to build a simple front end with React. As the app is, at this stage, quite simple, I didn't feel the need to use Redux for state management, but is something I would definitely add in the future, if the app was to grow. This is also my reasoning for using default CSS instead of something more scalable like scss or sass. I decided to use a modal to show extra details of a chosen ticket to again, keep the project simple, removing the possible need to use react-router. Also, as it was just to display extra data, and not perform extra actions (eg. creating/editing tickets) I thought a modal would suffice, while also, allowing a user to view multiple tickets in succession with ease. 

### Future development
- Making the app mobile responsive.
- Finish styling the app.
- Adding Redux to make it more scalable for future features.
- Adding scss to the app, converting and seperating the existing css.
- Reworking the pagination code to limit the visible page tabs if the needed amount pages required exceed a given amount, adding 'next' and 'previous' buttons. 
- Improve error handling. Also improve error messages/component.
- Add greater detail to the documentation.
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

