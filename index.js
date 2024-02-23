// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import{ getDatabase,
        ref, 
        child,
        get,
        onValue,} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM_6t-GIOnqR02_3VwBts53z2ydRiu-RY",
  authDomain: "testfirebase-137ec.firebaseapp.com",
  projectId: "testfirebase-137ec",
  storageBucket: "testfirebase-137ec.appspot.com",
  messagingSenderId: "702172048167",
  appId: "1:702172048167:web:703003e09e6ff8909f5702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

const messages = ref(database, "/messages");

onValue(
    messages, 
        (snapshot) => {
            //console.log(snapshot)
            const ul = document.getElementById("messages");
            ul.replaceChildren();

            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();

                console.log(childKey);
                console.log(childData);

                const text = document.createTextNode(childData.message);
                const li = document.createElement("li");

                li.appendChild(text);
                ul.appendChild(li);

            });
    },
    {
        onlyOnce: false,
    }
);