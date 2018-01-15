/**
 * @file 数据相关路由处理
 * @author dongkunshan(windwithfo@yeah.net)
 */

import Router from 'koa-router';
// import log4js from '../config/log.config';

const router = new Router();
// const logger = log4js.getLogger('api');

router.get('/version', (ctx) => {
  // logger.info('get config version by api');
  ctx.type = 'json';
  let data = {
    code: 0,
    version: '20170322-1',
    msg: 'msg'
  };
  ctx.body = data;
});

// ctl

export default router;
