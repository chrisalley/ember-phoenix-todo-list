import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoComponent extends Component {
  @service store;

  @action
  toggleTodo(event) {
    event.preventDefault();
    const checked = event.target.checked;
    if (checked !== this.args.todo.completed) {
      this.store.findRecord('todo', this.args.todo.id).then(function (todo) {
        todo.completed = checked;
        todo.save();
      });
    }
  }

  @action
  deleteTodo(event) {
    event.preventDefault();
    const todo = this.store.peekRecord('todo', this.args.todo.id);
    todo.destroyRecord();
  }
}
