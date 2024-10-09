var fs = require('fs');

/**
 * 检查请求的路径是否存在
 * @param apiName 请求路径
 * @param method  请求方式
 * @param params   请求参数
 * @param response 返回请求
 */
function getDataFromPath(apiName, method, params, response) {
    console.log(`请求信息日志：======> start`);
    console.log('request URL：' + apiName + `\n`, 'request method：' + method);
    console.log(`请求信息日志：======> end`);
    let fileName = apiName ? apiName : '/api/default-result';
    // 使用fs.access()方法判断文件和目录是否存在
    fs.access(
        // 请求路径对应的js文件
        fileName.substring(1) + '.js',
        // 回调函数，检查请求的路径是否有效，失败则返回一个错误参数
        function (err) {
            if (!err) {
                getDataFromFile(fileName, method, params, response);
            } else {
                getDataFromFile('', method, params, response);
            }
        }
    );
}

/**
 * 根据文件路径名称获取文件内容
 * @param filePathName 文件路径
 * @param method 请求方法
 * @param params 参数
 * @param response 响应
 */
function getDataFromFile(filePathName, method, params, response) {
    filePathName = filePathName ? filePathName : '/api/default-result';
    // 每次请求都清除模块缓存重新请求
    delete require.cache[require.resolve('..' + filePathName)];
    try {
        // 请求文件内容，使用require()方法加载对应的文件模块，通过文件模块内的getData()访问方法为获取数据
        addApiResult(response, require('..' + filePathName).getData(method, params));
    } catch (e) {
        console.error(e.stack);
        response.status(500).send(filePathName + ' has an error, please check the code.');
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
 * @param result 请求结果
 */
function addApiResult(response, result) {
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

