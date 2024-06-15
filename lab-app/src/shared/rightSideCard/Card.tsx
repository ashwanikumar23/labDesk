import { Card } from "antd";
import ModalGrid from "../../Components/Layout/Modal/ModalGrid";
import IEnterForm from "../Interface/All-interface";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { useEffect, useState } from "react";

interface ISideCard{
 id:number,
 datastate?:any,
 disabled?:boolean,
 saveData?:any,
 InitialData: IEnterForm,

}

export default function SideCard({id,disabled,InitialData}:ISideCard) {
    const newid = useSelector((state:RootState)=> state.newId);
    const oldid = useSelector((state:RootState)=> state.seletedId);
    const [ID,setId]= useState(id);
    useEffect(()=>{
    newid?setId(newid):(oldid?setId(oldid):setId(0));
    console.warn(ID)
    },[newid,oldid])
    return (
        <>
            <Card title="All Test Here " bordered={false} style={{ width: '100%',height:"100vh" }}>
            <ModalGrid id={ID} disabled={disabled} InitialData={InitialData}  />
            </Card>
        </>
    );
}