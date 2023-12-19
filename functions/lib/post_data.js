const functions = require('firebase-functions');

module.exports = function (admin) {
  return functions.https.onCall(async (data, context) => {
    const username = data.header.username;
    const password = data.header.password;
    if ( username != 'admin' || password != 'AA00XX11' ) {
      throw new functions.https.HttpsError('unauthenticated', 'The function must be called ' +
        'while authenticated.');
    }
    const body = data.body; // 追加するドキュメントのデータ

    return admin.firestore().collection('Item').add(body)
      .then(docRef => {
        return { message: `Document added with ID: ${docRef.id}` };
      })
      .catch(error => {
        throw new functions.https.HttpsError('internal', `Error adding document: ${error}`);
      });  
  });
};


