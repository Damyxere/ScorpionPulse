// CONFIGURAZIONE REALE SCORPION PULSE
const firebaseConfig = {
    apiKey: "AIzaSyAh0Mqbd_bamcTKda38tGU2H09W8rGnmzU",
    authDomain: "scorpionpulse-b660f.firebaseapp.com",
    projectId: "scorpionpulse-b660f",
    storageBucket: "scorpionpulse-b660f.firebasestorage.app",
    messagingSenderId: "832084644457",
    appId: "1:832084644457:web:2ce04ba59f6271db57c8f8",
    measurementId: "G-0RQ94CYRSJ"
};

// Inizializzazione
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
