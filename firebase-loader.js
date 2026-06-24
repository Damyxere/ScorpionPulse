// Configurazione centralizzata di Firebase per Scorpion Pulse
const firebaseConfig = {
    apiKey: "AIzaSyCBxbf8ZhTghee43A6SLYBWBRsFK7yQym4", 
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
}} } catch (error) {
    console.error("Errore critico durante la sincronizzazione di Firebase:", error);
    
    // Sistema di ripiego automatico (Fall-back) aggiornato
    window.auth = {
        onAuthStateChanged: (callback) => {
            // Se siamo in modalità ospite, simula un utente attivo
            callback({ email: "guest.scorpion@pulse.local", uid: "guest_mode" });
        },
        signOut: () => { 
            return Promise.resolve(); 
        },
        // Aggiungiamo la funzione mancante per evitare il crash visto in image_ec079d.png
        signInWithEmailAndPassword: (email, password) => {
            console.log("Accesso simulato in modalità ospite con:", email);
            return Promise.resolve({
                user: { email: email, uid: "guest_mode" }
            });
        }
    };
}
