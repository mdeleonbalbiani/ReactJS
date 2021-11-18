import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyASt8SGZXfCsKTrv5qy3_nUT-8s6awmuAc",
        authDomain: "react-coderhouse-martinadeleon.firebaseapp.com",
        projectId: "react-coderhouse-martinadeleon",
        storageBucket: "react-coderhouse-martinadeleon.appspot.com",
        messagingSenderId: "758512997632",
        appId: "1:758512997632:web:415d4cd3f2ea82cb53cfe5",
        measurementId: "G-ZLL7MXP4TT"
      }
);
export function getFirebase() {
    return app;
  }
  export function getFirestore() {
    return firebase.firestore(app);
  }
  