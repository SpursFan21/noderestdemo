//config.js
 
let env = process.env.NODE_ENV || 'dev'   // 1
let mongodb_url = process.env.MONGODB_URL || 'mongodb://localhost:27017/NZChat;';
//let mongodb_url = process.env.MONGODB_URL || 'mongodb+srv://12Batwom34:12Batwom34@nzchat.evbarcr.mongodb.net/nodejsdb';
                                              //mongodb+srv://12Batwom34:12Batwom34@nzchat.evbarcr.mongodb.net/nodejsdb
 
console.log('the env is ' + env);
process.env.NODE_ENV  = env;
 
process.env.MONGODB_URL = mongodb_url;