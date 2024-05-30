import './App.css';
import React, { useEffect } from 'react';
import DashBoard from './Components/Layout/Dashboard';
import PdfView from './Components/Layout/PDF/PdfView';
import PdfLayout from './Components/PDF/PdfLayout';
function App() {
  const [uniqueId, setUniqueId] = React.useState("");
  useEffect(() => {
    // Generate a unique ID when the component mounts
    const id = "id-" + Math.random().toString(36)
    console.log("mm",id);
    setUniqueId(id);
  }, []); 
  return (
    <>
    <DashBoard />
    {/* <PdfLayout /> */}
    </>
  );
}

export default App;
