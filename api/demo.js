var retList = [
    {
        'naem': '小明',
        'age': '12',
        'sex': '男'
    }, {
        'naem': '小红',
        'age': '12',
        'sex': '女'
    }
];
exports.getData = function (method, data) {
    var returnData = {
        retCode: '000000',
        retMsg: "成功",
        retList: retList
    };
    if (method === 'DELETE') {
        returnData = {
            "retCode": '999999',
            "retMsg": "不支持DELETE方法"
        }
    }
    return JSON.stringify(returnData);
};
