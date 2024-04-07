import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import PatientScreen from './Components/PatientScreen';
import SideBarCard from './Components/sidebar/SideBarCard';
import React, { useEffect, useState } from 'react';

const theme = createTheme({
  palette:{
    primary:{
      main:"#884dff"
    }
  }
});
function App() {
  const [  GetData, setGetData] = React.useState<any[]>([]);
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
    <ThemeProvider theme={theme}>
      <div className="App">
      <div className='Enter-Area'>
      <PatientScreen getData={getData} />
      </div>
      <div className='side-Area'>
        <SideBarCard GetData={GetData} />
      </div >
        
      </div>

    </ThemeProvider>
    </>
  );
}

export default App;
