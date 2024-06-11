import React, { useEffect, useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Divider, Layout, Menu, theme } from 'antd';
import RightSideCard from '../rightSideCard/rightSideCard';
import PatientList from '../../Components/Layout/PatientList';
import SideCard from '../rightSideCard/Card';
import EnterForm from '../../Pages/CenterPage';
import IEnterForm from '../Interface/All-interface';

const { Header, Content, Footer, Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
interface ILayout {
  InitialData: IEnterForm,
  clickLogin:any,
}

// const loadInitialData = (): IEnterForm => {
//   const savedData = localStorage.getItem('formData');
//   return savedData ? JSON.parse(savedData) : initialData;
// };
export default function DesktopLayout({ InitialData,clickLogin }: ILayout) {
  const [id, setId] = useState(0);
  const [disabled, setDisabled] = useState(true);
///Main Data Store state 
  const [formData, setFormData] = useState<IEnterForm[]>([InitialData]);

  useEffect(()=>{
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData) as IEnterForm[];
      setFormData(parsedData)
      console.log("use",parsedData);
    }

  },[])

  const saveFormData = (newFormData: IEnterForm) => {
    setFormData((prevFormData: IEnterForm[]) => {
      const existingIndex = prevFormData.findIndex(formData => formData.id === newFormData.id);
      let updatedFormData;
  
      if (existingIndex !== -1) {
        // If the id exists, update the existing entry
        updatedFormData = [
          ...prevFormData.slice(0, existingIndex),
          newFormData,
          ...prevFormData.slice(existingIndex + 1),
        ];
      } else {
        // If the id does not exist, add new entry
        updatedFormData = [...prevFormData, newFormData];
      }
  
      // Save updated data to local storage
      localStorage.setItem('formData', JSON.stringify(updatedFormData));
      return updatedFormData;
    });
    //localStorage.setItem('formData', JSON.stringify(formData));
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const resposiveHeight = '100vh';

  useEffect(() => {
    if (id === 0) {
      setId(Math.floor(Math.random() * 10000));
      setDisabled(false);
    }
    console.log(id);
  }, []);

  const createID = () => {
    setId(Math.floor(Math.random() * 10000));
    console.log(id);
    setDisabled(false);
  }

  return (
    <Layout style={{ height: "100%", backgroundColor: '#f1f1fa' }}>
      <Sider
        style={{ backgroundColor: '#fff', width: '350px', height: '100vh', position: 'sticky', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <div style={{ textAlign: "center", color: "#222b53", height: "50px", width: "100%", fontWeight: "600", padding: "10px 0px " }}><strong>LAB DESK</strong></div>
        {/* Add Manu */}
        <PatientList patient={formData} />
        <Divider style={{ margin: "5px 0px", padding: "0px 0px" }} />
        <RightSideCard />
        {/* <Menu theme="dark" mode="inline" style={{ backgroundColor:'#fff', color:"black"}} defaultSelectedKeys={['4']} items={items} /> */}
      </Sider>
      <Layout style={{ backgroundColor: '#f1f1fa' }}>
        <div style={{ display: "flex", height: "100vh" }}>
          <div style={{ width: "70%" }}>
            <EnterForm id={id} createId={createID} saveData={saveFormData} initalData={formData} />
          </div>
          <div style={{ width: "30%" }}>
            <SideCard id={id} disabled={disabled} saveData={saveFormData} InitialData={InitialData} />
          </div>

        </div>

        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
