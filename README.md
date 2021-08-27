## 小程序原生框架模板
- 基于原生小程序进行封装

## 路由
- 采用vue-router的模式对路由进行重写


## 状态管理
- 采用vuex的思想把全局状态分模块


## 工具封装

- 针对一些常用的方法和小程序api进行封装，方便维护个管理


## 食用方法
- 路由、状态、工具已全部挂载到wx实例对象上


```js
//index.js文件

const app = getApp();

//获取全局方法

console.log(app.$store.user.uuid)

//使用全局方法

app.$util.storage('key','value')

app.$msg('提交成功！')

//路由跳转
app.$router.push('/pages/logs/logs')
```


## 请求封装

```js
//  /api/user.js
import request from "../utils/request.js";

export function login(data) {
    return request({
        url: "/api/user/login",
        method: "post",
        data,
    });
}

// page/index/index.js
import { login } from "../../api/user.js";

try {
        let res = await login({ username: '', password: '' });
        console.log(res);
     } catch (error) {}

```