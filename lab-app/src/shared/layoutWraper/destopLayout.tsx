import React, { useEffect, useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Divider, Layout, Menu, theme } from 'antd';
import RightSideCard from '../rightSideCard/rightSideCard';
import PatientList from '../../Components/Layout/PatientList';
import SideCard from '../rightSideCard/Card';
import EnterForm from '../../Pages/CenterPage';
import IEnterForm from '../Interface/All-interface';
import IHBA1c2 from '../Interface/ IHBA1c2';
import IBio from '../Interface/IBio';
import ICBC from '../Interface/ICBC';
import ICULTURE from '../Interface/ICULTURE';
import IDRUG from '../Interface/IDRUG';
import IElectrolyte from '../Interface/IElectrolyte';
import IFluid from '../Interface/IFluid';
import IHAEMATOLOGY from '../Interface/IHAEMATOLOGY';
import IHBA1c1 from '../Interface/IHBA1c1';
import IIRON from '../Interface/IIRON';
import ILFT from '../Interface/ILFT';
import IPBF from '../Interface/IPBF';
import IPREG from '../Interface/IPREG';
import ISEROLOGY from '../Interface/ISEROLOGY';
import ISpecial from '../Interface/ISpecial';
import IStool from '../Interface/IStool';
import IThyroid from '../Interface/IThyroid';
import IURINE from '../Interface/IURINE';
import IWADAL from '../Interface/IWADAL';
import { addData } from '../Store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store/store';
import { unSelectID } from '../Store/selectIdSlice';
import { addNewID } from '../Store/newIdSlice';

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

export default function DesktopLayout(props:any) {
  console.warn("store->",props);
  const {InitialData,clickLogin}=props
  const [id, setId] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const dispatch: AppDispatch = useDispatch();
///Main Data Store state 
const handleAddData = () => {
  const newData: IEnterForm = {
    name: 'sample yadav',
    DATE: '2024-06-15',
    ReciveData: '2024-06-15',
    time: '12:00',
    prefix: 'Mr.',
    LabNO: '12345',
    Gender: 'Male',
    Age: '30',
    Address: '123 Street',
    M_no: '1234567890',
    HAEMATOLOGY: {} as IHAEMATOLOGY,
    BIO: {} as IBio,
    CULTURE: {} as ICULTURE,
    IRON: {} as IIRON,
    URINE: {} as IURINE,
    Wadal: {} as IWADAL,
    PREG: {} as IPREG,
    HBA1c1: {} as IHBA1c1,
    HBA1c2: {} as IHBA1c2,
    PBF: {} as IPBF,
    SPECIAL: {} as ISpecial,
    THYROID: {} as IThyroid,
    SEROLOGY: {} as ISEROLOGY,
    FLUID: {} as IFluid,
    DRUGABUSE: {} as IDRUG,
    LFT: {} as ILFT,
    SEMEN: {} as ISEROLOGY,
    ELECTROLYTES: {} as IElectrolyte,
    CBC: {} as ICBC,
    STOOL: {} as IStool,
    id: 111,
    Receivtime: '13:00',
    materials: 'Ram',
    Reference: 'Blood'
  };
  dispatch(addData(newData));
};


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const resposiveHeight = '100vh';

  useEffect(() => {
    handleAddData();
    if (id === 0) {
      setId(Math.floor(Math.random() * 10000));
      setDisabled(false);
    }
    console.log(id);
  }, []);

  const createID = () => {
    dispatch(unSelectID());
    setId(Math.floor(Math.random() * 10000));
    console.log(id);
    dispatch(addNewID(id));
    setDisabled(false);
  }
  const newid = useSelector((state:RootState)=> state.newId);
    const oldid = useSelector((state:RootState)=> state.seletedId);
    const [ID,setIde]= useState(id);
    useEffect(()=>{
    newid?setIde(newid):(oldid?setIde(oldid):setIde(0));
    console.warn(ID)
    },[newid,oldid])

  return (
    <Layout style={{ height: "100%", backgroundColor: '#f1f1fa' }}>
      <Sider
        style={{ backgroundColor: '#fff', width: '350px', height: '100vh', position: 'sticky', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <div style={{ textAlign: "center", color: "#222b53", height: "50px", width: "100%", fontWeight: "600", padding: "10px 0px " }}><strong>LAB DESK</strong></div>
        {/* Add Manu */}
        <PatientList />
        <Divider style={{ margin: "5px 0px", padding: "0px 0px" }} />
        <RightSideCard />
        {/* <Menu theme="dark" mode="inline" style={{ backgroundColor:'#fff', color:"black"}} defaultSelectedKeys={['4']} items={items} /> */}
      </Sider>
      <Layout style={{ backgroundColor: '#f1f1fa' }}>
        <div style={{ display: "flex", height: "100vh" }}>
          <div style={{ width: "70%" }}>
            <EnterForm id={ID} createId={createID}  />
          </div>
          <div style={{ width: "30%" }}>
            <SideCard id={ID} disabled={disabled} InitialData={InitialData} />
          </div>

        </div>

        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};


