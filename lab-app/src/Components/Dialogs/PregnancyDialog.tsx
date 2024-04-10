import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Slide, styled } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


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
function PregnancyDilaog(props:any){
    const [openPreg, setOpenPreg] = React.useState(false);

    const handlePregClickOpen = () => {
      setOpenPreg(true);
    };
    const handlePregClose = () => {
      setOpenPreg(false);
    };
    const [sampleBroughtFrom, setSampleBroughtFrom] = React.useState('');
    const [betaSCG, setBetaSCG] = React.useState('');
    const [commentAndAdvise, setcommentAndAdvise] = React.useState('');
    const [expectedDate, setExpectedDate] = React.useState('');
    const [print, setPrint] = React.useState(false);
    const [printAll, setPrintAll] = React.useState(true);
    const [comments, setComments] = React.useState('');
    const handleChange = (event: any , key:string) => {
        if (key === "sampleBroughtFrom") {
            setSampleBroughtFrom(event.target.value);
        } else if (key === "betaSCG") {
            setBetaSCG(event.target.value);
        } else if (key === "commentAndAdvise") {
            setcommentAndAdvise(event.target.value);
        } else if (key === "expectedDate") {
            setExpectedDate(event.target.value);
        } else if (key === "print") {
            setPrint(!print);
        } else if (key === "printAll") {
            setPrintAll(!printAll);
        } else if (key === "comments") {
            setComments(event.target.value);
        }

        console.log(sampleBroughtFrom,betaSCG, commentAndAdvise,comments,print, printAll, expectedDate);
    };
    function submit(){
        let data={
            "SampleBroughtFrom":sampleBroughtFrom,
            "commentAndAdvise":commentAndAdvise,
            'BetaSCG':betaSCG,
            'ExpectedDate':expectedDate,
        }
        console.log("pregnancy test ",data);
        props.onSaveClick(data);
        handlePregClose();
    }

    return (
        <>
        <Button className='btn' variant="contained" onClick={handlePregClickOpen}>PREGNANCY</Button>
        {/* small dialog Preg box */}
      <BootstrapDialog
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
        <div style={{"width":"500px","height":"300px"}}>
        <FormGroup>
            <Stack direction="row">
                <FormControlLabel control={<Checkbox value={print} onChange={(event) => handleChange(event, "print")} />} label="PRINT" />
                <FormControlLabel control={<Checkbox value={printAll} onChange={(event) => handleChange(event, "printAll")} checked={printAll} />} label="PRINT ALL" />
                <FormControlLabel control={<Checkbox  value={comments} onChange={(event) => handleChange(event, "comments")}  />} label="COMMENTS" />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="sample-brought-label" style={{"width":"35%"}}>Sample Brought from</InputLabel>
                <Select
                labelId="sample-brought-select-label"
                id="sample-brought-select"
                value={sampleBroughtFrom}
                onChange={(event) => handleChange(event, "sampleBroughtFrom")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>sample 1</MenuItem>
                <MenuItem value={20}>sample 2</MenuItem>
                <MenuItem value={30}>sample 3</MenuItem>
                </Select>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel id="date-picker-label" style={{ width: '35%' }}>
                Expected Date
                </InputLabel>
                {/* <TextField type="date" style={{"width":"70%"}} size="small" value={expectedDate || props.formatDate(new Date)} onChange={(event) => handleChange(event, "expectedDate")}></TextField> */}
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="beta-scg-label" style={{"width":"35%"}}>Beta HCG</InputLabel>
                <Select
                labelId="beta-scg--select-label"
                id="beta-scg--select"
                value={betaSCG}
                onChange={(event) => handleChange(event, "betaSCG")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>sample 1</MenuItem>
                <MenuItem value={20}>sample 2</MenuItem>
                <MenuItem value={30}>sample 3</MenuItem>
                </Select>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="comments-label" style={{"width":"35%"}}>Comments/Advise</InputLabel>
                <Select
                labelId="comments-select-label"
                id="comments-select"
                value={commentAndAdvise}
                onChange={(event) => handleChange(event, "commentAndAdvise")}
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
          <Button autoFocus onClick={()=>submit()}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
        
        </>
    )
}

export default PregnancyDilaog;
