import { Card } from "antd";
import ModalGrid from "../../Components/Layout/Modal/ModalGrid";

interface ISideCard{
 id:number,
 datastate?:any,
 disabled?:boolean

}

export default function SideCard({id,disabled}:ISideCard) {
    return (
        <>
            <Card title="All Test Here " bordered={false} style={{ width: '100%',height:"100vh" }}>
            <ModalGrid id={id} disabled={disabled}  />
            </Card>
        </>
    );
}