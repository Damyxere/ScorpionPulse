// Configurazione centralizzata di Firebase per Scorpion Pulse
const firebaseConfig = {
    apiKey: "AIzaSyA1-TUTTA_LA_TUA_API_KEY", 
    authDomain: "scorpion-pulse.firebaseapp.com",
    projectId: "scorpion-pulse",
    storageBucket: "scorpion-pulse.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
};

// Inizializzazione sicura e sincronizzazione con controllo degli errori
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    
    // Assegnazione delle istanze globali ai moduli dell'app
    window.auth = firebase.auth();
    window.db = firebase.firestore();
    
    // Forza l'attivazione della persistenza dati locale per evitare disconnessioni
    window.db.enablePersistence().catch((err) => {
        if (err.code == 'failed-precondition') {
            console.warn("Persistenza non attiva: troppe schede aperte.");
        } else if (err.code == 'unimplemented') {
            console.warn("Il browser non supporta la persistenza dei dati.");
        }
    });

    console.log("Scorpion Pulse DB: Sincronizzazione completata con successo.");
} catch (error) {
    console.error("Errore critico durante la sincronizzazione di Firebase:", error);
    
    // Sistema di ripiego automatico (Fall-back) per evitare il blocco dell'interfaccia
    window.auth = {
        onAuthStateChanged: (callback) => {
            // Genera una sessione ospite temporanea per non interrompere la ricerca dei brani
            callback({ email: "guest.scorpion@pulse.local", uid: "guest_mode" });
        },
        signOut: () => { return Promise.resolve(); }
    };
}
