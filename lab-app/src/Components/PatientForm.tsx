
import { Button, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, styled } from '@mui/material';
import '../App.css';
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
import PregnancyDilaog from './Dialogs/PregnancyDialog';
import Footer from './Footer/Footer';
import IronDialog from './Dialogs/IronDialog';
import DRUG_ABUSE from './Dialogs/DrugAbuse';

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
function PatientForm(props:any) {

  const [Patient, setPatient] = React.useState<any>({});
  const [Name , setName ] = React.useState('');
  const [DATE , setDate ] = React.useState<string>(formatDate(new Date));
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

  function formatDate(dateObj:Date) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth returns zero-based index
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }
  function save_Print(){
  
    setPatient((prevState: { constructor?: any; }) => {
      let newState:any = { ...prevState }; // Make a copy of the previous state
    
      if (Object.keys(prevState).length === 0 && prevState.constructor === Object) {
        const uniqueId = generateUniqueId();
        newState.id = uniqueId; // Set the ID if it's the first time setting state
      }
    
      // Set other properties
      newState['DATE'] = DATE;
      newState['Name'] = (Name!==''?Name:(props.editPatient.Name?props.editPatient.Name:'Name'));
      newState['RecivedDate'] = ReciveData;
      newState['Time'] = (time!==''?time:(props.editPatient.time?props.editPatient.time:'time'));
      newState['Lab NO'] = (LabNO!==''?LabNO:(props.editPatient.LabNO?props.editPatient.LabNO:'LabNO'));
      newState['M_no'] =  (M_no!==''?M_no:(props.editPatient.M_no?props.editPatient.M_no:'888888888'));
      newState['Age'] =  (Age!==''?Age:(props.editPatient.Age?props.editPatient.Age:'23'));
      newState['Gender'] =  (Gender!==''?Gender:(props.editPatient.Gender?props.editPatient.Gender:'23'));
      newState['Materials'] = (Materials!==''?Materials:(props.editPatient.Materials?props.editPatient.Materials:'23'));
      newState['referredby'] =  (referredby!==''?referredby:(props.editPatient.referredby?props.editPatient.referredby:'23'));
      newState['Address'] =  (Address!==''?Address:(props.editPatient.Address?props.editPatient.Address:'23'));
      // newState['Preg Test'] =  (Object.keys(PREG).length!==0?PREG:(Object.keys(props.editPatient['Preg Tes']).length!==0?props.editPatient['Preg Tes']:{}));
      // newState['Iron Test'] =  (Object.keys(IRON).length!==0?IRON:(Object.keys(props.editPatient['Iron Test']).length!==0?props.editPatient['Iron Test']:{}));
      newState['Drugs Test'] = DRUGABUSE;
    
      return newState; // Return the updated state
    });
    
    console.log("patient",Patient)
  }

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

  

  function generateUniqueId() {
  
    return Math.random().toString(36).substring(2, 10);
  }
  
  const [Materials, setMaterials] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setMaterials(event.target.value);
  };
  const [referredby, setReferredby] = React.useState('');
  const handleReferreChange = (event: SelectChangeEvent) => {
    setReferredby(event.target.value);
  };
  const [openHAEMATOLOGY, setOpenHAEMATOLOGY] = React.useState(false);
  const handleClickOpen = () => {
    setOpenHAEMATOLOGY(true);
  };

  const handleClose = () => {
    setOpenHAEMATOLOGY(false);
  };
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
      <div className='flex'>
        <div>
          <TextField
            label="REPORT DATE"
            id="outlined-size-small"
            type='date'
            defaultValue={"02-04-2024"}
            value={DATE}
            size="small"
            onChange={(e)=>{setDate(e.target.value)}}
          />
        </div>
        <div>
          <TextField
            label="TIME"
            id="outlined-size-small"
            value={time}
            onChange={(e)=>{setTime(e.target.value)}}
            size="small"
          />
        </div>
        <div>
          <TextField
            label="LAB NO"
            id="outlined-size-small"
            value={LabNO}
            onChange={(e)=>{setLabNo(e.target.value)}}
            size="small"
          />
        </div>
        <div></div>

      </div>
      <div className='flex'>
        <div>
          <TextField
            label="RECIVED ON"
            id="outlined-size-small"
            type='date'
            value={ReciveData ||formatDate(new Date)}
            onChange={(e)=>{setReciveDate(e.target.value)}}
            size="small"
          />
        </div>
        <div>
          <TextField
            label="TIME"
            id="outlined-size-small"
            value={props.editPatient.time?props.editPatient.time:time}
            onChange={(e)=>{setTime(e.target.value)}}
            size="small"
          />
        </div>
        <div></div>
        <div></div>

      </div>
      <div className='flex'>
        <div>
          <TextField
            label="PATIENT NAME"
            id="outlined-size-small"
            value={props.editPatient.Name?props.editPatient.Name:Name}
            onChange={(e)=>{setName(e.target.value)}}
            size="small"
          />
        </div>
        <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">GENDER</InputLabel>
            <Select
              labelId="demo-select-small-label"
              style={{'background':'#ececf8'}}
              className='Gender'
              id="demo-select-small"
              value={ props.editPatient.Gender?props.editPatient.Gender:Gender}
              label="GENDER"
              onChange={(e)=>{setGender(e.target.value)}}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={11}>Male</MenuItem>
              <MenuItem value={12}>Female</MenuItem>
              <MenuItem value={13}>Other</MenuItem>
            </Select>
          </FormControl>
          {/* <TextField
            label="GENDER"
            id="outlined-size-small"
           
            size="small"
          /> */}
        </div>
        <div>
          <TextField
            label="AGE"
            id="outlined-size-small"
            value={ props.editPatient.Age?props.editPatient.Age:Age}
            onChange={(e)=>{setAge(e.target.value)}}
            size="small"
          />
        </div>
        <div>
        </div>

      </div>
      <div className='flex'>
        <div >
          <TextField
            label="Addres"
            id="outlined-size-small"
            value={ props.editPatient.Address?props.editPatient.Address:Address}
            onChange={(e)=>{setAddress(e.target.value)}}
            size="small"
          />
        </div>
        <div style={{ "width": "50%" }}>
          <TextField
            label="Mobile"
            id="outlined-size-small"
            value={ props.editPatient.M_no?props.editPatient.M_no:M_no}
            onChange={(e)=>{setM_no(e.target.value)}}
            size="small"
          />
        </div>
        <div style={{ "width": "40%" }}></div>


      </div>
      <div className='flex'>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Materials</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={ props.editPatient.Materials?props.editPatient.Materials:Materials}
              label="Materials"
              className='Materials'
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={101}>Blood and Urine</MenuItem>
              <MenuItem value={102}>Blood only</MenuItem>
              <MenuItem value={103}>Urine only</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">REFERRED BY</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={ props.editPatient.referredby?props.editPatient.referredby:referredby}
              label="REFERRED BY"
              className='REFERRED'
              onChange={handleReferreChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={101}>ashwani1</MenuItem>
              <MenuItem value={102}>ashwani1</MenuItem>
              <MenuItem value={103}>vashwani1</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className='flex pt'>
        <Button className='btn' variant="contained" onClick={handleClickOpen}>HAEMATOLOGY</Button>
        <Button className='btn' variant="contained" onClick={handleClickBIOOpen}>BIOCHEMISTRY</Button>
        <Button className='btn' variant="contained">SEROLOGY</Button>
        <Button className='btn' variant="contained" onClick={handleURINEClickOpen}>URINE</Button>
        <Button className='btn' variant="contained" onClick={handleStoolClickOpen}>STOOL</Button>
        <Button className='btn' variant="contained">FLUID</Button>
      </div>
      <div className='flex  pt'>
        <Button className='btn' variant="contained" onClick={handleLFTClickOpen}>LFT</Button>
        <Button className='btn' variant="contained" onClick={handleLIPIDClickOpen}>LIPID PROFILE</Button>
        <Button className='btn' variant="contained" onClick={handleSEMENClickOpen}>SEMEN</Button>
        <Button className='btn' variant="contained" onClick={handleELECTROLYTESClickOpen}>ELECTROLYTES</Button>
        <Button className='btn' variant="contained" onClick={handleWIDALClickOpen}>WIDAL</Button>
        <Button className='btn' variant="contained" onClick={handleCBCClickOpen}>CBC</Button>
      </div>
      <div className='flex  pt'>
        <Button className='btn' variant="contained" onClick={handleRFTClickOpen}>RFT/KFT</Button>
        <Button className='btn' variant="contained" onClick={handleTHYROIDClickOpen}>THYROID</Button>
        <Button className='btn' variant="contained" ></Button>
        <Button className='btn' variant="contained">SPECIAL TEST</Button>
        <PregnancyDilaog onSaveClick={PregnacyTestClick} formatDate={formatDate} />
        {/* <Button className='btn' variant="contained" onClick={handlePregClickOpen}>PREGNANCY</Button> */}
        <Button className='btn' variant="contained">PBF</Button>
      </div>
      <div className='flex  pt'>
        <Button className='btn' variant="contained" onClick={handleGTTClickOpen}>GTT</Button>
        <IronDialog onSaveClick={IRONTestClick}/>
        {/* <Button className='btn' variant="contained" onClick={handleIRONClickOpen}>IRON</Button> */}
        <Button className='btn' variant="contained" onClick={handleClickCULTUREOpen} >CULTURE</Button>
        <DRUG_ABUSE onSaveClick={DrugsTestClick} />
        {/* <Button className='btn' variant="contained" >DRUG ABUSE</Button> */}
        <Button className='btn' variant="contained" onClick={handleHBA1c1ClickOpen}>HB A1c 1</Button>
        <Button className='btn' variant="contained" onClick={handleHBA1c2ClickOpen}>HB A1c 2</Button>
      </div>
      <div>
        <Footer  save={save_Print} getData={props.getData}  Patient={Patient}/>
      </div>

      <Dialog
        fullScreen
        open={openHAEMATOLOGY}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              HAEMATOLOGY
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
      <Dialog
        fullScreen
        open={openBIOCHEMISTRY}
        onClose={handleBIOClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleBIOClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            BIOCHEMISTRY
            </Typography>
            <Button autoFocus color="inherit" onClick={handleBIOClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
      <Dialog
        fullScreen
        open={openCULTURE}
        onClose={handleCULTUREClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCULTUREClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            BIOCHEMISTRY
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCULTUREClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
      {/* big dialog Stool box */}
      <Dialog
        fullScreen
        open={openStool}
        onClose={handleStoolClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleStoolClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            BIOCHEMISTRY
            </Typography>
            <Button autoFocus color="inherit" onClick={handleStoolClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
      {/* big dialog URINE box */}
      <Dialog
        fullScreen
        open={openURINE}
        onClose={handleURINEClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleURINEClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            BIOCHEMISTRY
            </Typography>
            <Button autoFocus color="inherit" onClick={handleStoolClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
      {/* small dialog box */}
      <BootstrapDialog
        onClose={handleHBA1c1Close}
        aria-labelledby="customized-dialog-title"
        open={openHBA1c1}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleHBA1c1Close}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleHBA1c1Close}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* small dialog box */}
      <BootstrapDialog
        onClose={handleHBA1c2Close}
        aria-labelledby="customized-dialog-title"
        open={openHBA1c2}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleHBA1c2Close}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* small dialog IRON box */}
      {/* <BootstrapDialog
        onClose={handleIRONClose}
        aria-labelledby="customized-dialog-title"
        open={openIRON}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleIRONClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleIRONClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog> */}
      {/* small dialog GTT box */}
      <BootstrapDialog
        onClose={handleGTTClose}
        aria-labelledby="customized-dialog-title"
        open={openGTT}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleGTTClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleGTTClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* small dialog Preg box */}
      {/* <BootstrapDialog
        onClose={handlePregClose}
        aria-labelledby="customized-dialog-title"
        open={openPreg}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handlePregClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <PregnancyDilaog/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handlePregClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog> */}
      {/* small dialog RFT box */}
      <BootstrapDialog
        onClose={handleRFTClose}
        aria-labelledby="customized-dialog-title"
        open={openRFT}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleRFTClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleRFTClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* small dialog LFT box */}
      <BootstrapDialog
        onClose={handleLFTClose}
        aria-labelledby="customized-dialog-title"
        open={openLFT}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleLFTClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleLFTClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* small dialog ELECTROLYTES box */}
      <BootstrapDialog
        onClose={handleELECTROLYTESClose}
        aria-labelledby="customized-dialog-title"
        open={openELECTROLYTES}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleELECTROLYTESClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleELECTROLYTESClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* small dialog WIDAL box */}
      <BootstrapDialog
        onClose={handleWIDALClose}
        aria-labelledby="customized-dialog-title"
        open={openWIDAL}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleWIDALClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleWIDALClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* small dialog semen box */}
      <BootstrapDialog
        onClose={handleSEMENClose}
        aria-labelledby="customized-dialog-title"
        open={openSEMEN}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleSEMENClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSEMENClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* small dialog THYROID box */}
      <BootstrapDialog
        onClose={handleTHYROIDClose}
        aria-labelledby="customized-dialog-title"
        open={openTHYROID}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleTHYROIDClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleTHYROIDClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* small dialog CBC box */}
      <BootstrapDialog
        onClose={handleCBCClose}
        aria-labelledby="customized-dialog-title"
        open={openCBC}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCBCClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCBCClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* small dialog LIPID box */}
      <BootstrapDialog
        onClose={handleLIPIDClose}
        aria-labelledby="customized-dialog-title"
        open={openLIPID}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleLIPIDClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleLIPIDClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>

    </>
  );


}
export default PatientForm;
