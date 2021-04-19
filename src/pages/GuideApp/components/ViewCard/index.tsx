/*
 * @Author: your name
 * @Date: 2021-03-20 21:49:35
 * @LastEditTime: 2021-03-21 02:43:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /guide-ar-front-end/src/pages/GuideApp/components/ViewCard/index.tsx
 */
import * as React from 'react';
import apis from '@/apis';
import { Button, List, Image } from 'antd';
import data from '@/constant';
import { history } from 'umi';
import { EyeOutlined } from '@ant-design/icons';
import './index.less';

interface IViewCardProps {
  list: string[];
}

const ViewCard: React.FC<IViewCardProps> = (props): JSX.Element => {
  const { list } = props;
  const goto = (viewName: string) => {
    history.push('/guideApp/detail/' + viewName);
  };
  React.useEffect(() => {
    console.log(apis.getData);
  }, []);
  return (
    <div className="viewcard__wrap">
      <List>
        {list.map((item, index) => (
          <List.Item
            key={index}
            actions={[
              <Button
                size={'small'}
                type="primary"
                icon={<EyeOutlined />}
                className="card__item__btn"
                onClick={() => {
                  history.push('guideApp/detail/' + item);
                }}
              >
                进来看
              </Button>,
            ]}
          >
            <span className="card__item__title">{data[item].name}</span>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default ViewCard;
