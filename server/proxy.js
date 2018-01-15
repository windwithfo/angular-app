/**
 * @file 代理服务配置
 * @author dongkunshan(windwithfo@yeah.net)
 */

import proxy  from 'koa-proxies';
import config from './config/config';

let proxys = [];

config.proxys.forEach((item) => {
  proxys.push(proxy(item.path, {
    target: item.target,
    changeOrigin: true,
    rewrite: item.micro ? (path) => path.replace('/rest/auth', '')
      : item.rewrite,
    logs: item.log
  }));
});

proxys.push(proxy('/mock/', {
  target: 'http://localhost:' + config.port,
  changeOrigin: true,
  rewrite: (path) => {
    let tmp = path.split('?');
    let mockPath = tmp[0].replace('/mock', '/mockData') + '.json'
      + (tmp[1] ? '?' + tmp[1] : '');
    console.log('get mock on path:' + mockPath);
    return mockPath;
  },
  logs: true
}));

export default proxys;
