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
import { Image, Drawer, Button, Row, Col } from 'antd';
// import data from '@/constant';
import { EyeOutlined, AudioOutlined, PauseOutlined } from '@ant-design/icons';
import Vditor from '@/pages/GuideApp/components/VditorInfo';
import './index.less';

type PlayStatus = 'play' | 'pause';

const DetailPage: React.FC = (): JSX.Element => {
  const [show, setShow] = React.useState<boolean>(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [playStatus, setPlayStatus] = React.useState<PlayStatus>('pause');

  const name = history.location.pathname.split('/').pop();
  React.useEffect(() => {
    console.log(`${ROOT_PATH}/${name}/index.md`);
  }, []);
  return (
    <div className={'detail__container'}>
      <div>
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
        >
          <Image src={`${ROOT_PATH}/${name}/index.jpg`} className="image" />
        </div>
        <Row justify="center">
          <Col span={10} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={() => {
                setShow(true);
              }}
              icon={<EyeOutlined />}
            >
              Show AR
            </Button>
          </Col>
          <Col span={10} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              icon={
                playStatus === 'play' ? <PauseOutlined /> : <AudioOutlined />
              }
              onClick={() => {
                if (playStatus === 'pause') {
                  audioRef.current?.play();
                  setPlayStatus('play');
                } else {
                  audioRef.current?.pause();
                  setPlayStatus('pause');
                }
              }}
            >
              {playStatus === 'play' ? '暂停' : '播放'}
            </Button>
          </Col>
        </Row>
        <Vditor mode="render" value={`${ROOT_PATH}/${name}/index.md`} />
      </div>
      <Drawer
        placement="top"
        visible={show}
        bodyStyle={{
          padding: 0,
        }}
        height="80vh"
        closable
        maskClosable
        onClose={() => setShow(false)}
      >
        <iframe
          srcDoc={getTemplate(name || '', ROOT_PATH)}
          frameBorder="0"
          className="ar-frame"
        ></iframe>
      </Drawer>
      <audio src={`${ROOT_PATH}/${name}/index.mp3`} ref={audioRef}></audio>
    </div>
  );
};

export default DetailPage;
