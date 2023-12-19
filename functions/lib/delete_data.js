const functions = require('firebase-functions');

module.exports = function (admin) {
  return functions.https.onCall(async (data, context) => {
    const body = data.body; 
    const id = body.id; // 削除するid
    return admin.firestore().collection('Item').doc(id).delete()
      .then(_ => {
        return { message: `Document ${id}　successfully deleted` };
      })
      .catch(error => {
        throw new functions.https.HttpsError('internal', `Error deleting document: ${error}`);
      });  
  });
};


