import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import React from 'react';
import '../Footer/Footer.css'
import { Button } from '@mui/material';
import { ppid } from 'process';
import { ElectricBoltSharp } from '@mui/icons-material';
import { stringify } from 'querystring';
function Footer(props:any){
    let data:any[] =[]
    console.log("footer",props.Patient);
    function saveData(){
        const P = localStorage.getItem('Patient');
        if(P!== null && P!==""){
            let PP=JSON.parse( P );
            if (Array.isArray(PP)) {
                if (PP.length === 0) {
                  PP.push(props.Patient);
                  localStorage.setItem('Patient', JSON.stringify(PP));
                  return ;
                } else {
                    let status=true;
                    PP.forEach((ele:any) => {
                        if( Object.keys(ele).length !== 0){
                            if(ele['id']===props.Patient['id']){
                                Object.assign(ele, props.Patient);
                                status=false 
                            }
                           
                        }
                    });
                    if(status){
                        PP.push(props.Patient);
                        localStorage.setItem('Patient', JSON.stringify(PP));
                        return ;
                    }
                    localStorage.setItem('Patient', JSON.stringify(PP));
                    return ;
                }
              }

            PP=JSON.parse( P );           
            if( Object.keys(PP).length !== 0){
               let data=[PP];
               let status=true;
               data.forEach((ele:any) => {
                if(ele['id']===props.Patient['id']){
                    Object.assign(ele, props.Patient); 
                    status=false
                }
                if(status){
                    localStorage.setItem('Patient', JSON.stringify([props.Patient]));
                }
            });
                
    
           
        }else{
            localStorage.setItem('Patient', JSON.stringify([props.Patient]));
        }
        }
        props.getData();
    }

    return(
        <>
        <div className='Footer'>
        <Button variant="outlined" onClick={()=>{props.save();saveData();}}  startIcon={<SaveIcon />}>
        SAVE
        </Button>
        <Button variant="contained" startIcon={<PrintIcon />}>
        PRINT
        </Button>
        </div>
        </>
    )
}
export default Footer;