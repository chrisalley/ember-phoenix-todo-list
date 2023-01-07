defmodule Backend.Todos do
  import Ecto.Query, warn: false
  alias Backend.Repo

  alias Backend.Todos.Todo

  def list_todos do
    Repo.all(Todo)
  end

  def create_todo(attrs \\ %{}) do
    %Todo{}
    |> Todo.changeset(attrs)
    |> Repo.insert()
  end
end
