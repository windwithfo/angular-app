/**
 * @file 发布服务器总入口
 * @author dongkunshan(windwithfo@yeah.net)
 */

import Koa      from 'koa';
import path     from 'path';
import proxy    from './proxy';
import router   from './router';
import jsonp    from 'koa-jsonp';
import views    from 'koa-views';
import serve    from 'koa-static';
// import convert    from 'koa-convert';
// import session    from 'koa-session2';
// import RedisStore from './RedisStore';
import parser   from 'koa-bodyparser';
import config   from './config/config';
import rewriter from './middleware/rewriter';

const app = new Koa();

app.use(parser());

proxy.forEach((item) => app.use(item));

app.use(jsonp());

app.use(async (ctx, next) => {
  ctx.state.isDev = false;
  if (process.env.NODE_ENV === 'development') {
    ctx.state.isDev = true;
  }
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// Must be used before any router is used
// app.use(views(path.join(__dirname, viewPath), {
//   extension: 'pug'
// }));

// app.use(session({
//   key: 'koa_dks_emiya_windiwhtfo_ssid',
//   store: new RedisStore(),
//   maxAge: 1000 * 60 * 60 * 24 * 1,
//   overwrite: false,
//   httpOnly: true
// }));

app.use(router.routes());
app.use(router.allowedMethods());

app.use(rewriter({
  verbose: false,
  index: 'index.html'
}));

app.use(serve(path.join(__dirname, '../dist/browser')));
app.use(serve(path.join(__dirname, './static')));

app.listen(config.port);
console.log(`server listen on port ${config.port}`);
