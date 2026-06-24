<script>
    // 1. CONFIGURAZIONE DIRETTA (Sostituisci "IL_TUO_..." con i codici veri di Firebase)
    const firebaseConfig = {
  apiKey: "AIzaSyAh0Mqbd_bamcTKdA38tGU2H09W8rGnmzU",
  authDomain: "scorpionpulse-b660f.firebaseapp.com",
  projectId: "scorpionpulse-b660f",
  storageBucket: "scorpionpulse-b660f.firebasestorage.app",
  messagingSenderId: "832084644457",
  appId: "1:832084644457:web:2ce04ba59f6271db57c8f8",
  measurementId: "G-0RQ94CYRSJ"
};

    // Inizializzazione immediata
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();
    const provider = new firebase.auth.GoogleAuthProvider();

    // 2. CODICE DEL FORM (Rimane identico e pulito)
    const usernameInput = document.getElementById('reg-username');
    const passwordInput = document.getElementById('reg-password');
    const errorDiv = document.getElementById('username-error');
    const successDiv = document.getElementById('username-success');
    const barra = document.getElementById('strength-bar');
    const form = document.getElementById('register-form');

    passwordInput.addEventListener('input', () => {
        const val = passwordInput.value;
        if (val.length === 0) { barra.style.width = "0%"; } 
        else if (val.length < 6) { barra.style.background = "#ff2a2a"; barra.style.width = "33%"; } 
        else if (val.length >= 6 && val.length < 10) { barra.style.background = "#ff7300"; barra.style.width = "66%"; } 
        else { barra.style.background = "#00cc66"; barra.style.width = "100%"; }
    });

    usernameInput.addEventListener('input', () => {
        const username = usernameInput.value.trim().toLowerCase();
        if (username.length < 3) { errorDiv.style.display = "none"; successDiv.style.display = "none"; return; }

        db.collection("users").where("username", "==", username).get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    errorDiv.style.display = "block"; successDiv.style.display = "none";
                } else {
                    errorDiv.style.display = "none"; successDiv.style.display = "block";
                }
            }).catch((err) => { console.error(err); });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim().toLowerCase();
        const email = document.getElementById('reg-email').value;
        const password = passwordInput.value;

        if (errorDiv.style.display === "block") { alert("Username occupato!"); return; }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                return db.collection("users").doc(userCredential.user.uid).set({
                    username: username,
                    email: email,
                    searchHistory: [],
                    likedVideos: []
                });
            })
            .then(() => {
                alert("Registrazione completata!");
                window.location.href = "login.html";
            })
            .catch((error) => { alert("Errore: " + error.message); });
    });

    document.getElementById('btn-google-click').addEventListener('click', () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                localStorage.setItem("usernameUtente", result.user.displayName);
                window.location.href = "index.html";
            }).catch((err) => { console.warn(err.message); });
    });
</script>
