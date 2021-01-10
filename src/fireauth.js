import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvJmbO5BaV-eTLPzkAhQLBvScaX3jcs_o",
    authDomain: "website-project-ffcf4.firebaseapp.com",
    projectId: "website-project-ffcf4",
    storageBucket: "website-project-ffcf4.appspot.com",
    messagingSenderId: "1047269026708",
    appId: "1:1047269026708:web:ade2c3cfab38858ee87d81"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;