import React from "react";
import { transaction } from "mobx";
import { Provider } from "mobx-react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import CollectionView from "./collection/CollectionView";
import DocumentMeta from "react-document-meta";

function withStoreRouter(WrappedComponent, store, key) {
  return props => {
    const { userId, collectionId } = props.match.params; // eslint-disable-line
    transaction(() => {
      // store.userId = userId || store.auth.userId;
      const { schema } = store.selectedCollection;
      if (!schema || schema.id !== collectionId) {
        store.selectedCollection.config = store.config.collections.find(
          col => col.id === collectionId
        );
      }
      /* if (activityIdOrDate) {
				if (activityIdOrDate.split('-').length === 3) {
					store.selectedDate = new Date(activityIdOrDate);
					store.selectedActivity.id = undefined;
				} else {
					store.selectedActivity.id = activityIdOrDate;
					store.selectedDate = undefined;
				}
			}*/
    });
    return (
      <DocumentMeta
        title={
          store.config.title + " - " + store.selectedCollection.config.name
        }
      >
        <WrappedComponent key={key} {...props} />
      </DocumentMeta>
    );
  };
}

export default ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <Sidebar />
        <div style={{ flex: 1, display: "flex" }}>
          <Route
            path="/col/:collectionId"
            component={withStoreRouter(CollectionView, store)}
          />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);
