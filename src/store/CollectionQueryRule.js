import { observable } from "mobx";

/* const SortOrder = {
  ASCENDING: "asc",
  DESCENDING: "desc"
};*/

class CollectionQueryRule {
  constructor(field, { sortOrder, filter, filterTo } = {}) {
    this._field = observable.box(field);
    this._sortOrder = observable.box(sortOrder);
    this._filter = observable.box(filter);
    this._filterTo = observable.box(filterTo);
  }

  get field() {
    return this._field.get();
  }
  set field(val) {
    this._field.set(val);
  }

  get filter() {
    return this._filter.get();
  }
  set filter(val) {
    this._filter.set(val);
  }

  get filterTo() {
    return this._filterTo.get();
  }
  set filterTo(val) {
    this._filterTo.set(val);
  }

  get sortOrder() {
    return this._sortOrder.get();
  }
  set sortOrder(val) {
    return this._sortOrder.set(val);
  }
}

export default CollectionQueryRule;
