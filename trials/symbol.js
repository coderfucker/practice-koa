let a = {};
let s1 = Symbol('test');
let s2 = Symbol('testfunc');
a[s1] = 'hello world';
a[s2] = function() {
  console.log('test function');
}
console.log(a[s1]);
console.log(a);
console.log(Object.getOwnPropertyNames(a));
console.log(Object.getOwnPropertySymbols(a));

// v1
function getHello(country) {
  switch(country) {
    case 'es':
      return 'holla';
    case 'ch':
      return '你好';
    default:
      return 'hello';    
  }
}
console.log(getHello('es'));
console.log(getHello('ch'));

//v2
const COUNTRY_CODE = {
  es: Symbol(),
  ch: Symbol()
}
function getHello(country) {
  switch(country){
    case COUNTRY_CODE.es:
      return 'Holla';
    case COUNTRY_CODE.ch:
      return '你好';
    default:
      return 'hello';    
  }
}
console.log(getHello(COUNTRY_CODE.es));
console.log(getHello(COUNTRY_CODE.ch));
