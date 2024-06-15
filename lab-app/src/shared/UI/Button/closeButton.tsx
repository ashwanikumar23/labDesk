
import React, { useState } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { Button, ButtonProps, ConfigProvider, Space } from 'antd';
import { ReadMoreTwoTone } from '@mui/icons-material';

const colors1 = ['#6253E1', '#04BEFE'];
const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

interface IButtonProps{
    id:Number,
    clickEvent?:any,
    BtnName:string,
    width?:string,
    disabled?:boolean,
    htmlType?:any
}

export default function CloseButton({id,clickEvent,BtnName,width,disabled,htmlType}:IButtonProps) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    console.warn(BtnName,disabled);
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary:'#bde0fe',
                            colorPrimaryHover:'#219ebc',
                            colorPrimaryActive:'#219ebc',
                            colorText:'#023047',
                            lineWidth: 0,
                        },
                    },
                }}
            >
                <Button type="primary" size="large" htmlType={htmlType} disabled={disabled!==undefined?disabled:false} onClick={clickEvent} style={{width:`${width|| ''}`,fontSize:'13px'}} >
                   <strong style={{color:'#023047'}}>{BtnName}</strong> 
                </Button>
            </ConfigProvider>
        </>
    );

}


