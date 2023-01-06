import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:4000';
  namespace = 'api/v1';

  buildURL(...args) {
    return `${super.buildURL(...args)}`;
  }
}
