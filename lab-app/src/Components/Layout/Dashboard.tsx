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
import type { MenuProps } from 'antd';
import { Layout, Menu, Typography, theme } from 'antd';
import { AnyNaptrRecord } from 'dns';
import HomeFormAndDialog from './HomeFormAndDialog';
import './layout.css';

const { Header, Content, Footer, Sider } = Layout;

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

const { Title } = Typography;
const DashBoard: React.FC = () => {
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
      };

//  end
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{ overflow: 'hidden', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <h3  style={{color:'#f5f5f5 !important'}} >Patient list</h3>
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} /> */}
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              height: '90vh'
            }}
          >
            <p>long content</p>
            <HomeFormAndDialog />
           
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