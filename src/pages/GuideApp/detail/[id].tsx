/*
 * @Author: your name
 * @Date: 2021-03-20 23:04:47
 * @LastEditTime: 2021-03-21 02:50:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /guide-ar-front-end/src/pages/GuideApp/detail/[id].tsx
 */
import * as React from 'react';
import { history } from 'umi';
import { ROOT_PATH } from '@/apis';
import getTemplate from './temp';
import data from '@/constant';
import './index.less';

const DetailPage: React.FC = (): JSX.Element => {
  const name = history.location.pathname.split('/').pop();
  return (
    <div className={'detail__container'}>
      <div>{data[name || ''].name}</div>
      <iframe
        srcDoc={getTemplate(name || '', ROOT_PATH)}
        frameBorder="0"
        className="ar-frame"
      ></iframe>
    </div>
  );
};

export default DetailPage;
