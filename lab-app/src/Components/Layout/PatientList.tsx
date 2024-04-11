import React, { useEffect, useState } from 'react';
import './layout.css';
import { Avatar, Button, List, Skeleton, Space, Typography } from 'antd';
import { AnyNsRecord } from 'dns';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const { Title } = Typography;
const PatientList: React.FC<any> = (props:any) => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    // fetch(fakeDataUrl)
    //   .then((res) => res.json())
    //   .then((res) => {
        setInitLoading(false);
        setData(props.patientsDB);
        setList(props.patientsDB);
      // });
  }, []);

  // const onLoadMore = () => {
  //   setLoading(true);
  //   setList(
  //     data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))),
  //   );
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const newData = data.concat(props.patientsDB);
  //       setData(newData);
  //       setList(newData);
  //       setLoading(false);
  //       // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
  //       // In real scene, you can using public method of react-virtualized:
  //       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
  //       window.dispatchEvent(new Event('resize'));
  //     });
  // };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        {/* <Button onClick={onLoadMore}>loading more</Button> */}
      </div>
    ) : null;

  return (
    <List
      size="small"
      // header={<div>Header</div>}
      style={{marginLeft:'4px',marginRight:'4px', background: 'aliceblue'}}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item:any) => <List.Item><Space> <div style={{width:'140px'}}>{item.name}</div> <div><EditFilled /></div> <div><DeleteFilled /></div></Space></List.Item>}
    />
  );
};

export default PatientList;