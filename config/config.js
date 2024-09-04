//config.js
 
let env = process.env.NODE_ENV || 'dev'   // 1
let mongodb_url = process.env.MONGODB_URL || 'mongodb://localhost:27017/nodejs_test_db;';
 
console.log('the env is ' + env);
process.env.NODE_ENV  = env;
 
process.env.MONGODB_URL = mongodb_url;