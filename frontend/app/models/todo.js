import Model, { attr } from '@ember-data/model';

export default class Todo extends Model {
  @attr task;
  @attr completed;
}
