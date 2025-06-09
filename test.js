const http = require('http');
http.get('http://localhost:3000', (res) => {
  if (res.statusCode === 200) {
    console.log('✅ OK');
    process.exit(0);
  } else {
    console.error('❌ FAIL');
    process.exit(1);
  }
});
