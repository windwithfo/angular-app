/**
 * @file 路由总入口
 * @author dongkunshan(windwithfo@yeah.net)
 */

import Router from 'koa-router';

// 导入子路由

import apiCtl from './controller/apiController';
// imp

const router = new Router();

// 首页拦截
router.redirect('/', '/index');

// 路由分发
router.use('/api', apiCtl.routes(), apiCtl.allowedMethods());
// router

export default router;
