
import { Button, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, styled } from '@mui/material';
//import '../App.css';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
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
function ModalGrid(props:any) {

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

  // if(Object.keys(props.editPatient).length !==0){
  //   setName(props.editPatient.Name.toString());
  // }
  // console.log(props.editPatient.Name);

//   function formatDate(dateObj:Date) {
//     const year = dateObj.getFullYear();
//     const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth returns zero-based index
//     const day = String(dateObj.getDate()).padStart(2, '0');
//     return `${day}-${month}-${year}`;
//   }
//   function save_Print(){
  
//     setPatient((prevState: { constructor?: any; }) => {
//       let newState:any = { ...prevState }; // Make a copy of the previous state
    
//       if (Object.keys(prevState).length === 0 && prevState.constructor === Object) {
//         const uniqueId = generateUniqueId();
//         newState.id = uniqueId; // Set the ID if it's the first time setting state
//       }
    
//       // Set other properties
//       newState['DATE'] = DATE;
//       newState['Name'] = (Name!==''?Name:(props.editPatient.Name?props.editPatient.Name:'Name'));
//       newState['RecivedDate'] = ReciveData;
//       newState['Time'] = (time!==''?time:(props.editPatient.time?props.editPatient.time:'time'));
//       newState['Lab NO'] = (LabNO!==''?LabNO:(props.editPatient.LabNO?props.editPatient.LabNO:'LabNO'));
//       newState['M_no'] =  (M_no!==''?M_no:(props.editPatient.M_no?props.editPatient.M_no:'888888888'));
//       newState['Age'] =  (Age!==''?Age:(props.editPatient.Age?props.editPatient.Age:'23'));
//       newState['Gender'] =  (Gender!==''?Gender:(props.editPatient.Gender?props.editPatient.Gender:'23'));
//       newState['Materials'] = (Materials!==''?Materials:(props.editPatient.Materials?props.editPatient.Materials:'23'));
//       newState['referredby'] =  (referredby!==''?referredby:(props.editPatient.referredby?props.editPatient.referredby:'23'));
//       newState['Address'] =  (Address!==''?Address:(props.editPatient.Address?props.editPatient.Address:'23'));
//       // newState['Preg Test'] =  (Object.keys(PREG).length!==0?PREG:(Object.keys(props.editPatient['Preg Tes']).length!==0?props.editPatient['Preg Tes']:{}));
//       // newState['Iron Test'] =  (Object.keys(IRON).length!==0?IRON:(Object.keys(props.editPatient['Iron Test']).length!==0?props.editPatient['Iron Test']:{}));
//       newState['Drugs Test'] = DRUGABUSE;
    
//       return newState; // Return the updated state
//     });
    
//     console.log("patient",Patient)
//   }

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

  

//   function generateUniqueId() {
  
//     return Math.random().toString(36).substring(2, 10);
//   }
  
//   const [Materials, setMaterials] = React.useState('');
//   const handleChange = (event: SelectChangeEvent) => {
//     setMaterials(event.target.value);
//   };
//   const [referredby, setReferredby] = React.useState('');
//   const handleReferreChange = (event: SelectChangeEvent) => {
//     setReferredby(event.target.value);
//   };
//   const [openHAEMATOLOGY, setOpenHAEMATOLOGY] = React.useState(false);
//   const handleClickOpen = () => {
//     setOpenHAEMATOLOGY(true);
//   };

//   const handleClose = () => {
//     setOpenHAEMATOLOGY(false);
//   };
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

  // const [openIRON, setOpenIRON] = React.useState(false);

  // const handleIRONClickOpen = () => {
  //   setOpenIRON(true);
  // };
  // const handleIRONClose = () => {
  //   setOpenIRON(false);
  // };

  
  const [openGTT, setOpenGTT] = React.useState(false);

  const handleGTTClickOpen = () => {
    setOpenGTT(true);
  };
  const handleGTTClose = () => {
    setOpenGTT(false);
  };

  // const [openPreg, setOpenPreg] = React.useState(false);

  // const handlePregClickOpen = () => {
  //   setOpenPreg(true);
  // };
  // const handlePregClose = () => {
  //   setOpenPreg(false);
  // };

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
      <div className='flex pt'>
        <HAEMATOLOGYDialog />
        <BIOModal />
        {/* <Button className='btn' variant="contained" onClick={handleClickOpen}>HAEMATOLOGY</Button> */}
        {/* <Button className='btn' variant="contained" onClick={handleClickBIOOpen}>BIOCHEMISTRY</Button> */}
        {/* <Button className='btn' variant="contained">SEROLOGY</Button> */}
        <SEROLOGYDialog />
        {/* <Button className='btn' variant="contained" onClick={handleURINEClickOpen}>URINE</Button> */}
        <URINEDialog />
        {/* <Button className='btn' variant="contained" onClick={handleStoolClickOpen}>STOOL</Button> */}
        <StoolDialog />
        {/* <Button className='btn' variant="contained">FLUID</Button> */}
        <FLUIDDialog />
      </div>
      <div className='flex  pt'>
        {/* <Button className='btn' variant="contained" onClick={handleLFTClickOpen}>LFT</Button>
        <Button className='btn' variant="contained" onClick={handleLIPIDClickOpen}>LIPID PROFILE</Button>
        <Button className='btn' variant="contained" onClick={handleSEMENClickOpen}>SEMEN</Button>
        <Button className='btn' variant="contained" onClick={handleELECTROLYTESClickOpen}>ELECTROLYTES</Button>
        <Button className='btn' variant="contained" onClick={handleWIDALClickOpen}>WIDAL</Button>
        <Button className='btn' variant="contained" onClick={handleCBCClickOpen}>CBC</Button> */}
        <LFTDialog />
        <LIPIDDialog />

        <SEMENDialog />
        <ELECTROLYTESDialog />
        <WIDALDialog />
        <CBCDialog />
      </div>
      <div className='flex  pt'>
        <RFTDialog />
        <THYROIDDialog />
        <Button className='btn' variant="contained" ></Button>
        <Button className='btn' variant="contained">SPECIAL TEST</Button>
        <PregnancyDilaog onSaveClick={PregnacyTestClick} />
        <Button className='btn' variant="contained">PBF</Button>
        {/* <Button className='btn' variant="contained" onClick={handleRFTClickOpen}>RFT/KFT</Button> */}
        {/* <Button className='btn' variant="contained" onClick={handleTHYROIDClickOpen}>THYROID</Button> */}
        {/* <Button className='btn' variant="contained" onClick={handlePregClickOpen}>PREGNANCY</Button> */}
      </div>
      <div className='flex  pt'>
        <GTTDialog />
        <IronDialog onSaveClick={IRONTestClick}/>
        <CULTUREDialog />
        <DRUG_ABUSE onSaveClick={DrugsTestClick} />
        <HBA1c1Dialog/>
        <HBA1c2Dialog />
        {/* <Button className='btn' variant="contained" onClick={handleGTTClickOpen}>GTT</Button> */}
        {/* <Button className='btn' variant="contained" onClick={handleIRONClickOpen}>IRON</Button> */}
        {/* <Button className='btn' variant="contained" onClick={handleClickCULTUREOpen} >CULTURE</Button> */}
        {/* <Button className='btn' variant="contained" >DRUG ABUSE</Button> */}
        {/* <Button className='btn' variant="contained" onClick={handleHBA1c1ClickOpen}>HB A1c 1</Button>
        <Button className='btn' variant="contained" onClick={handleHBA1c2ClickOpen}>HB A1c 2</Button> */}
      </div>
      

      
      
     

    </>
  );


}
export default ModalGrid;
