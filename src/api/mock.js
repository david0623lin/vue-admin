import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// 創建 axios 實例
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1/api",
  timeout: 1000
});

// 創建 Mock 實例
const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

// 登入
mock.onPost("/login").reply(config => {
  const { username, password } = JSON.parse(config.data);

  if (username === "root" && password === "1234") {
    return [
      200,
      {
        code: 0,
        message: "登入成功",
        result: {
          token: "MOCK_LOGIN_TOKEN"
        }
      }
    ];
  } else {
    return [
      200,
      {
        code: 1,
        message: "登入失敗",
        result: {
          token: ""
        }
      }
    ];
  }
});

// 路由列表
mock.onGet("/routes").reply(200, {
  code: 0,
  message: "OK",
  result: [
    {
      path: "/",
      name: "Dashboard",
    },
    {
      path: "/404",
      name: "404",
    }
  ]
});

export default axiosInstance;
