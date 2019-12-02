import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCONfM_gmDYYLN0fZH8y3i2zLQItByLLU4",
    authDomain: "final-project-redi-school.firebaseapp.com",
    databaseURL: "https://final-project-redi-school.firebaseio.com",
    projectId: "final-project-redi-school",
    storageBucket: "final-project-redi-school.appspot.com",
    messagingSenderId: "1048583761373",
    appId: "1:1048583761373:web:8fdcf279e066b6e3381a34",
    measurementId: "G-5QS1H14QJ2"
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();
export const coursesCollection = database.collection('courses');
export const lessonsCollection = database.collection('lessons');
