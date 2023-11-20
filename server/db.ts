import * as admin from 'firebase-admin';
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE)),
  databaseURL: 'https://basededatos-59c93-default-rtdb.firebaseio.com',
});

const baseDeDatos = admin.firestore();
const rtdb = admin.database();

export {baseDeDatos, rtdb};
