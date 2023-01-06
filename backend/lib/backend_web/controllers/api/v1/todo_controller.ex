defmodule BackendWeb.Api.V1.TodoController do
  use BackendWeb, :controller
  alias Backend.Repo
  alias Backend.Todo

  def index(conn, _params) do
    todos = Repo.all(Todo)
    render(conn, "index.json", todos: todos)
  end
end
