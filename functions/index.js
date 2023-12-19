const admin = require('firebase-admin');
admin.initializeApp();

const get_random = require('./lib/get_random.js');
const post_data = require('./lib/post_data.js');
const delete_data = require('./lib/delete_data.js');

exports.get_random = get_random(admin);
exports.post_data = post_data(admin);
exports.delete_data = delete_data(admin);


