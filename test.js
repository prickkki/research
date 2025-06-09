const request = require('supertest');
const app = require('./index');

request(app)
  .get('/')
  .expect(200)
  .end((err, res) => {
    if (err) {
      console.error('❌ FAIL', err);
      process.exit(1);
    }
    console.log('✅ OK');
    process.exit(0);
  });