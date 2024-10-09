
exports.getData = function (method, data) {
    var returnData = {
        "retCode": "00",
        "retMsg": "成功",
        "tid": "358.16969340280460000",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTY5NDIwNDMsInVzZXJfbmFtZSI6InpoYW5nc2FuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV8xMDAwMSJdLCJqdGkiOiJkYzYzMWFhNi0yM2UzLTQwZDgtOGI5Yy03ODk0MjNlNGVjYWMiLCJjbGllbnRfaWQiOiJwYy13ZWIiLCJzY29wZSI6WyJhbGwiXX0.hlVIZEr6dqNFvLmesMMTCe7EF_v_fUj-_wAlOGT4FCw",
        "expires_in": "8014",
        "jti": "dc631aa6-23e3-40d8-8b9c-789423e4ecac",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ6aGFuZ3NhbiIsInNjb3BlIjpbImFsbCJdLCJhdGkiOiJkYzYzMWFhNi0yM2UzLTQwZDgtOGI5Yy03ODk0MjNlNGVjYWMiLCJleHAiOjE2OTc1Mjg4NDMsImF1dGhvcml0aWVzIjpbIlJPTEVfMTAwMDEiXSwianRpIjoiYzRmOTcxOTYtNzlhZC00OWE4LTg5ZTQtNTQwZTcxNDZlM2QxIiwiY2xpZW50X2lkIjoicGMtd2ViIn0.jsY-u-ssS1tsMgp0t8YVlhU2-ksEQyNpvbALPMHVHmg",
        "scope": "all",
        "token_type": "bearer"
    };
    if (method === 'DELETE') {
        returnData = {
            "retCode": '999999',
            "retMsg": "不支持DELETE方法"
        }
    }
    return JSON.stringify(returnData);
};
