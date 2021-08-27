// index.js
// 获取应用实例
const app = getApp();

Page({
    data: {
        loc: null,
    },

    async onLoad() {
        await app.getLocation();
        this.setData({
            loc: app.$store.location,
        });
    },
});
