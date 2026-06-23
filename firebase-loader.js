// CONFIGURAZIONE CENTRALE DI FIREBASE
const firebaseConfig = {
  "type": "service_account",
  "project_id": "scorpion-f2a96",
  "private_key_id": "43ad1f5e9c55df93d994bf3697f21f2df5bf0832",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDImOsnxVayLLwo\nbji0MpUu1SPgErhK0m0t+mYTPc/9GKeu4XGsQQIkDPBP0aM02K5hUX6rgHWacbbA\nd3tuAY2k81qDsxhZ099YG/R4vohh7esHn42dZV1f014+2YsthgtOUiYvkpPN1wTS\ndXtDpgCmbYHey7HLuJyuXA405ZN1K23JvAao+UyLJ5cmLHk/K9PaTVHbFpdLX9Ok\n1Gxjp0d0V6MdRvqot/0mt54eWfktx63HTQAL9x9tuMoNcIW4CK1/oeuRBJSv+8kf\nc+PyRBYIJS8iPuz1fXgesJQQ23EGTXPntaDyWoWDYVfx+aHuWCe28Fl116uItdBy\nWacDbqxZAgMBAAECggEAEM04IxJlFtLm5qcGwlcbRjstgFLpE0FJSkjXHGT4wwz5\n3Iy/AevHA2B/D1xyhFZi0r1p8/D0SL2eDkRjtvzT0Z1ddzr8vudfZWigAy4IS9WK\n8k5DpQuMtN5GHlMH1IYN898vGhx3m03Xdk5HRw0EMGxrLI9YosThgLwup3EUNwPI\nc75K67nsbaXcoPDVdhcPxmOGh2k4UFFyQIKmZqMJNKjLzaWGLyuD5BCdPVc2BgKK\n0V3YHGywD2coMwEeIqP877RxlWoAfN8/qvN7agDz+W+IDAuTRP7PjmJHnkcwSziV\nzD/5jmflWgGX5IMao7ct7vFegu+R3wUU5Y0XV8UM4QKBgQDtNLheihoXroC4rpRm\noHBqAKNM+t135mZU9gGKjRGRMKceZ1xwySdj6HfTDsClrCWJq23cqNo5kn7GIHLN\nyO1Kwnecq4zZnCevBgHVtLj0cWfr0erPtou9fykRoPIP4m1pDN5mUh2NBQ39JF2t\nFF8ZeWQLF5X6V/eleASlwIqIaQKBgQDYfalHazA1Apm6WDuP2sOUyBRsnzkxmrAV\n53Ty0upFf+ixpcyy83sklvCr8dvWGhXawPUp1XOwdwGOlJyRY3Kpmx1OcsLPAkJB\neYWIXuUVJFzdqmy/PB52d2IDelsHjjBfggsoAAsskVsc3WVWgVkzoyS6dSbBwP34\nfM9oW6YGcQKBgH0+J9aq3koAtjBM5UgmkBQ4EAD2N/c1rHRRi9DG2S6q3KI9+t4G\nJ4kl1haXJHqVISDGZfRrJwXc5pjfyx4CZ9/gO9156p1/SKit6EwY5ssSEce+h1dy\nz+eW+202aHigmhosVET8OGQb9h3hlKBtMCU4Je2BX4vV5Ij2jKWjusF5AoGBAJ8K\nCZ6m1t5Kj8Z+ZRs0GfQl3CNEAU84lV0yEQ8F9Qajhb1j0PIxvmhN3nZikh5CQYXX\ntQNLhNbBRkqJUE/aX/TLOAdWdViAD05sSLW7CM20Teil94exUauz3jQx4ce2JEE1\nlp6HEa5nBik5V+Xp1i8CDcxQne0+qxSuE+xVT61xAoGBANtzCTpFT8AZAaZn81Aq\na+v7O7OJl5L/vw4RvTp0KgAk2waJILPkMfenaJBw8M2RblN1Qpw8KE6UnQj5Q2Wu\nheE/HcHZLhhlJn2J+Iw3YB4Q6Uv2lN0ZAqyP8S9OC3hsAAm14gM59AlNwUI8Kdb1\nkrdFWqEBVFxsX2UJ12HZ7grS\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@scorpion-f2a96.iam.gserviceaccount.com",
  "client_id": "102377205696903823466",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40scorpion-f2a96.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
  };

// Inizializzazione globale
firebase.initializeApp(firebaseConfig);

// Esponiamo i servizi per usarli nelle altre pagine
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
