import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, List, Skeleton } from 'antd';
import { Padding } from '@mui/icons-material';
import { EditOutlined } from '@ant-design/icons';
// import DB from './DB/PatientDB.json'
import IEnterForm from '../../shared/Interface/All-interface';

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

interface IPatient{
  patient:IEnterForm[];
}
export default function PatientList({patient}:IPatient) {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IEnterForm[]>();
  const [list, setList] = useState<IEnterForm[]>();
  
  const [patients, setPatients] = useState<IEnterForm[]|null>(patient);
  const [displayedCount, setDisplayedCount] = useState(0);

  const [users, setUsers] = useState([]);

  const loadMorePatients = () => {
    const newDisplayedCount = displayedCount + 5;
    const morePatients = patient.slice(1, newDisplayedCount);
    setInitLoading(false);
    setData(morePatients);
    setList(morePatients);
    // setPatients((prevPatients) => [...prevPatients, ...morePatients]);
    setDisplayedCount(newDisplayedCount);
    console.log(patients);
  };


  useEffect(() => {
    const storedData = localStorage.getItem('patientData');
    console.log(storedData)
    if (storedData) {
      const parsedData = JSON.parse(storedData) as IEnterForm[];
      setPatients(parsedData)
    }
    loadMorePatients();   
    // fetch(fakeDataUrl)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setInitLoading(false);
    //     setData(res.results);
    //     setList(res.results);
    //   });
  }, []);
  // useEffect(() => {
  //   const storedData = localStorage.getItem('patientData');
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData) as IEnterForm[];
  //     setData(parsedData);
  //     setList(parsedData.slice(0, displayedCount + 5));
  //     setDisplayedCount(displayedCount + 5);
  //     setInitLoading(false);
  //   } else {
  //     loadMorePatients();
  //   }
  // }, []);

  const onLoadMore = () => {
    loadMorePatients();

  //   setLoading(true);
  //   setList(
  //     data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))),
  //   );
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const newData = data.concat(res.results);
  //       setData(newData);
  //       setList(newData);
  //       setLoading(false);
  //       // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
  //       // In real scene, you can using public method of react-virtualized:
  //       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
  //       window.dispatchEvent(new Event('resize'));
  //     });
  };

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
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <>
    <Divider style={{padding:"0px",margin:"0px"}} />
    <div style={{padding:"4px 0px",textAlign:"center",alignSelf:"center"}}> <strong>List</strong></div>
    <Divider style={{padding:"0px",margin:"0px"}} />
    <List
    style={{width:"100%",padding:"1px 8px"}}
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<Button shape="circle" icon={<EditOutlined />} />]}
        >
          <Skeleton avatar title={false} loading={initLoading} active>
            <List.Item.Meta
             
              title={<a href="https://ant.design">{item.name}</a>}
             
            />
           
          </Skeleton>
        </List.Item>
      )}
    />
    </>
  );
};

