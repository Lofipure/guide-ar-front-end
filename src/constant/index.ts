/*
 * @Author: your name
 * @Date: 2021-03-20 22:30:39
 * @LastEditTime: 2021-03-21 01:45:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /guide-ar-front-end/src/constant/index.ts
 */
interface IDataProps {
  name: string;
}

type DataType = {
  [key: string]: IDataProps;
};

const data: DataType = {
  castle_town: {
    name: '高级城堡',
  },
  chinese_fantasy: {
    name: '中国古典建筑',
  },
  four_ground: {
    name: '四合院',
  },
};

export default data;
