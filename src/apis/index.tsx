/*
 * @Author: your name
 * @Date: 2021-03-20 21:18:12
 * @LastEditTime: 2021-03-21 01:31:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /guide-ar-front-end/src/apis/index.tsx
 */
import { AxiosRequestConfig } from 'axios';

export const ROOT_PATH = 'http://localhost:19999';

type Type = {
  [key: string]: AxiosRequestConfig;
};

const apis: Type = {
  getData: {
    url: ROOT_PATH + '/',
    method: 'GET',
  },
};

export default apis;
