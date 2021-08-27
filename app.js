import router from "./router/index";
import store from "./store/index";
import util, { msg } from "./utils/util";

App({
    onLaunch() {
        console.log(util, 456);
        // 展示本地存储能力
        const logs = util.storage("logs") || [];
        logs.unshift(Date.now());
        util.storage("logs", logs);
    },

    //获取定位信息
    getLocation() {
        return new Promise(async resolve => {
            try {
                let res = await wx.getLocation({
                    type: "wgs84",
                });
                Object.assign(store.location, res);
                resolve();
            } catch (error) {
                msg("位置获取失败");
            }
        });
    },

    //挂载全局实例
    $store: store, //状态管理
    $router: router, //路由管理
    $util: util, //方法
    $msg: msg, //toast提示
});
