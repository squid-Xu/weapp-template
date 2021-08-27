// storage 读写
const storage = (key, val) => {
    try {
        if (!key || typeof key !== "string") {
            throw new Error("key must be a String");
        }
        if (val != undefined) {
            wx.setStorageSync(key, val);
        } else {
            let value = wx.getStorageSync(key);
            return value;
        }
    } catch (error) {
        console.log(error);
    }
};

// storage 删除
const removeStorage = key => {
    if (key == undefined) {
        return;
    }
    wx.removeStorageSync(key);
};

// 提示 可单独导入
export const msg = (text, time = 2000) => {
    if (text && typeof text === "string") {
        wx.showToast({
            title: text,
            icon: "none",
            duration: time,
        });
    }
};

// 显示加载框
const showLoad = (text = "加载中...") => {
    if (text && typeof text === "string") {
        wx.showLoading({
            title: text,
            mask: true,
        });
    }
};

// 隐藏加载框
const hideLoad = () => wx.hideLoading();

// 格式化时间  date时间对象  fmt时间格式 如yyyy/MM/dd hh:mm:ss
const FmtTime = (date, fmt) => {
    var o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp(`(${k})`).test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
            );
    return fmt;
};

//隐藏手机号中间四位
const hidePhone = val => {
    return val.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
};

/**
 * 尽量把公共的方法提取出来，后续优化更容易
 */
export default {
    storage,
    removeStorage,
    showLoad,
    hideLoad,
    FmtTime,
    hidePhone
};
