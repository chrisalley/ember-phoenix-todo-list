# Ember Phoenix Todo List

A todo list example app built using Ember.js and Phoenix.

## Prerequisties:

- Git
- Node.js
- Elixir
- Postgres
- Chrome/Chromium

## Setup Instructions

1. Clone the repo and change into the directory:

   `git clone git@github.com:chrisalley/ember-phoenix-todo-list.git`

   `cd ember-phoenix-todo-list`

2. Install backend dependencies:

   `cd backend`

   `mix deps.get`

3. Create the database:

   `mix ecto.create`

   `mix ecto.migrate`

4. Start the backend:

   `mix phx.server`

5. Confirm that the Phoenix app is running at `http://localhost:4000`

6. Install frontend dependencies:

   `npm install -g ember-cli`

   `cd frontend`

   `npm install`

7. Start the frontend:

   `npm start`

8. Confirm that the Ember app is running at `http://localhost:4200`

## Running End-to-End Tests

1. Ensure that both the frontend and backend are running at their respective
   URLs: `http://localhost:4200` and `http://localhost:4000`:

2. Change into e2e directory and install dependencies if required:

   `cd e2e`

   `npm install`

3. Launch Cypress:

   `npm run cypress:open`

4. In the Cypress GUI:

   - Click on "E2E Testing"
   - Click on "Chrome" (or "Chromium")
   - Click on "Start E2E Testing in Chrome"
   - Click on the particular `.cy.js` file that you wish to run.
