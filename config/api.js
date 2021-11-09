var fs = require('fs');

/**
 * 检查请求的路径是否存在
 * @param apiName 请求路径
 * @param method  请求方式
 * @param params   请求参数
 * @param response 返回请求
 */
function getDataFromPath(apiName, method, params, response) {
    console.log('request URL：' + apiName + `\n`, 'request method：' + method);
    if (apiName) {
        // 使用fs.access()方法判断文件和目录是否存在
        fs.access(
            // 提取请求路径中的js文件
            apiName.substring(1) + '.js',
            // 回调函数，检查请求的路径是否有效失败返回一个错误参数
            function (err) {
                if (!err) {
                    // 每次请求都清除模块缓存重新请求
                    delete require.cache[require.resolve('..' + apiName)];
                    try {
                        // 请求文件内容，getData()方法为文件内容中的数据获取方法
                        addApiResult(response, method, require('..' + apiName).getData(method, params));
                    } catch (e) {
                        console.error(e.stack);
                        response.status(500).send(apiName + ' has an error, please check the code.');
                    }
                } else {
                    addApiResult(response, method);
                }
            }
        );
    } else {
        addApiResult(response, method);
    }
}

/**
 * 设置响应头
 * @param response
 */
function setApiHeader(response) {
    response.setHeader('Content-Type', 'application/json;charset=utf-8');
    response.header("Cache-Control", "no-cache, no-store, must-revalidate");
    response.header("Pragma", "no-cache");
    response.header("Expires", 0);
    response.header('Access-Control-Allow-Origin', '*');
}

/**
 * 返回参数，如无返回参数返回404
 * @param response 响应信息
 * @param method 方法
 * @param result 请求结果
 */
function addApiResult(response, method, result) {
    if (result) {
        response.send(result);
    } else {
        response.status(404).send();
    }
}

/** 请求方式 */
// get
exports.get = function (request, response) {
    setApiHeader(response);
    getDataFromPath(request.path, 'GET', request.query, response);
};

// post
exports.post = function (request, response) {
    setApiHeader(response);
    getDataFromPath(request.path, 'POST', request.body, response);
};

