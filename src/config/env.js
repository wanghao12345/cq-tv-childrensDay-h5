/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://device.jiot.link/backend/';
  imgBaseUrl = '';
  routerMode = 'hash';
}else if(process.env.NODE_ENV === 'production'){
	baseUrl = '';
	imgBaseUrl = '';
  routerMode = 'history';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}
