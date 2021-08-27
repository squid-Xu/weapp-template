import request from "../utils/request.js";

export function login(data) {
    return request({
        url: "/api/user/login",
        method: "post",
        data,
    });
}
