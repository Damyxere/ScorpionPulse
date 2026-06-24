// CONFIGURAZIONE REALE STRUTTURATA - SCORPION PULSE
const firebaseConfig = {
    apiKey: "AIzaSyAh0Mqbd_bamcTKda38tGU2H09W8rGnmzU",
    authDomain: "scorpionpulse-b660f.firebaseapp.com",
    projectId: "scorpionpulse-b660f",
    storageBucket: "scorpionpulse-b660f.firebasestorage.app",
    messagingSenderId: "832084644457",
    appId: "1:832084644457:web:2ce04ba59f6271db57c8f8",
    measurementId: "G-0RQ94CYRSJ"
};

// Inizializzazione sicura dei servizi compatibili
try {
    firebase.initializeApp(firebaseConfig);
    console.log("🔥 Firebase caricato ed emesso con successo su Scorpion Pulse!");
} catch (error) {
    console.error("❌ Errore critico di inizializzazione Firebase:", error);
}

// Globalizzazione delle variabili per i form di login e registrazione
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
