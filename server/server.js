// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const {Client} = require('pg');
const app = module.exports = loopback();

// const client = new Client({
//   connectionString: 'postgres://birezmkbscxtrw:329a341462142bd392ea08fa9b037f8adab103f5c3d873390c3a3bf216efa11a@ec2-34-228-248-175.compute-1.amazonaws.com:5432/d6d4clv88e1m9q',
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// client.connect();

// client.query('CREATE TABLE Task;', (err, res) => {
//   // if (err) {
//   //   console.error(err);
//   // }
//   // for (let row of res.rows) {
//   //   console.log(JSON.stringify(row));
//   // }
//   client.end();
// });

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
