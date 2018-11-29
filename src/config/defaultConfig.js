const defaultConfig = {
  // Firebase config
  firebase: {
    // apiKey: "AHKAHKSHAHKSAHKSASHASJHAJSHJSA",
    // authDomain: "yourapp.firebaseapp.com",
    // databaseURL: "https://yourapp.firebaseio.com",
    // projectId: "yourapp",
    // storageBucket: "yourapp.appspot.com",
    // messagingSenderId: "00000000000"
  },

  // Browser and application title
  title: "Firebase CMS",

  // By default database data is persisted in the browser-cache.
  // If you don't want this, set this value to `false`
  isPersistent: true,

  //
  collections: {},

  // Types that are supported out of the box.
  // These can be customized and extended using
  // your custom config.
  types: {
    // String types
    string: {
      dataType: "string",
      maxLength: 256,
      control: "textinput"
    },

    // Boolean types
    boolean: {
      dataType: "boolean",
      control: "checkbox" // switch
    },
    switch: {
      dataType: "boolean",
      control: "switch" // switch
    },
    checkbox: {
      dataType: "boolean",
      control: "checkbox" // switch
    },

    // Date/time
    timestamp: {
      dataType: "timestamp"
    },
    date: {
      dataType: "timestamp"
    },
    time: {
      dataType: "timestamp"
    },

    // Numerical types
    number: {
      dataType: "number",
      control: "textinput"
    },
    int: {
      dataType: "number"
    },
    float: {
      dataType: "number"
    },
    int64: {
      dataType: "number"
    },
    uint64: {
      dataType: "number"
    },
    int32: {
      dataType: "number"
    },
    uint32: {
      dataType: "number"
    },
    int16: {
      dataType: "number"
    },
    uint16: {
      dataType: "number"
    },
    int8: {
      dataType: "number"
    },
    uint8: {
      dataType: "number"
    }
  }
};

export default defaultConfig;
