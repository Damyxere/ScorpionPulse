// CONFIGURAZIONE CENTRALE DI FIREBASE
const firebaseConfig = {
  "type": "service_account",
  "project_id": "scorpionpulse-b660f",
  "private_key_id": "8be2229ef30d0df7eecf98f4883c0e5e301afd35",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDExHUcDl9k2xYc\n6BLwRiYPHAzWC13jhNI6T32DQhfDwGaxmXJbsQAMWb0nlF5EEOLvdT/lsUkNUVr5\nAJTVG2NCLbuM/o89r0OMM7HkSijQCFl8izGdr+9kKG3FqTvCmeFLrSTIIc7R/5em\ns/n6cLDR8Ag2Zkg3pxXQfF6tseVQGK6/RFogR4GbHfDhrXnH+GBnmg52Bdg+YUgj\nlJ2UmwzBiAVlBsJCy/hwxD3XCH0czBHFguE+S4jvxW6K5GTUokthCjjsCcBUbMp9\nVjrJzmaT7mlsZECAQwVqW8AwMMG1qX0l97mOYgQJ9CX+Bu+pjwvD7zt9DfpLJmjo\nJ1fGOSITAgMBAAECggEAAq2Z2nPnoHvK5UHTYCnUQshi9FbbREl+gwSp9Ktln2hy\n/V/VSqIyGfjuticy0UJZlGDIKdwr3l6JGnKDlBL3WuM8dkLQuEo2ZSYe+bh4rbwv\nW56ZYkgOvhI+zD3tbkyh4GHO6lprcjhEXCR+9oWqInFd6z+hJADGLzxCHaMaN+jX\n9jeyBae0SjWYo+G5+P4bZJztnEcXKNHWK/yHW38k+K+8Mk1IH1xtb00l6Mw/aGoZ\nBVZ7SNcImnCb1pfbXHepI7cCE4WMAHwyxkHSmY3ixegDVQzdGpLk2R7g8n7Rokk5\nfrr1qJ7f71wAdocttamH/AurRkbtCy9QI9nqpFxQgQKBgQD0kCtKUSZv+VmPe616\nzFc3dPme1/lTjuA4o93ArehOPZDZspyWG4oNNg31yR11teFyLhmseD2jjL6tRGS3\nZ7OjjmLB1gEHp0NLhhAVBJoW44T+ZJHYpY3lQq7fdYqjCDup0Bg/miMWzzo42M4z\nHvbHbaa5w7DGPoStTZeYGsRJ8QKBgQDN+BfYUYDw8G/CjYAJrrEe+7fnzzYB12XM\nZIkhxdYygp1f62O8nVeAi3o9Kf+iMId8Kn7W1XXyvV5+6+VJdT+ze11687PoTvhY\nYLeNRH2wLePljzpA+//pDDO/CxMkGaq7PaKFjewcza+lPpSBwMSQzJ/y0NcVmJVM\nfUWP8u5IQwKBgCsTJXzOdD2upnaeKv0A9q+e28R9d72e4aE4Q3uHZe4568RcMDZE\nHXmcNrM+vACai13H/t+gwgKHbKIp9K9VBY/eKUjIv5+wdyrbLwP0rosvgaIo5oNJ\nDYf+ybw0ALocXh3XuB2jsWB4GWIf1Zmtb3vKtV3suLsCEe5QR04UENSRAoGBALy/\n8EoiVsF19VUbCwzUdChqkRvzvhBt7jIip7C1dhePrtyqABpnLjr0lq7agBOH2YEm\nCFqj/5TViXVShCqPMjMuiHoWPvZS+C81YsAo1e3QABrs6HuI8/oDXqBia8YXZ2hz\nkS5G4ut6as5JzRojJ39ypdmFHLYDwD36Rvclrsu1AoGAeTrzmebj1oLtC0f0qh/5\n2WPbnjW4+CDOo4opuVKp0MHWc85OqmS/xsyJ/Y6ehXnFGMzeb1vpPeodqBtXinm3\n6DBiIaJLjHDdhFIh7gNcP7SgVYTi7In2w4Ci9xQTJmax5hJgTqmW314+LmLu63WL\nBTjiufSjGgMIKIYNV+5id7E=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@scorpionpulse-b660f.iam.gserviceaccount.com",
  "client_id": "115029876942672177347",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40scorpionpulse-b660f.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

// Inizializzazione globale
firebase.initializeApp(firebaseConfig);

// Esponiamo i servizi per usarli nelle altre pagine
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
