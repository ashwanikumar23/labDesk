import './App.css';
import React, { useEffect } from 'react';
import DashBoard from './Components/Layout/Dashboard';
import PdfView from './Components/Layout/PDF/PdfView';
function App() {
  const [uniqueId, setUniqueId] = React.useState("");
  useEffect(() => {
    // Generate a unique ID when the component mounts
    const id = "id-" + Math.random().toString(36).substr(2, 9); // Simple unique ID generator
    setUniqueId(id);
  }, []); 
  return (
    <>
    <DashBoard />
    {/* <PdfView /> */}
    </>
  );
}

export default App;
