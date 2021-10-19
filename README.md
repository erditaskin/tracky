## Tracky

This app is made for fulfilling requirements of given task.

## Features

1. It's based on firebase authentication and realtime database.
2. It uses redux and redux thunk to manage state.
3. Timeline and auth states are persisted with redux-persist in localstorage.
4. Project is configured to run up on docker as well
5. Project uses Material UI components for various UI elements.
6. What project offers is a simple body measurement tracking system which you can add/edit/delete various of data and it shows those data as a timeline tree.

## Firebase Conf

To configure firebase;
1. Pushed .env file to make it work easily with my current firebase configs

## Proceed to app

1. Register new account (/register) (You can use dummy email addresses to create new account) or login (/login) if you already created one
2. Click "My Tracky Dashboard" (/dashboard) from top navbar.
3. Here you can list/add/edit/delete your measurement history within the timeline items.

## Running

- Clone the app
- `cd project_folder`
- `npm install`, `npm start` or `docker-compose up`
- It will run up @http://localhost:3000
