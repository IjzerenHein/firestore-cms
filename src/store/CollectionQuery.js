import { observable, runInAction } from "mobx";
import CollectionQueryRule from "./CollectionQueryRule";

class CollectionQuery {
  constructor(config) {
    this._config = config;
    this._rules = observable.array([]);
    this._limit = observable.box(20);
    this.addRuleForField("id");
  }

  get config() {
    return this._config;
  }

  addRuleForField(fieldId) {
    runInAction(() =>
      this._rules.push(
        new CollectionQueryRule(this.config.document.fields[fieldId])
      )
    );
  }

  deleteRule(rule) {
    runInAction(() => this._rules.splice(this._rules.indexOf(rule), 1));
  }

  get rules() {
    return this._rules;
  }

  get availableFieldsForRules() {}

  // pagination

  get limit() {
    return this._limit.get();
  }
  set limit(val) {
    this._limit.set(val);
  }

  eval(ref) {
    const { limit } = this;
    if (limit) {
      ref = ref.limit(limit);
    }
    return ref;
  }
}

export default CollectionQuery;
