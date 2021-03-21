/*
 * @Author: your name
 * @Date: 2021-03-14 08:49:25
 * @LastEditTime: 2021-03-21 01:39:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /guide-ar-front-end/src/pages/GuideApp/index.tsx
 */
import * as React from 'react';
import MapComponents from './components/Map';
import styles from './index.less';
import { message } from 'antd';

const GuideApp = () => {
  const onClickEllipsis = () => {
    message.success('AR 自助导游');
  };
  return (
    <div className={styles['app']}>
      {/* <NavBar mode="dark" rightContent={[
      <Icon type="ellipsis" onClick={onClickEllipsis}/>
    ]}>AR 自助导游</NavBar> */}
      <MapComponents />
    </div>
  );
};

export default GuideApp;
