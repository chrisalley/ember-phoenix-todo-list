defmodule BackendWeb.Api.V1.TodoView do
  use BackendWeb, :view

  def render("index.json", %{todos: todos}) do
    %{data: render_many(todos, __MODULE__, "todo.json")}
  end

  def render("show.json", %{todo: todo}) do
    %{data: render_one(todo, __MODULE__, "todo.json")}
  end

  def render("todo.json", %{todo: todo}) do
    %{
      type: "todos",
      id: todo.id,
      attributes: %{ task: todo.task, completed: todo.completed }
    }
  end
end
