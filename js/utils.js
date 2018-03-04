/**
 * 解析url，获取其中的参数
 * @param url
 * 返回的是一个Array，其中每项是一个数组，数组的第一位是是参数名称，第二位是参数值
 */
function parseUrl(url) {
	var url = url.split("?")[1];
	var params = url.split("&");
	var nameValuePairs = new Array();
	for(var i = 0; i < params.length; i++) {
		nameValuePairs[i] = params[i].split("=");
	}
	return nameValuePairs;
}

/**
 * 解析url，获取指定参数的值
 * @param url
 * @param paramName 参数名
 */
function parseParamFromUrl(url, paramName) {
	var nameValuePairs = parseUrl(url);
	console.log(nameValuePairs);
	for(i in nameValuePairs) {
		if(nameValuePairs[i][0] == paramName) {
			return nameValuePairs[i][1];
		}
	}
}