import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import PatientScreen from './Components/PatientScreen';
import SideBarCard from './Components/sidebar/SideBarCard';
import React, { useEffect, useState } from 'react';
import DashBoard from './Components/Layout/Dashboard';

const theme = createTheme({
  palette:{
    primary:{
      main:"#884dff"
    }
  }
});
function App() {
  const [  GetData, setGetData] = React.useState<any[]>([]);
  const [  editPatient, setEditPatient] = React.useState<any>({});
  function getData(){
    const P = localStorage.getItem('Patient');
    if(P!== null && P!==""){
        let PP=JSON.parse( P );
        if (Array.isArray(PP)) {
            if (PP.length !== 0) {
              setGetData(PP)
            }
        }
      }
  }
  //let editPatient:any;
  function EditCall(id:any){
    debugger
    let filter = GetData.filter((obj:any) => obj.id === id);
    setEditPatient(filter[0]);
  }
  useEffect(()=>{
    const P = localStorage.getItem('Patient');
    if(P!== null && P!==""){
        let PP=JSON.parse( P );
        if (Array.isArray(PP)) {
            if (PP.length !== 0) {
              setGetData(PP)
            }
        }
      }
  },[]);
  return (
    <>
    <DashBoard />
    {/* <ThemeProvider theme={theme}>
      <div className="App">
      <div className='Enter-Area'>
      <PatientScreen getData={getData} editPatient={editPatient} />
      </div>
      <div className='side-Area'>
        <SideBarCard GetData={GetData} EditCall={EditCall}/>
      </div >
        
      </div>

    </ThemeProvider> */}
    </>
  );
}

export default App;
