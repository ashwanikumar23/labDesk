import { Card } from "antd";
import ModalGrid from "../../Components/Layout/Modal/ModalGrid";
import IEnterForm from "../Interface/All-interface";

interface ISideCard{
 id:number,
 datastate?:any,
 disabled?:boolean,
 saveData:any,
 InitialData: IEnterForm,

}

export default function SideCard({id,disabled,saveData,InitialData}:ISideCard) {
    return (
        <>
            <Card title="All Test Here " bordered={false} style={{ width: '100%',height:"100vh" }}>
            <ModalGrid id={id} disabled={disabled} saveData={saveData} InitialData={InitialData}  />
            </Card>
        </>
    );
}