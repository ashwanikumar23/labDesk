import React, { useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import patientsDB from './DB/PatientDB.json'
import type { MenuProps } from 'antd';
import { Divider, Layout, Menu, Typography, theme } from 'antd';
import HomeFormAndDialog from './HomeFormAndDialog';
import './layout.css';
import PatientList from './PatientList';

const {  Content, Footer, Sider } = Layout;
//const { Title } = Typography;

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const DashBoard: React.FC = () => {
  console.log("p",patientsDB);
    // form use state 
    const [Dr,setDr]=useState([{
        id:1,
        Name:'IK solution'
    }]);
    const [materials,setMaterials]=useState([{
        id:1,
        Name:'IK solution'
    },
    {
        id:2,
        Name:'IK solution'
    },
    {
        id:3,
        Name:'IK solution'
    },
    {
        id:4,
        Name:'IK solution'
    }]);
    const [object,setObject]=useState({
        date: '',
        time:'',
        RecivedDate:'',
        Recivedtime:'',
        prefix:'',
        name: '',
        address: '',
        age: '',
        gender: '',
        mobileNumber: '',
        labNumber: '',
        materials:'',
        referance:''



    });
    const handleChange = (e:any) => {
        const { name, value } = e.target; // Get input name and value
        setObject((prevState) => ({
          ...prevState,
          [name]: value, // Update the right field in state
        }));
        console.log(object);
      };

//  end
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider width='250px'
        style={{ overflow: 'hidden', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <h3  style={{color:'#f5f5f5 !important'}} >Patient list</h3>
        <PatientList patientsDB={patientsDB} />
      </Sider>
      <Layout style={{ marginLeft: 250 }}>

        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              height: '88vh'
            }}
          >
            <div style={{height:'10px',widows:'70%'}} />
            <Divider />
            <HomeFormAndDialog object={object} handleChange={handleChange}/>
           
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          LABDESK ©{new Date().getFullYear()} Created by Ashwani(IK solution)
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
