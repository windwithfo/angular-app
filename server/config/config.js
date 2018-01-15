/**
 * @file 配置文件
 * @author dongkunshan(windwithfo@yeah.net)
 */

import path from 'path';

const port = process.env.PORT0 || 3002;

const config = {
  port,
  proxys: [
    {
      path: '/rest/auth',
      target: 'config.proxy.auth',
      log: true,
      micro: true
    },
    {
      path: '/rest/auth',
      target: 'config.proxy.auth',
      log: true,
      rewrite: function (path) {
        return path.replace('/rest/auth', '');
      }
    }
  ]
};

export default config;
