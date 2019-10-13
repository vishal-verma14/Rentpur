import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
	  "Enter Your credentials"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
