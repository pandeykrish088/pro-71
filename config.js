import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAQcidiybq15xTftKldlUDQOiqkEdLouek",
  authDomain: "pro-firestore.firebaseapp.com",
  projectId: "pro-firestore",
  storageBucket: "pro-firestore.appspot.com",
  messagingSenderId: "326143248432",
  appId: "1:326143248432:web:c140a3720704c5fe5885f5"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

