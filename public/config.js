// Describe document
const myDoc = {
  fields: {
    text: {
      type: "string",
      name: "Text",
      description: "Todo text"
    },
    bool: {
      type: "boolean",
      name: "Boolean",
      description: "Boolean value"
    }
  }
};

// Describe collection
const myCollection = {
  path: "mydocs",
  name: "My Docs",
  icon: "tick",
  document: myDoc,
  columns: ["id", "text", "bool"]
};

const collections = {
  myCollection: myCollection
};

// Describe full config
window.firestoreCMSConfig = {
  title: "Firestore CMS",
  firebase: {
    apiKey: "AIzaSyBiY-6xQrji8oe5E90d1P8J8OvfIo3F6kE",
    authDomain: "firestore-mobx-todo.firebaseapp.com",
    databaseURL: "https://firestore-mobx-todo.firebaseio.com",
    projectId: "firestore-mobx-todo",
    storageBucket: "firestore-mobx-todo.appspot.com",
    messagingSenderId: "680642766706"
  },
  isPersistent: true,
  collections: collections
};
