import { observable } from "mobx";

const SortOrder = {
  ASCENDING: "asc",
  DESCENDING: "desc"
};

class CollectionQueryRule {
  constructor(field) {
    this._field = field;
    this._filter = observable.box(undefined);
    this._sortOrder = observable.box(SortOrder.ASCENDING);
    this._filterTo = observable.box(undefined);
  }

  get id() {
    return this._field.id;
  }

  get field() {
    return this._field;
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
