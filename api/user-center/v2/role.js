
exports.getData = function (method, data) {
    var returnData = {
        "retCode": "00",
        "retMsg": "成功",
        "tid": "475.16970123868390000",
        "totalRow": 13,
        "totalPage": 2,
        "curPage": 1,
        "pageSize": 10,
        "retList": [
            {
                "no": 10001,
                "name": "中枢系统管理员",
                "orgGradeNo": 3,
                "note": "中枢平台系统管理员",
                "maxUserNum": 100
            },
            {
                "no": 10002,
                "name": "管库员",
                "orgGradeNo": 3,
                "note": "管库员",
                "maxUserNum": 100
            },
            {
                "no": 10003,
                "name": "清分责任岗",
                "orgGradeNo": 3,
                "note": "清分责任人分配",
                "maxUserNum": 100
            },
            {
                "no": 10006,
                "name": "调拨员",
                "orgGradeNo": 3,
                "note": "调拨、审批",
                "maxUserNum": 5
            },
            {
                "no": 10007,
                "name": "清分经理",
                "orgGradeNo": 3,
                "note": "清分任务分配、绑定",
                "maxUserNum": 10
            },
            {
                "no": 10008,
                "name": "清分助理",
                "orgGradeNo": 3,
                "note": "协助清分经理",
                "maxUserNum": 10
            },
            {
                "no": 10009,
                "name": "查询",
                "orgGradeNo": 3,
                "note": "查询",
                "maxUserNum": 100
            },
            {
                "no": 10010,
                "name": "运营主管",
                "orgGradeNo": 3,
                "note": "运营主管",
                "maxUserNum": 10
            },
            {
                "no": 10011,
                "name": "金库常务主任",
                "orgGradeNo": 3,
                "note": "金库常务主任",
                "maxUserNum": 1
            },
            {
                "no": 10012,
                "name": "金库副主任",
                "orgGradeNo": 3,
                "note": "副主任",
                "maxUserNum": 1
            }
        ]
    };
    if (method === 'DELETE') {
        returnData = {
            "retCode": '999999',
            "retMsg": "不支持DELETE方法"
        }
    }
    return JSON.stringify(returnData);
};
