import util, { msg } from "./util";

// 请求域名 格式： https://您的域名
const baseUrl = "";

//promise封装一层，使得调用的时候直接用then和catch接收
const request = (opt = {}) => {
    //设置请求头,合并后返回一个新对象
    const editHeaders = Object.assign(
        {},
        {
            "content-type": "application/json",
        },
        opt.headers || {}
    );
    const isLoad = opt.isLoad !== undefined ? opt.isLoad : true;
    isLoad && util.showLoad("加载中");
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${baseUrl}${opt.url}`,
            data: opt.data || {},
            header: editHeaders,
            method: opt.method,
            success(res) {
                if (res.statusCode === 200) {
                    isLoad && util.hideLoad();
                    resolve(res.data);
                } else {
                    msg("sorry，网络开小差了");
                }
            },
            fail(err) {
                msg("sorry，网络开小差了");
                reject(err);
            },
        });
    });
};

export default request;
