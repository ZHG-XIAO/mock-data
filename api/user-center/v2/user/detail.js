
exports.getData = function (method, data) {
    var returnData = {
        "retCode": "00",
        "retMsg": "成功",
        "tid": "470.17238840158150011",
        "username": "zhangsan",
        "name": "张三",
        "status": 1,
        "orgNo": "399999",
        "email": "yangyunjingnb@abchina.com",
        "photo": "http://30.30.0.2:9000/system/%E9%87%91%E5%BA%93%E4%BA%BA%E5%91%98_39999988_%E6%9D%A8%E4%BA%91%E9%9D%96_20230825182600.jpg",
        "roleList": [
        {
            "no": 10001,
            "name": "中枢系统管理员",
            "orgGradeNo": 3,
            "note": "系统管理员"
        }
    ],
        "postDetailList": [
        {
            "postNo": "10001",
            "postName": "超级管理",
            "postType": 1,
            "note": "备注"
        }
    ],
        "sysOrg": {
        "orgNo": "399999",
            "name": "江苏省总行",
            "leftOrg": 1,
            "rightOrg": 346,
            "orgGradeNo": 3,
            "status": 1,
            "x": "116.3712901881",
            "y": "39.9137454253",
            "address": "",
            "clrCenterNo": "",
            "clrCenterFlag": 0,
            "accountFlag": 1,
            "accountNo": "CN0011001",
            "lineNo": "2"
    },
        "menuList": [
        {
            "no": "A",
            "name": "系统管理",
            "menuFather": "0",
            "menuOrder": 6,
            "icon": "icon-setting",
            "buttonTag": "0"
        },
        {
            "no": "A01",
            "name": "角色信息管理",
            "menuFather": "A",
            "url": "/user-center/role-manage",
            "menuOrder": 3,
            "icon": "icon-role",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "A0101",
            "name": "角色添加",
            "menuFather": "A01",
            "buttonTag": "1"
        },
        {
            "no": "A0102",
            "name": "角色修改",
            "menuFather": "A01",
            "buttonTag": "1"
        },
        {
            "no": "A0103",
            "name": "角色删除",
            "menuFather": "A01",
            "buttonTag": "1"
        },
        {
            "no": "A0104",
            "name": "角色查询",
            "menuFather": "A01",
            "buttonTag": "1"
        },
        {
            "no": "A02",
            "name": "机构信息管理",
            "menuFather": "A",
            "url": "/user-center/org-manage",
            "menuOrder": 2,
            "icon": "icon-organization",
            "backgroundColor": "3",
            "buttonTag": "0"
        },
        {
            "no": "A0201",
            "name": "机构修改",
            "menuFather": "A02",
            "buttonTag": "1"
        },
        {
            "no": "A0202",
            "name": "机构添加",
            "menuFather": "A02",
            "buttonTag": "1"
        },
        {
            "no": "A0203",
            "name": "机构查询",
            "menuFather": "A02",
            "buttonTag": "1"
        },
        {
            "no": "A0204",
            "name": "机构删除",
            "menuFather": "A02",
            "buttonTag": "1"
        },
        {
            "no": "A03",
            "name": "用户信息管理",
            "menuFather": "A",
            "url": "/user-center/user-manage",
            "menuOrder": 1,
            "icon": "icon-user",
            "backgroundColor": "2",
            "buttonTag": "0"
        },
        {
            "no": "A0301",
            "name": "用户添加",
            "menuFather": "A03",
            "menuOrder": 0,
            "buttonTag": "1"
        },
        {
            "no": "A0302",
            "name": "用户修改",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A0303",
            "name": "用户删除",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A0304",
            "name": "用户查询",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A0305",
            "name": "管理员重置密码",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A0306",
            "name": "查询全部岗位信息",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A0307",
            "name": "用户认证",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A0308",
            "name": "添加用户认证信息",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A0309",
            "name": "删除用户认证信息",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A0310",
            "name": "获取当前登录用户信息",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A0311",
            "name": "删除用户（逻辑删除）",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A0312",
            "name": "启用用户",
            "menuFather": "A03",
            "buttonTag": "1"
        },
        {
            "no": "A10",
            "name": "参数配置管理",
            "menuFather": "A",
            "url": "/param-config",
            "menuOrder": 8,
            "icon": "icon-warehouse-info",
            "backgroundColor": "2",
            "buttonTag": "0"
        },
        {
            "no": "A1001",
            "name": "参数配置查询",
            "menuFather": "A10",
            "buttonTag": "1"
        },
        {
            "no": "A11",
            "name": "记录查询",
            "menuFather": "A",
            "url": "",
            "menuOrder": 8,
            "icon": "icon-operation-record",
            "backgroundColor": "",
            "buttonTag": "0"
        },
        {
            "no": "B",
            "name": "设备中心",
            "menuFather": "0",
            "menuOrder": 3,
            "icon": "icon-config",
            "buttonTag": "0"
        },
        {
            "no": "B04",
            "name": "设备管理",
            "menuFather": "B",
            "url": "/device-manage",
            "menuOrder": 3,
            "icon": "icon-remote-operation",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "B0401",
            "name": "设备信息查询",
            "menuFather": "B04",
            "buttonTag": "1"
        },
        {
            "no": "B05",
            "name": "版本管理",
            "menuFather": "B",
            "url": "/config-center/version-manage",
            "menuOrder": 4,
            "icon": "icon-version-manage",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "B0501",
            "name": "版本信息查询",
            "menuFather": "B05",
            "buttonTag": "1"
        },
        {
            "no": "D",
            "name": "预警中心",
            "menuFather": "0",
            "menuOrder": 9,
            "icon": "icon-warning",
            "buttonTag": "0"
        },
        {
            "no": "D01",
            "name": "预警信息查询",
            "menuFather": "D",
            "url": "/warning-query",
            "menuOrder": 1,
            "icon": "icon-warning-search",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "D0101",
            "name": "预警信息查询",
            "menuFather": "D01",
            "url": "",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "",
            "buttonTag": "1"
        },
        {
            "no": "D0102",
            "name": "预警信息处理",
            "menuFather": "D01",
            "url": "",
            "icon": "",
            "backgroundColor": "",
            "buttonTag": "1"
        },
        {
            "no": "D02",
            "name": "设备监控",
            "menuFather": "D",
            "url": "/device-monitor",
            "menuOrder": 2,
            "icon": "icon-monitor",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "D0201",
            "name": "监控信息查询",
            "menuFather": "D02",
            "url": "",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "",
            "buttonTag": "1"
        },
        {
            "no": "E01",
            "name": "操作日志查询",
            "menuFather": "A11",
            "url": "/record-center/log-manage",
            "menuOrder": 1,
            "icon": "icon-operation-record",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "E0101",
            "name": "操作日志查询",
            "menuFather": "E01",
            "url": "",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "",
            "buttonTag": "1"
        },
        {
            "no": "E02",
            "name": "业务记录查询",
            "menuFather": "A11",
            "url": "/record-center/operation-record",
            "menuOrder": 2,
            "icon": "icon-business-record",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "E0201",
            "name": "记录查询",
            "menuFather": "E02",
            "url": "",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "",
            "buttonTag": "1"
        },
        {
            "no": "E03",
            "name": "版本下发记录查询",
            "menuFather": "A11",
            "url": "/record-center/release-record",
            "menuOrder": 3,
            "icon": "icon-version-record",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "E0301",
            "name": "记录查询",
            "menuFather": "E03",
            "url": "",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "",
            "buttonTag": "1"
        },
        {
            "no": "S",
            "name": "仓储中心",
            "menuFather": "0",
            "menuOrder": 2,
            "icon": "icon-storage-manage",
            "buttonTag": "0"
        },
        {
            "no": "S01",
            "name": "库房信息维护",
            "menuFather": "S",
            "url": "",
            "menuOrder": 3,
            "icon": "icon-warehouse",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S0101",
            "name": "库房管理",
            "menuFather": "S01",
            "url": "/storeroom-manage",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S010101",
            "name": "分页查询库房信息",
            "menuFather": "S0101",
            "buttonTag": "1"
        },
        {
            "no": "S010102",
            "name": "新增库房信息",
            "menuFather": "S0101",
            "buttonTag": "1"
        },
        {
            "no": "S010103",
            "name": "修改库房信息",
            "menuFather": "S0101",
            "buttonTag": "1"
        },
        {
            "no": "S010104",
            "name": "删除库房信息",
            "menuFather": "S0101",
            "buttonTag": "1"
        },
        {
            "no": "S010105",
            "name": "查询所有库房",
            "menuFather": "S0101",
            "buttonTag": "1"
        },
        {
            "no": "S0102",
            "name": "库区管理",
            "menuFather": "S01",
            "url": "/area-manage",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S010201",
            "name": "查询库区信息",
            "menuFather": "S0102",
            "buttonTag": "1"
        },
        {
            "no": "S010202",
            "name": "新增库区信息",
            "menuFather": "S0102",
            "buttonTag": "1"
        },
        {
            "no": "S010203",
            "name": "修改库区信息",
            "menuFather": "S0102",
            "buttonTag": "1"
        },
        {
            "no": "S010204",
            "name": "删除库区信息",
            "menuFather": "S0102",
            "buttonTag": "1"
        },
        {
            "no": "S0103",
            "name": "库位管理",
            "menuFather": "S01",
            "url": "/location-manage",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S010301",
            "name": "增加库位信息",
            "menuFather": "S0103",
            "backgroundColor": "",
            "buttonTag": "1",
            "button": ""
        },
        {
            "no": "S010302",
            "name": "修改库位信息",
            "menuFather": "S0103",
            "backgroundColor": "",
            "buttonTag": "1",
            "button": ""
        },
        {
            "no": "S010303",
            "name": "删除库位信息",
            "menuFather": "S0103",
            "backgroundColor": "",
            "buttonTag": "1",
            "button": ""
        },
        {
            "no": "S010304",
            "name": "查询库位信息",
            "menuFather": "S0103",
            "backgroundColor": "",
            "buttonTag": "1",
            "button": ""
        },
        {
            "no": "S0104",
            "name": "货架管理",
            "menuFather": "S01",
            "url": "/shelf-manage",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S010401",
            "name": "查询货架",
            "menuFather": "S0104",
            "buttonTag": "1"
        },
        {
            "no": "S010402",
            "name": "新增货架",
            "menuFather": "S0104",
            "buttonTag": "1"
        },
        {
            "no": "S010403",
            "name": "修改货架",
            "menuFather": "S0104",
            "buttonTag": "1"
        },
        {
            "no": "S010404",
            "name": "删除货架",
            "menuFather": "S0104",
            "buttonTag": "1"
        },
        {
            "no": "S0105",
            "name": "料箱管理",
            "menuFather": "S01",
            "url": "/matbox-manage",
            "menuOrder": 1,
            "icon": "icon-operation-record",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S010501",
            "name": "添加料箱信息",
            "menuFather": "S0105",
            "backgroundColor": "",
            "buttonTag": "1",
            "button": ""
        },
        {
            "no": "S010502",
            "name": "删除料箱信息",
            "menuFather": "S0105",
            "backgroundColor": "",
            "buttonTag": "1",
            "button": ""
        },
        {
            "no": "S010503",
            "name": "修改料箱信息",
            "menuFather": "S0105",
            "backgroundColor": "",
            "buttonTag": "1",
            "button": ""
        },
        {
            "no": "S010504",
            "name": "分页查询料箱信息",
            "menuFather": "S0105",
            "backgroundColor": "",
            "buttonTag": "1",
            "button": ""
        },
        {
            "no": "S02",
            "name": "库存管理",
            "menuFather": "S",
            "url": "",
            "menuOrder": 2,
            "icon": "icon-search",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S0201",
            "name": "库存查询",
            "menuFather": "S02",
            "url": "/inventory-search",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S020101",
            "name": "库存明细查询",
            "menuFather": "S0201",
            "buttonTag": "1"
        },
        {
            "no": "S0202",
            "name": "历史库存",
            "menuFather": "S02",
            "url": "/history-inventory",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S020201",
            "name": "库存信息查询",
            "menuFather": "S0202",
            "buttonTag": "1"
        },
        {
            "no": "S0203",
            "name": "库存预测",
            "menuFather": "S02",
            "url": "/inventory-forecast",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S020301",
            "name": "库存预测信息查询",
            "menuFather": "S0203",
            "buttonTag": "1"
        },
        {
            "no": "S03",
            "name": "仓储管理",
            "menuFather": "S",
            "url": "",
            "menuOrder": 1,
            "icon": "icon-warehouse",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S0301",
            "name": "盘库任务",
            "menuFather": "S03",
            "url": "/inventory-manage/inventory-task",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S030101",
            "name": "创建盘库任务",
            "menuFather": "S0301",
            "buttonTag": "1"
        },
        {
            "no": "S030102",
            "name": "分页查询任务",
            "menuFather": "S0301",
            "buttonTag": "1"
        },
        {
            "no": "S0302",
            "name": "上下架任务",
            "menuFather": "S03",
            "url": "/up-down-task",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S030201",
            "name": "订单任务查询",
            "menuFather": "S0302",
            "buttonTag": "1"
        },
        {
            "no": "S04",
            "name": "物料信息维护",
            "menuFather": "S",
            "url": "",
            "menuOrder": 4,
            "icon": "icon-warehouse",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S0401",
            "name": "现金重量信息维护",
            "menuFather": "S04",
            "url": "/cash-manage",
            "menuOrder": 2,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S040101",
            "name": "现金重量信息查询",
            "menuFather": "S0401",
            "buttonTag": "1"
        },
        {
            "no": "S040102",
            "name": "添加现金重量信息",
            "menuFather": "S0401",
            "buttonTag": "1"
        },
        {
            "no": "S040103",
            "name": "修改现金重量信息",
            "menuFather": "S0401",
            "buttonTag": "1"
        },
        {
            "no": "S040104",
            "name": "删除现金重量信息",
            "menuFather": "S0401",
            "buttonTag": "1"
        },
        {
            "no": "S0402",
            "name": "物料SKU信息维护",
            "menuFather": "S04",
            "url": "/sku-manage",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "S040201",
            "name": "SKU信息查询",
            "menuFather": "S0402",
            "buttonTag": "1"
        },
        {
            "no": "T",
            "name": "订单中心",
            "menuFather": "0",
            "menuOrder": 1,
            "icon": "icon-config",
            "buttonTag": "0"
        },
        {
            "no": "T01",
            "name": "订单管理",
            "menuFather": "T",
            "url": "",
            "menuOrder": 1,
            "icon": "icon-warehouse",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "T0101",
            "name": "现金订单",
            "menuFather": "T01",
            "url": "/cash-allocation",
            "menuOrder": 1,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "T010101",
            "name": "创建订单",
            "menuFather": "T0101",
            "buttonTag": "1"
        },
        {
            "no": "T0102",
            "name": "贵金属订单",
            "menuFather": "T01",
            "url": "/gjs-allocation",
            "menuOrder": 2,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "T010201",
            "name": "创建订单",
            "menuFather": "T0102",
            "buttonTag": "1"
        },
        {
            "no": "T0103",
            "name": "凭证订单",
            "menuFather": "T01",
            "url": "/pz-allocation",
            "menuOrder": 3,
            "icon": "",
            "backgroundColor": "1",
            "buttonTag": "0"
        },
        {
            "no": "T010301",
            "name": "创建订单",
            "menuFather": "T0103",
            "buttonTag": "1"
        }
    ],
        "sex": 2,
        "idCard": "330222197405220026",
        "loginType": 3,
        "fingerData": "AwFjG4UA//7gBsACwAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAgAAAAAAAAAAAAAAAAAAAAAxlpqeYhdUHhI1lpZkt1ReIrlWnlNDlN5hC1R/NQxb/1WSVh8XlRv3GiPZ3zqwlV9TsasfMrJr3ze31Z9NO1R/PUGUf07AKpwtqRgaFbls+hS8lXoevxXyLatAGxk/bHJLLNY5S66UdkKjlxUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBXReDAP/+wALAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAIAAAAAAAAAAAAAAAAAAAAAbogR/jsN3Z4wkZzeFBdb3i2bGx5enRQ+GTxWvls9VN5qQWqAwFaGYZi4A7ABsACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgALABgAAAACGAAMpYlIfAQAZHwMdCSteXhpZXjIdlF44ohSeQ62SnmM0CJ40BBY/KBFUn1ySGP8hI6n/QifUfySxDh9ZN9y/ZpTaHD8JFho8CsB6PjKOOki3R9o/uMk6YJZDG1A/nzhEsoJZQzYI2VHCX9VRwt5VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBWhmGYuAOwAbAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACwAYAAAAAhgADKWJSHwEAGR8DHQkrXl4aWV4yHZReOKIUnkOtkp5jNAieNAQWPygRVJ9ckhj/ISOp/0In1H8ksQ4fWTfcv2aU2hw/CRYaPArAej4yjjpIt0faP7jJOmCWQxtQP584RLKCWUM2CNlRwl/VUcLeVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="

    };
    if (method === 'DELETE') {
        returnData = {
            "retCode": '999999',
            "retMsg": "不支持DELETE方法"
        }
    }
    return JSON.stringify(returnData);
};
