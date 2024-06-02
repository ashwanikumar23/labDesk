
import {  styled } from '@mui/material';
//import '../App.css';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import PregnancyDilaog from '../../Dialogs/PregnancyDialog';
import IronDialog from '../../Dialogs/IronDialog';
import DRUG_ABUSE from '../../Dialogs/DrugAbuse';
import HAEMATOLOGYDialog from '../../Dialogs/HAEMATOLOGYDialog';
import BIOModal from '../../Dialogs/BIODialog';
import GTTDialog from '../../Dialogs/GTTDialog';
import CULTUREDialog from '../../Dialogs/CULTUREDialog';
import HBA1c2Dialog from '../../Dialogs/HBA1c2Dialog';
import HBA1c1Dialog from '../../Dialogs/HBA1c1Dialog';
import THYROIDDialog from '../../Dialogs/THYROIDDialog';
import RFTDialog from '../../Dialogs/RFTDialog';
import CBCDialog from '../../Dialogs/CBCDialog';
import WIDALDialog from '../../Dialogs/WIDALDialog';
import ELECTROLYTESDialog from '../../Dialogs/ELECTROLYTESDialog';
import SEMENDialog from '../../Dialogs/SEMENDialog';
import LIPIDDialog from '../../Dialogs/LIPIDDialog';
import LFTDialog from '../../Dialogs/LFTDialog';
import StoolDialog from '../../Dialogs/StoolDialog';
import URINEDialog from '../../Dialogs/URINEDialog';
import SEROLOGYDialog from '../../Dialogs/SEROLOGYDialog';
import FLUIDDialog from '../../Dialogs/FLUIDDialog';
import SpecialDialog from '../../Dialogs/SpecialDialog';
import PBFDialog from '../../Dialogs/PBFDialog';
import { Button } from 'antd';
// import PregnancyDilaog from './Dialogs/PregnancyDialog';
// import Footer from './Footer/Footer';
// import IronDialog from './Dialogs/IronDialog';
// import DRUG_ABUSE from './Dialogs/DrugAbuse';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface IModal{
  id:number,
  disabled?:boolean
}
function ModalGrid({id,disabled}:IModal) {

  const [Patient, setPatient] = React.useState<any>({});
  const [Name , setName ] = React.useState('');
  //const [DATE , setDate ] = React.useState<string>(formatDate(new Date));
  //setDate(formatDate(new Date));
  const [ReciveData , setReciveDate ] = React.useState('');
  const [time  , setTime ] = React.useState('');
  const [  LabNO, setLabNo] = React.useState('');
  const [  Gender, setGender] = React.useState('');
  const [  Age, setAge] = React.useState('');
  const [  prefix, setprefix] = React.useState('');
  const [  Address, setAddress] = React.useState('');
  const [  M_no, setM_no] = React.useState('');
  const [  HAEMATOLOGY, setHAEMATOLOGY] = React.useState({});
  const [  BIO, setBIO] = React.useState({});
  const [  PREG, setPREG] = React.useState({});
  const [  Wadal, setWadal] = React.useState({});
  const [  URINE, setURINE] = React.useState({});
  const [  IRON, setIRON] = React.useState({});
  const [  CULTURE, setCULTURE] = React.useState({});
  const [  HBA1c1, setHBA1c1] = React.useState({});
  const [  GTT, setGTT] = React.useState({});
  const [  HBA1c2, setHBA1c2] = React.useState({});
  const [  PBF, setPBF] = React.useState({});
  const [  SPECIAL, setSPECIAL] = React.useState({});
  const [  THYROID, setTHYROID] = React.useState({});
  const [  SEROLOGY, setSEROLOGY] = React.useState({});
  const [  FLUID, setFLUID] = React.useState({});
  const [  DRUGABUSE, setDRUGABUSE] = React.useState({});
  const [  LFT, setLFT] = React.useState({});
  const [  LIPID, setLIPID] = React.useState({});
  const [  SEMEN, setSEMEN] = React.useState({});
  const [  ELECTROLYTES, setELECTROLYTES] = React.useState({});
  const [  CBC, setCBC] = React.useState({});
  const [  STOOL, setSTOOL] = React.useState({});


function PregnacyTestClick(PregData:any){
  console.log(PregData);
  setPREG(PregData);
}
function IRONTestClick(IRONData:any){
  console.log(IRONData);
  setIRON(IRONData);
}
function DrugsTestClick(IRONData:any){
  
  setDRUGABUSE(IRONData);
}

  const [openBIOCHEMISTRY, setOpenBIOCHEMISTRY] = React.useState(false);
  const handleClickBIOOpen = () => {
    setOpenBIOCHEMISTRY(true);
  };

  const handleBIOClose = () => {
    setOpenBIOCHEMISTRY(false);
  };


  const [openStool, setOpenStool] = React.useState(false);
  const handleStoolClickOpen = () => {
    setOpenStool(true);
  };

  const handleStoolClose = () => {
    setOpenStool(false);
  };

  const [openURINE, setOpenURINE] = React.useState(false);
  const handleURINEClickOpen = () => {
    setOpenURINE(true);
  };

  const handleURINEClose = () => {
    setOpenURINE(false);
  };

  const [openHBA1c1, setOpenHBA1c1] = React.useState(false);

  const handleHBA1c1ClickOpen = () => {
    setOpenHBA1c1(true);
  };
  const handleHBA1c1Close = () => {
    setOpenHBA1c1(false);
  };

  const [openHBA1c2, setOpenHBA1c2] = React.useState(false);

  const handleHBA1c2ClickOpen = () => {
    setOpenHBA1c2(true);
  };
  const handleHBA1c2Close = () => {
    setOpenHBA1c2(false);
  };


  const [openCULTURE, setOpenCULTURE] = React.useState(false);
  const handleClickCULTUREOpen = () => {
    setOpenCULTURE(true);
  };

  const handleCULTUREClose = () => {
    setOpenCULTURE(false);
  };


  
  const [openGTT, setOpenGTT] = React.useState(false);

  const handleGTTClickOpen = () => {
    setOpenGTT(true);
  };
  const handleGTTClose = () => {
    setOpenGTT(false);
  };


  const [openRFT, setOpenRFT] = React.useState(false);

  const handleRFTClickOpen = () => {
    setOpenRFT(true);
  };
  const handleRFTClose = () => {
    setOpenRFT(false);
  };

  const [openLFT, setOpenLFT] = React.useState(false);

  const handleLFTClickOpen = () => {
    setOpenLFT(true);
  };
  const handleLFTClose = () => {
    setOpenLFT(false);
  };
  const [openWIDAL, setOpenWIDAL] = React.useState(false);

  const handleWIDALClickOpen = () => {
    setOpenWIDAL(true);
  };
  const handleWIDALClose = () => {
    setOpenWIDAL(false);
  };
  const [openELECTROLYTES, setOpenELECTROLYTES] = React.useState(false);

  const handleELECTROLYTESClickOpen = () => {
    setOpenELECTROLYTES(true);
  };
  const handleELECTROLYTESClose = () => {
    setOpenELECTROLYTES(false);
  };
  const [openSEMEN, setOpenSEMEN] = React.useState(false);

  const handleSEMENClickOpen = () => {
    setOpenSEMEN(true);
  };
  const handleSEMENClose = () => {
    setOpenSEMEN(false);
  };

  const [openCBC, setOpenCBC] = React.useState(false);

  const handleCBCClickOpen = () => {
    setOpenCBC(true);
  };
  const handleCBCClose = () => {
    setOpenCBC(false);
  };
  const [openLIPID, setOpenLIPID] = React.useState(false);

  const handleLIPIDClickOpen = () => {
    setOpenLIPID(true);
  };
  const handleLIPIDClose = () => {
    setOpenLIPID(false);
  };

  const [openTHYROID, setOpenTHYROID] = React.useState(false);

  const handleTHYROIDClickOpen = () => {
    setOpenTHYROID(true);
  };
  const handleTHYROIDClose = () => {
    setOpenTHYROID(false);
  };
  return (
    <>
    <div style={{display:"flex", justifyContent:"center", gap:"4px"}}>
      <div style={{ alignItems:"center"}}>
      <HAEMATOLOGYDialog id={id} disabled={disabled}  />
      
      </div>
      <div style={{ alignItems:"center"}}>
      <BIOModal />      
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <SEROLOGYDialog />
      
      </div>
      <div style={{ alignItems:"center"}}>
      <URINEDialog />     
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <StoolDialog />
      
      </div>
      <div style={{ alignItems:"center"}}>
      <FLUIDDialog />    
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <LFTDialog />
      
      </div>
      <div style={{ alignItems:"center"}}>
      <LIPIDDialog />   
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <SEMENDialog />
      
      </div>
      <div style={{ alignItems:"center"}}>
      <ELECTROLYTESDialog />
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <WIDALDialog />
      
      </div>
      <div style={{ alignItems:"center"}}>
      <CBCDialog />
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <RFTDialog />
      
      </div>
      <div style={{ alignItems:"center"}}>
      <THYROIDDialog />
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <SpecialDialog />
      
      </div>
      <div style={{ alignItems:"center"}}>
      <PregnancyDilaog onSaveClick={PregnacyTestClick} />
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <PBFDialog />
      
      </div>
      <div style={{ alignItems:"center"}}>
      <GTTDialog />
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <IronDialog onSaveClick={IRONTestClick}/>
      
      </div>
      <div style={{ alignItems:"center"}}>
      <CULTUREDialog />
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <DRUG_ABUSE onSaveClick={DrugsTestClick} />
      
      </div>
      <div style={{ alignItems:"center"}}>
      
        
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", gap:"4px", margin:"5px 0px"}}>
      <div style={{ alignItems:"center"}}>
      <HBA1c2Dialog />
      
      </div>
      <div style={{ alignItems:"center"}}>
      <HBA1c1Dialog/>
        
      </div>
    </div>

      {/* <div className='flex  pt'>
        <GTTDialog />
        <IronDialog onSaveClick={IRONTestClick}/>
        <CULTUREDialog />
        <DRUG_ABUSE onSaveClick={DrugsTestClick} />
        <HBA1c1Dialog/>
        <HBA1c2Dialog />
      </div>  */}
    </>
  );

}
export default ModalGrid;
