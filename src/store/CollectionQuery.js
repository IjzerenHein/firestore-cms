import { observable, runInAction } from "mobx";
import CollectionQueryRule from "./CollectionQueryRule";

class CollectionQuery {
  constructor(config) {
    this._config = config;
    this._rules = observable.array([]);
    this._limit = observable.box(20);
    this._rulesVisible = observable.box(false);
  }

  get config() {
    return this._config;
  }

  addRule(column, options) {
    return runInAction(() => {
      const rule = new CollectionQueryRule(column, options);
      this._rules.push(rule);
      return rule;
    });
  }

  deleteRule(rule) {
    runInAction(() => this._rules.splice(this._rules.indexOf(rule), 1));
  }

  get rules() {
    return this._rules;
  }

  get rulesVisible() {
    return this._rulesVisible.get();
  }

  set rulesVisible(val) {
    this._rulesVisible.set(val);
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
    const { rules, limit } = this;
    rules.forEach(({ field, sortOrder, filter, filterTo }) => {
      if (!field) return;
      if (filter !== undefined && filterTo !== undefined) {
        // range filter and auto sort
        // TODO
      } else {
        // regular sort & filter
        if (filter !== undefined) {
          ref = ref.where(field.id, sortOrder === "desc" ? "<=" : ">=", filter);
        }
        if (sortOrder !== undefined) {
          ref = ref.orderBy(field.id, sortOrder);
        }
      }
    });
    if (limit) {
      ref = ref.limit(limit);
    }
    return ref;
  }
}

export default CollectionQuery;
