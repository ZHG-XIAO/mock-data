
exports.getData = function (method, data) {
    var returnData = {
        retCode: '00',
        retMsg: "成功",
        element: {
            httpUrl: 'http://127.0.0.1:5011',
            wsUrl: 'ws://127.0.0.1:9090'
        }
    };
    if (method === 'DELETE') {
        returnData = {
            "retCode": '999999',
            "retMsg": "不支持DELETE方法"
        }
    }
    return JSON.stringify(returnData);
};
