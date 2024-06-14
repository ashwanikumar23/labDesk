
import React from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { Button, ConfigProvider, Space } from 'antd';
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
    width?:string
    disabled?:boolean
}

export default function GradientButton({id,clickEvent,BtnName,width,disabled}:IButtonProps) {
    //console.log(disabled);
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            //colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                            colorPrimary:'#001d3d',
                            //colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                            colorPrimaryHover:'#000814',
                            colorPrimaryActive:'#001d3d',
                            //colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                            lineWidth: 0,
                        },
                    },
                }}
            >
                <Button type="primary" size="large" disabled={disabled} onClick={clickEvent} style={{width:`${width|| ''}`,fontSize:'13px'}} >
                    {BtnName}
                </Button>
            </ConfigProvider>
        </>
    );

}


