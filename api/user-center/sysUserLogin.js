
exports.getData = function (method, data) {
    var returnData = {
        retCode: '000000',
        retMsg: "成功",
    };
    if (method === 'DELETE') {
        returnData = {
            "retCode": '999999',
            "retMsg": "不支持DELETE方法"
        }
    }
    return JSON.stringify(returnData);
};
