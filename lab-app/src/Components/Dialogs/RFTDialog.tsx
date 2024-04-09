import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';

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
const RFTDialog = (props:any) => {
    const [openIRON, setOpenIRON] = React.useState(false);

    const handleIRONClickOpen = () => {
      setOpenIRON(true);
    };
    const handleIRONClose = () => {
      setOpenIRON(false);
    };
    const [Cocaine, setCocaine] = React.useState('');
    const [Benzodiazepines, setBenzodiazepines] = React.useState('');
    const [Morphine, setMorphine] = React.useState('');
    const [Amphetamine, setAmphetamine] = React.useState(false);
    const [barbiturates, setbarbiturates] = React.useState(false);
    const [Merijuana, setMerijuana] = React.useState(false);
    const [OPiates, setOPiates] = React.useState(false);
    const [print, setPrint] = React.useState(false);
    const [printAll, setPrintAll] = React.useState(false);

    const handleChange = (event: any , key:string) => {
        if (key === "Cocaine") {
            setCocaine(event.target.value);
        } else if (key === "Benzodiazepines") {
            setBenzodiazepines(event.target.value);
        } else if (key === "Morphine") {
            setMorphine(event.target.value);
        } else if (key === "Amphetamine") {
            setAmphetamine(event.target.value);
        } else if (key === "barbiturates") {
            setbarbiturates(event.target.value);
        } else if (key === "Merijuana") {
            setMerijuana(event.target.value);
        } else if (key === "OPiates") {
            setOPiates(event.target.value);
        }else if (key === "print") {
            setPrint(!print);
        } else if (key === "printAll") {
            setPrintAll(!printAll);
        }
    };
    function submit(){
        let data={
            "OPiates":OPiates,
            "barbiturates":barbiturates,
            'Amphetamine':Amphetamine,
            "Morphine":Morphine,
            "Merijuana":Merijuana,
            'Benzodiazepines':Benzodiazepines,
            'Cocaine':Cocaine,
            'print':print,
            'printAll':printAll
        }
        console.log("Iron test ",data);
        props.onSaveClick(data);
        handleIRONClose();
    }
  return (
    <>
    <Button className='btn' variant="contained" onClick={handleIRONClickOpen}>DRUG ABUSE</Button>
          {/* small dialog IRON box */}
          <BootstrapDialog
        onClose={handleIRONClose}
        aria-labelledby="customized-dialog-title"
        open={openIRON}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          IRON Test
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
        <div style={{"width":"500px","height":"300px"}}>
        <FormGroup>
            <Stack direction="row">
                <FormControlLabel control={<Checkbox value={print} onChange={(event) => handleChange(event, "print")} />} label="PRINT" />
                <FormControlLabel control={<Checkbox value={printAll} onChange={(event) => handleChange(event, "printAll")} checked={printAll} />} label="PRINT ALL" />
                {/* <FormControlLabel control={<Checkbox  value={comments} onChange={(event) => handleChange(event, "comments")}  />} label="COMMENTS" /> */}
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="sample-brought-label" style={{"width":"35%"}}>Sample Brought from</InputLabel>
                <Select
                labelId="sample-brought-select-label"
                id="sample-brought-select"
                value={Cocaine}
                onChange={(event) => handleChange(event, "Cocaine")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>sample 1</MenuItem>
                <MenuItem value={20}>sample 2</MenuItem>
                <MenuItem value={30}>sample 3</MenuItem>
                </Select>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="sample-brought-label" style={{"width":"35%"}}>Sample Brought from</InputLabel>
                <Select
                labelId="sample-brought-select-label"
                id="sample-brought-select"
                value={Benzodiazepines}
                onChange={(event) => handleChange(event, "Benzodiazepines")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>sample 1</MenuItem>
                <MenuItem value={20}>sample 2</MenuItem>
                <MenuItem value={30}>sample 3</MenuItem>
                </Select>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="sample-brought-label" style={{"width":"35%"}}>Sample Brought from</InputLabel>
                <Select
                labelId="sample-brought-select-label"
                id="sample-brought-select"
                value={Merijuana}
                onChange={(event) => handleChange(event, "Merijuana")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>sample 1</MenuItem>
                <MenuItem value={20}>sample 2</MenuItem>
                <MenuItem value={30}>sample 3</MenuItem>
                </Select>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="sample-brought-label" style={{"width":"35%"}}>Sample Brought from</InputLabel>
                <Select
                labelId="sample-brought-select-label"
                id="sample-brought-select"
                value={Morphine}
                onChange={(event) => handleChange(event, "Morphine")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>sample 1</MenuItem>
                <MenuItem value={20}>sample 2</MenuItem>
                <MenuItem value={30}>sample 3</MenuItem>
                </Select>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="sample-brought-label" style={{"width":"35%"}}>Sample Brought from</InputLabel>
                <Select
                labelId="sample-brought-select-label"
                id="sample-brought-select"
                value={Amphetamine}
                onChange={(event) => handleChange(event, "Amphetamine")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>sample 1</MenuItem>
                <MenuItem value={20}>sample 2</MenuItem>
                <MenuItem value={30}>sample 3</MenuItem>
                </Select>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="sample-brought-label" style={{"width":"35%"}}>Sample Brought from</InputLabel>
                <Select
                labelId="sample-brought-select-label"
                id="sample-brought-select"
                value={barbiturates}
                onChange={(event) => handleChange(event, "barbiturates")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>sample 1</MenuItem>
                <MenuItem value={20}>sample 2</MenuItem>
                <MenuItem value={30}>sample 3</MenuItem>
                </Select>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="sample-brought-label" style={{"width":"35%"}}>Sample Brought from</InputLabel>
                <Select
                labelId="sample-brought-select-label"
                id="sample-brought-select"
                value={OPiates}
                onChange={(event) => handleChange(event, "OPiates")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>sample 1</MenuItem>
                <MenuItem value={20}>sample 2</MenuItem>
                <MenuItem value={30}>sample 3</MenuItem>
                </Select>
            </Stack>
        </FormGroup>
        </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>{submit()}}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>

    </>
  )
}

export default RFTDialog;