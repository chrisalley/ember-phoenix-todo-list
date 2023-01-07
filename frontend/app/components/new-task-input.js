import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewTaskInputComponent extends Component {
  @service store;
  @tracked task = '';

  @action
  createTodo(event) {
    event.preventDefault();
    if (this.task) {
      // this.args.onCreate(this.task);
      let newTodo = this.store.createRecord('todo', {
        task: this.task,
        completed: false,
      });
      newTodo.save();

      // Reset the task input
      this.task = '';
    }
  }
}
