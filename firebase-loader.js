
// Configurazione del tuo progetto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCBxbf8ZhTghee43A6SLYBWBRsFK7yQym4", 
    authDomain: "scorpion-pulse.firebaseapp.com",
    projectId: "scorpion-pulse",
    storageBucket: "scorpion-pulse.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
};
// Inizializzazione sicura con blocco Try/Catch completo
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    window.db = firebase.firestore();
    window.auth = firebase.auth();
    console.log("Firebase inizializzato con successo.");
} catch (error) {
    console.error("Errore critico durante l'inizializzazione di Firebase:", error);
}

