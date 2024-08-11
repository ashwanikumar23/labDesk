import { Input, Space } from "antd";

export function FormInputMeasurement(props: any) {
    const {units,val,...prop}=props;
    return <>
        <Space>
            <Input style={{textAlign:{val}}} {...prop} /> <span>{units}</span>
        </Space>

    </>
};