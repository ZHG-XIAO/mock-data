
var userInfo = {
    access_token: 'token123',
    userNo: 'admin',
    menuList: [
        {
            text: '一级菜单1',
            link: '/dashboard',
            icon: {type: 'icon', value: 'appstore'},
            children: [
                {
                    text: '二级菜单1',
                    link: '/dashboard1',
                    icon: {type: 'icon', value: 'appstore'},
                },
                {
                    text: '二级菜单2',
                    link: '/dashboard2',
                    icon: {type: 'icon', value: 'rocket'},
                },
                {
                    text: '二级菜单3',
                    link: '/dashboard2',
                    // icon: {type: 'icon', value: 'rocket'},
                }
            ]
        },
        {
            text: '一级菜单2',
            icon: {type: 'icon', value: 'rocket'},
            link: '/dashboard2',
        }
    ]
};


exports.getData = function (method, data) {
    var returnData = {
        retCode: '000000',
        retMsg: "成功",
        element: userInfo
    };
    if (method === 'DELETE') {
        returnData = {
            "retCode": '999999',
            "retMsg": "不支持DELETE方法"
        }
    }
    return JSON.stringify(returnData);
};
