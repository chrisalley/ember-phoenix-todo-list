defmodule Backend.Todos do
  import Ecto.Query, warn: false
  alias Backend.Repo

  alias Backend.Todos.Todo

  def list_todos do
    Repo.all(Todo)
  end

  def get_todo!(id), do: Repo.get!(Todo, id)

  def create_todo(attrs \\ %{}) do
    %Todo{}
    |> Todo.changeset(attrs)
    |> Repo.insert()
  end

  def update_todo(%Todo{} = todo, attrs) do
    todo
    |> Todo.changeset(attrs)
    |> Repo.update()
  end
end
