const apiHost = 'http://localhost:3000';
// 跨域请求要想带上cookie，必须要在ajax请求里加上以下代码
// 配置jQuery中的ajax请求($.get()....)，让它支持跨域.
$.ajaxSetup({ crossDomain: true, xhrFields: { withCredentials: true } })