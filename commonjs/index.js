console.log('stat require');
var lib = require('./lib.js')
console.log('end require', lib);  // 默认空对象

lib.additional = 'test';
