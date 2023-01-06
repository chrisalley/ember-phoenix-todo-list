defmodule BackendWeb.Api.V1.TodoView do
  use BackendWeb, :view

  def render("index.json", %{todos: todos}) do
    %{data: render_many(todos, __MODULE__, "todo.json")}
  end

  def render("todo.json", %{todo: todo}) do
    %{id: todo.id, task: todo.task, completed: todo.completed}
  end
end
