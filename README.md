# Ember Phoenix Todo List

A todo list example app built using Ember.js and Phoenix.

## Prerequisties:

- Git
- Postgres
- Node.js
- Elixir

## Setup Instructions

1. Clone the repo and change into the directory:

   `git clone git@github.com:chrisalley/ember-phoenix-todo-list.git`

   `cd ember-phoenix-todo-list`

2. Install backend dependencies:

   `cd backend`

   `mix deps.get`

3. Create the database:

   `mix ecto.create`

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
