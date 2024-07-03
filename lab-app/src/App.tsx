import './App.css';
import React, { useEffect, useState } from 'react';
import DashBoard from './Components/Layout/Dashboard';
import PdfView from './Components/Layout/PDF/PdfView';
import SignIn from './Pages/sign-in';
import IEnterForm  from './shared/Interface/All-interface';
import IHBA1c2 from './shared/Interface/ IHBA1c2';
import IBio from './shared/Interface/IBio';
import ICBC from './shared/Interface/ICBC';
import ICULTURE from './shared/Interface/ICULTURE';
import IDRUG from './shared/Interface/IDRUG';
import IElectrolyte from './shared/Interface/IElectrolyte';
import IFluid from './shared/Interface/IFluid';
import IHAEMATOLOGY from './shared/Interface/IHAEMATOLOGY';
import IHBA1c1 from './shared/Interface/IHBA1c1';
import IIRON from './shared/Interface/IIRON';
import ILFT from './shared/Interface/ILFT';
import IPBF from './shared/Interface/IPBF';
import IPREG from './shared/Interface/IPREG';
import ISEROLOGY from './shared/Interface/ISEROLOGY';
import ISpecial from './shared/Interface/ISpecial';
import IStool from './shared/Interface/IStool';
import IThyroid from './shared/Interface/IThyroid';
import IURINE from './shared/Interface/IURINE';
import IWADAL from './shared/Interface/IWADAL';
import DesktopLayout from './Pages/layoutWraper/destopLayout';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './shared/Store/store';
import Cookies from 'js-cookie';
import { login, logout } from './shared/Store/signInSlice';



function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [sign, setSign] = React.useState(false);
  const [data, setData] = useState([]);
  const dispatch: AppDispatch = useDispatch();
  const clickLogin=(action:boolean)=>{
    setSign(action);
  }
  useEffect(()=>{
    const token = Cookies.get("authToken");
    const username = token?.split(" ");
    console.log(token);
    if(token && username){
      setSign(true);
      dispatch(login(username[0]));
  
    }else{
      setSign(false);
      dispatch(logout());

    }
    console.log(token,sign);


  },[sign])

  const initialData:IEnterForm={
    name: '',
    DATE: '',
    ReciveData: '',
    time: '',
    prefix: '',
    LabNO: '',
    Gender: '',
    Age: '',
    Address: '',
    M_no: '',
    HAEMATOLOGY: {} as IHAEMATOLOGY, // Initialize with empty object or default values
    BIO: {} as IBio, // Initialize with empty object or default values
    CULTURE: {} as ICULTURE, // Initialize with empty object or default values
    IRON: {} as IIRON, // Initialize with empty object or default values
    URINE: {} as IURINE, // Initialize with empty object or default values
    Wadal: {} as IWADAL, // Initialize with empty object or default values
    PREG: {} as IPREG, // Initialize with empty object or default values
    HBA1c1: {} as IHBA1c1, // Initialize with empty object or default values
    HBA1c2: {} as IHBA1c2, // Initialize with empty object or default values
    PBF: {} as IPBF, // Initialize with empty object or default values
    SPECIAL: {} as ISpecial, // Initialize with empty object or default values
    THYROID: {} as IThyroid, // Initialize with empty object or default values
    SEROLOGY: {} as ISEROLOGY, // Initialize with empty object or default values
    FLUID: {} as IFluid, // Initialize with empty object or default values
    DRUGABUSE: {} as IDRUG, // Initialize with empty object or default values
    LFT: {} as ILFT, // Initialize with empty object or default values
    SEMEN: {} as ISEROLOGY, // Initialize with empty object or default values
    ELECTROLYTES: {} as IElectrolyte, // Initialize with empty object or default values
    CBC: {} as ICBC, // Initialize with empty object or default values
    STOOL: {} as IStool // Initialize with empty object or default values
    ,


    id: 0,
    Receivtime: '',
    materials: '',
    Reference: ''
  }

  return (
    <div style={{}}>
    {isLoggedIn?<DesktopLayout  InitialData={initialData} clickLogin={clickLogin} />: <SignIn clickLogin={clickLogin} />}
    {/* <PdfLayout/> */}
    </div>
  );
}

export default App;
