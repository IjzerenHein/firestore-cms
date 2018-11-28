import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import 'firebase/storage';
import { initFirestorter } from "firestorter";
import Store from "./Store";
import Config from "../config/Config";

async function initFirebaseAndStore(config) {
  // Parse config
  config = new Config(config);

  // Initialize firebase app
  const app = firebase.initializeApp(config.firebase);

  // Initialize firestore & persistency
  const firestore = app.firestore();
  firestore.settings({ timestampsInSnapshots: true });
  if (config.isPersistent) {
    try {
      await firebase.firestore().enablePersistence();
    } catch (err) {
      console.error("Failed to enable firebase persistency: ", err.message);
    }
  }

  // Initialize firestorter
  await initFirestorter({
    firebase: firebase
  });

  // Create observable mobx store
  const store = new Store({
    config: config
  });

  return store;
}

export default initFirebaseAndStore;
