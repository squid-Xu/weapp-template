// logs.js
const app = getApp();
Page({
    data: {
        logs: [],
    },
    onLoad() {
        this.setData({
            logs: (app.$util.storage("logs") || []).map(log => {
                return {
                    date: app.$util.FmtTime(new Date(log), "yyyy/MM/dd hh:mm:ss"),
                    timeStamp: log,
                };
            }),
        });
    },
});
