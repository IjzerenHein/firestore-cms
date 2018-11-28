import { inject, observer } from "mobx-react";

function storeObserver(WrappedComponent) {
  return inject("store")(observer(WrappedComponent));
}

export default storeObserver;
