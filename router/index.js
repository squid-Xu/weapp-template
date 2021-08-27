/**
 * 页面传参问题：
 * 1、参数简单：直接拼接在url后面，例如: '/page/index/index?id=1234'
 * 2、参数包含对象：需要把要传的数据转成json字符串（JSON.stringify），然后在下个页面把它转回json数据（JSON.parse）
 * 3、假如json字符串中包含了类似?、&之类的符号，可能导致我们参数解析出错，所以我们要把json字符串encode一下：
 * -、例如：encodeURIComponent(JSON.stringify(data))，JSON.parse(decodeURIComponent(options.encodedData))
 */

//tabbar页面
const whiteList = ["/pages/index/index", "/pages/logs/logs"];

/**
 * 保留当前页面，跳转到应用内的某个页面
 * 使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层(后续项目复杂需要处理这种情况)
 * @param {*} path '/pages/index/index'
 */
const push = path => {
    if (whiteList.indexOf(path) !== -1) {
        wx.switchTab({
            url: path, // 注意tab页面是不支持传参的
        });
    } else {
        wx.navigateTo({
            url: path,
        });
    }
};

/**
 * 关闭当前页面，返回上一页面或多级页面。
 * 可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
 * @param {*} number
 */
const pop = number => {
    wx.navigateBack({
        delta: number,
    });
};

/**
 * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
 * @param {*} path
 */
const replace = path => {
    wx.redirectTo({
        url: path,
    });
};

/**
 * 关闭所有页面，打开到应用内的某个页面，
 * 谨慎使用：相当于重载小程序
 * @param {*} path
 */
const relaunch = path => {
    wx.reLaunch({
        url: path,
    });
};

export default {
    push,
    pop,
    replace,
    relaunch,
};
