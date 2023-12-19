const functions = require('firebase-functions');

module.exports = function (admin) {
  return functions.https.onCall(async (data, context) => {
    const db = admin.firestore();
    const ref = db.collection('Item');
    const snapshot = await ref.get();
    if (snapshot.empty) {
      return null;
    }
    const docIds = snapshot.docs.map(doc => doc.id);
    const randomIndex = Math.floor(Math.random() * docIds.length);
    const randomDocId = docIds[randomIndex];
    const docSnapshot = await ref.doc(randomDocId).get();
    return docSnapshot.data();
  });
};
