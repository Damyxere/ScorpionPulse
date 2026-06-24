const firebaseConfig = {
    // 1. Deve iniziare con "AIzaSy..." (Prendila da Firebase -> Impostazioni -> Generale)
    apiKey: "AIzaSyAh0Mqbd_bamcTKdA38tGU2H09W8rGnmzU", 
    
    // 2. È l'ID del tuo progetto + .firebaseapp.com
    authDomain: "scorpionpulse-b660f.firebaseapp.co",
    
    // 3. È l'ID esatto del tuo progetto
    projectId: "scorpionpulse-b660f",
    
    // 4. È l'ID del tuo progetto + .appspot.com
    storageBucket: "scorpionpulse-b660f.firebasestorage.app",
    
    // 5. Questo numero lo vedi nel file JSON che mi hai mandato prima alla voce client_id!
    messagingSenderId: "832084644457", 
    
    // 6. Ha una struttura tipo "1:115029876942672177347:web:xxxxxx"
    appId: "1:832084644457:web:2ce04ba59f6271db57c8f8" 
};

// Inizializzazione
try {
    firebase.initializeApp(firebaseConfig);
    console.log("🔥 Firebase Scorpion Pulse collegato!");
} catch (error) {
    console.error("❌ Errore:", error);
}

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
