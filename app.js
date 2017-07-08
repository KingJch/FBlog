const koa = require('koa');

const app = new koa();

app.use(async (ctx) => {
	ctx.body = "hello wolrd!";
});

app.listen(9090);
console.log('app is listening on port 9090')