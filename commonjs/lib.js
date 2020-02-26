console.log('hello');

exports.hello = 'world';

exports.foo = function(a, b) {
 return a + b;
}
exports.geekbang = { hello: 'world' };

// 覆盖被引用的整个exports  改变其类型
module.exports = function minus(a, b) {
  return a - b;
}


setTimeout(() => {
  console.log(exports) // 当前还是对象
}, 2000)