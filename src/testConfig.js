// Describe document
const todo = {
  fields: {
    text: {
      type: "string",
      name: "Text",
      description: "Todo text"
    },
    isFinished: {
      type: "boolean",
      name: "Finished",
      description: "Check to mark the todo as finished"
    }
  }
};

// Describe collection
const todos = {
  path: "todos",
  name: "Todos",
  icon: "tick",
  document: todo,
  columns: ["id", "text", "isFinished"]
};

const collections = {
  todos: todos,
  todos2: {
    ...todos,
    path: "todos2",
    name: "Todos2"
  }
};

// Describe full config
const config = {
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

export default config;
