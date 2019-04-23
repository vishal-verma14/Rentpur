import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
	   apiKey: "AIzaSyABxTdiGmtVb1nSR9aSAknLkfldhM_WCIg",
    authDomain: "rentpura.firebaseapp.com",
    databaseURL: "https://rentpura.firebaseio.com",
    projectId: "rentpura",
    storageBucket: "rentpura.appspot.com",
    messagingSenderId: "213433009415"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
