defmodule BackendWeb.Api.V1.TodoController do
  use BackendWeb, :controller
  alias Backend.Todos
  alias Backend.Todos.Todo

  def index(conn, _params) do
    todos = Todos.list_todos()
    render(conn, "index.json", todos: todos)
  end

  def create(conn, params) do
    todo_attributes = params["data"]["attributes"]
    with {:ok, %Todo{} = todo} <- Todos.create_todo(todo_attributes) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.api_v1_todo_path(conn, :show, todo))
      |> render("show.json", todo: todo)
    end
  end
end
