import './App.css';
import React, { useEffect } from 'react';
import DashBoard from './Components/Layout/Dashboard';
import PdfView from './Components/Layout/PDF/PdfView';
import PdfLayout from './Components/PDF/PdfLayout';
import SignIn from './Pages/sign-in';
function App() {
  const [sign, setSign] = React.useState(false);
  const getToken=()=>{

  }
  useEffect(() => {
  }, []); 
  return (
    <>
    <SignIn />
    {/* <DashBoard /> */}
    {/* <PdfLayout /> */}
    </>
  );
}

export default App;
