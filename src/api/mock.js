import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { useTokenStore } from '../utils/pinia/StoreToken';
const tokenStore = useTokenStore();

// 創建 axios 實例
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1/api",
  timeout: 1000
});

// Header Token 設定
axiosInstance.interceptors.request.use((config) => {
  if (tokenStore.getSessionID) {
    config.headers['sessionID'] = tokenStore.getSessionID;
  }
  return config;
});

// 創建 Mock 實例
const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

// 登入
mock.onPost("/login").reply(config => {
  const { username, password } = JSON.parse(config.data);

  switch (username) {
    case "admin":
      if (password === "admin") {
        return [200, {code: 0, message: "登入成功", result: {sessionID: "MOCK_ADMIN_TOKEN"}}];
      }
      break;
    default:
      if (password === "1234") {
        return [200, {code: 0, message: "登入成功", result: {sessionID: "MOCK_TEST_TOKEN"}}];
      }
      break;
  }
  return [200, {code: 1, message: "登入失敗"}];
});

// 權限列表
mock.onGet("/permissions").reply(config => {
  // operate 1: 不可讀寫, 2: 可讀, 3: 可讀可寫
  const headers = config.headers;

  switch (headers["sessionID"]) {
    case "MOCK_ADMIN_TOKEN":
      return [200, {code: 0, message: "OK", result: {Form: 3, Table: 3}}];
    case "MOCK_TEST_TOKEN":
      return [200, {code: 0, message: "OK", result: {Form: 3, Table: 1}}];
    default:
      return [200, {code: 1, message: "Token 驗證錯誤"}];
  }
});

export default axiosInstance;
