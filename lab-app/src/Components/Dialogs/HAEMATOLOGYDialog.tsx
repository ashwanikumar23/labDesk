// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
// import Stack from '@mui/material/Stack';
// import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItemButton, ListItemText, Slide, Toolbar, Typography, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import { Divider, Checkbox, Flex, Input, Space, CheckboxProps, Select } from 'antd';

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
const HAEMATOLOGYDialog = (props:any) => {
    const [openHAEMATOLOGY, setOpenHAEMATOLOGY] = React.useState(false);
    const handleClickOpen = () => {
      setOpenHAEMATOLOGY(true);
    };
  
    const handleClose = () => {
      setOpenHAEMATOLOGY(false);
    };
    const [totalIron, setTotalIron] = React.useState('');
    const [tibc, setTibc] = React.useState('');
    const [tstat, setStat] = React.useState('');
    const [print, setPrint] = React.useState(false);
    const [printAll, setPrintAll] = React.useState(false);
    const handleChange = (event: any , key:string) => {
        if (key === "totalIron") {
            setTotalIron(event.target.value);
        } else if (key === "tibc") {
            setTibc(event.target.value);
        } else if (key === "tstat") {
            setStat(event.target.value);
        }else if (key === "print") {
            setPrint(!print);
        } else if (key === "printAll") {
            setPrintAll(!printAll);
        }
    };
    function submit(){
        let data={
            "totalIron":totalIron,
            "tibc":tibc,
            'tstat':tstat,
            'print':print,
            'printAll':printAll
        }
        console.log("Iron test ",data);
        props.onSaveClick(data);
        // handleIRONClose();
    }
    const onChange: CheckboxProps['onChange'] = (e:any) => {
      console.log(`checked = ${e.target.checked}`);
    };
    const handleSelectChange = (value: string) => {
      console.log(`selected ${value}`);
    };
  return (
    <>
    <Button className='btn' variant="contained" onClick={handleClickOpen}>HAEMATOLOGY</Button>
          {/* small dialog IRON box */}
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
        <div style={{ margin:'10px 40px'}}>
          {/* <h3>Head</h3> */}
          <Flex vertical={false} gap='large'>
            <div style={{width:'40%',alignItems:'center',justifyContent:'center',justifyItems:'center'}}>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              name='HB'
              onInput={(e:any) => {
                console.log('HB click',e.target.value,e.target.name);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Divider />
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>


            </div>
            <div  style={{width:'40%'}}>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
            <Input
              
              onInput={(e) => {
                console.log('click',e);}}
              type='number'
              style={{width:'60px'}}
              placeholder="Basic usage"
            />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleSelectChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
               />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleSelectChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
               />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            <Space style={{marginBottom:'15px'}}>
              <span>HB</span>
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleSelectChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
               />
            <span>gm/dl</span>
            
            </Space>
            <br/>
            
            </div>
            <div  style={{width:'20%'}}>
              <Space>
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
              </Space>
            </div>
            
          </Flex>
        </div>
      </Dialog>

    </>
  )
}

export default HAEMATOLOGYDialog;
