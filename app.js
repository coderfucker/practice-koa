const koa = require('koa');
const path = require('path');
const bodyParser = require('koa-body');
const compress = require('koa-compress');
const session = require('koa-session');
const logger = require('koa-logger');
const route = require('koa-route');
const views = require('co-views');
const serve = require('koa-static');

const app = module.exports = koa();

app.use(compress({}));
app.use(bodyParser());
app.keys = ['cynosure'];
app.use(session(app));
app.use(serve(path.join(__dirname, 'public')));

const render = views(path.join(__dirname, '/views'), {ext: 'pug'});
let phones = require('./apps/phones/phones.json');

app.use(route.get('/', list));

function *list() {
  this.body = yield render('list', {phones});
}


if(!module.parent) {
  app.listen(process.env.PORT || 3000);
}
