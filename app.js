var config = {
    apiKey: "AIzaSyD22Dq5yyUHO9g0fPG0mI8rtILlxDcfPbk",
    authDomain: "qad-db-counter-948cb.firebaseapp.com",
    projectId: "qad-db-counter-948cb",
    storageBucket: "qad-db-counter-948cb.appspot.com",
    messagingSenderId: "415898996431",
    appId: "1:415898996431:web:30ff03edcdf5238202f1ba"
  };

  firebase.initializeApp(config);
  const db = firebase.firestore();


  db.settings({ timestampsInSnapshots: true });