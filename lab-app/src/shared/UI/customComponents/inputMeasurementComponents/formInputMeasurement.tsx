import { Input, Space } from "antd";

export function FormInputMeasurement(props: any) {
    const {units,...prop}=props;
    return <>
        <Space>
            <Input {...prop} /> <span>{units}</span>
        </Space>

    </>
};