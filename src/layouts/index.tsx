import React from 'react';
import { history } from 'umi';
import { Layout } from 'antd';
import { LeftOutlined, HomeOutlined } from '@ant-design/icons';
import './index.less';

const { Header, Content } = Layout;
interface ILayoutProps {
  children: JSX.Element;
}
const RootLayout: React.FC<ILayoutProps> = (props): JSX.Element => {
  const path = history.location.pathname.split('/').pop();
  console.log(path);
  return (
    <Layout>
      {path && (
        <Header className="layout__header">
          {path === 'guideApp' ? (
            <HomeOutlined className="layout__header__icon" />
          ) : (
            <LeftOutlined
              className="layout__header__icon"
              onClick={() => history.push('/guideApp')}
            />
          )}
          AR 自助导游
        </Header>
      )}
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default RootLayout;
