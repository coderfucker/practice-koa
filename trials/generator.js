function* helloworld() {
  yield "hello";
  return "world";
}

let func = helloworld();
console.log(func.next());
console.log(func.next());
console.log(func.next());

function* f() {
  for(let i = 0; true; i++) {
    var reset = yield i;
    if(reset) return i = -1;
  }
}
let g = f();
console.log(g.next());
console.log(g.next());
console.log(g.next(true));

function* loopThroughInt() {
  for(let index = 0; index < 100; index++){
    yield index;
  }
  return 100;
}
for(let v of loopThroughInt()) {
  console.log(v);
}

function* objects() {
  yield "cat";
  yield "dog";
  yield "duck";
}
function* say() {
  yield* objects();
  yield " say hello world";
}
for(let u of say()) {
  console.log(u)
}
