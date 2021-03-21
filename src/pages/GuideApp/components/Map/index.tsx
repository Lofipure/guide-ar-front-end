import * as React from 'react';
import { Scene } from '@antv/l7';
import { CountryLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';
import { proviceMap } from './city';
import dataMap from './dataMap';
import PRODATA from './data';
import { Button, message, Modal } from 'antd';
import ViewCard from '../ViewCard';
import './index.less';

const MapTotal = () => {
  const [modalStaus, setModalStatus] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>();
  const [list, setList] = React.useState<string[]>([]);

  React.useEffect(() => {
    const scene = new Scene({
      id: 'map',
      logoVisible: false,
      map: new Mapbox({
        style: {},
        zoom: 4,
        maxZoom: 6,
        minZoom: 2,
      }),
    });
    scene.on('loaded', () => {
      new CountryLayer(scene, {
        fill: {
          color: 'rgba(16, 142, 233, 0.8)',
        },
        coastlineStroke: 'rgba(16, 142, 233, 0.5)',
        stroke: 'rgba(16, 142, 233, 0.)',
        provinceStroke: 'rgba(16, 142, 233, 0.5)',
        countyStroke: 'rgba(16, 142, 233, 0.5)',
        chinaNationalStroke: 'rgba(16, 142, 233, 0.5)',
        nationalStroke: 'rgba(16, 142, 233, 0.5)',
        joinBy: ['NAME_CHN', 'name'],
        onClick: (item) => {
          let targetObjName = dataMap.filter(
            (ele) => ele.code == item.feature.properties.adcode,
          )[0].name;
          let targetIndex = proviceMap.findIndex((ele) => ele == targetObjName);
          if (PRODATA[targetIndex] != undefined) {
            setModalStatus(true);
            setTitle(targetObjName);
            setList(PRODATA[targetIndex]);
          } else {
            message.warning(`${targetObjName} 暂无录入景点`);
          }
        },
        popup: {
          enable: false,
        },
        depth: 1,
      });
    });
  }, []);
  return (
    <div>
      <div id="map"></div>
      <Modal
        title={title}
        visible={modalStaus}
        footer={[
          <Button
            type="primary"
            onClick={() => {
              setModalStatus(false);
            }}
          >
            关闭
          </Button>,
        ]}
      >
        <ViewCard list={list} />
      </Modal>
    </div>
  );
};

export default MapTotal;
