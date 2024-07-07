import React, { useEffect, useState } from "react";
import {
    Divider,
    Checkbox,
    Button,
    Flex,
    Input,
    Space,
    CheckboxProps,
    Select,
    Form,
    Row,
    Col,
    Modal,
    Radio,
    RadioChangeEvent,
    Badge,
} from "antd";
import GradientButton from "../../shared/UI/Button/gradientButton";
import IEnterForm from "../../shared/Interface/All-interface";
import ILFT from "../../shared/Interface/ILFT";
import Idailog from "../../shared/Interface/Idailog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../shared/Store/store";
import { PaitentValue, updateLFT, valueOfLFT } from "../../shared/Store/dataSlice";
import { FormInputMeasurement } from "../../shared/UI/customComponents/inputMeasurementComponents/formInputMeasurement";

const { Option } = Select;
const initialValue: ILFT = {
    TotalBilirubin: "8",
    ConjBilirubin: "",
    UnConjBilirubin: "",
    SGOT: "",
    SGPT: "",
    SAlkalinePhosphatase: "",
    SerumProtein: "",
    Albumin: "",
    Globulin: "",
    AGRatio: "",
    HbsAg: ""
}

const LFTDialog = ({ id }: Idailog) => {
    const [open, setOpen] = useState(false);
    let valueLFT = useSelector(valueOfLFT(id));
    const [form] = Form.useForm();
    const [formData, setFormData] = useState<IEnterForm>();
    const [LFTData, setLFTData] = useState<ILFT | null>(null);
    const saveddata = useSelector(PaitentValue(id));
    const dispatch: AppDispatch = useDispatch();
    const [value, setValue] = useState(1);
    const [PRINT, setPRINT] = useState('PRINT-ALL');

    useEffect(() => {
        if (valueLFT) {

        } else {
            valueLFT = initialValue
        }
    }, [saveddata]);

    const onFinish = (values: ILFT) => {
        console.log("Form values:", values);
        setLFTData(values);
        values.Print = false;
        values.PrintAll = true;
        values.Comments = false;
        dispatch(updateLFT({ id, data: values }));
        setOpen(false);
    };



    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const clickEvent = () => {
        setOpen(true);
        if (valueLFT && Object.entries(valueLFT).length !== 0) {
            const { PrintAll, Print, Comments, ...LFTValues } = valueLFT
            form.setFieldsValue({ ...LFTValues })
            form.setFieldsValue({ ...LFTValues })

        } else {
            form.setFieldsValue({ ...initialValue })

        }
    }
    return (
        <>
            <Badge dot size="default">
                <GradientButton id={0} BtnName={"LFT"} width="150px" clickEvent={() => clickEvent()} />

            </Badge>
            <Modal
                title="LFT TEST"
                centered

                open={open}
                footer={null}
                //onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={400}
            >
                <div>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={"PRINT"}>PRINT</Radio>
                        <Radio value={"PRINT-ALL"}>PRINT ALL</Radio>
                        {/* <Radio value={"METHOD"}>METHOD</Radio> */}
                        <Radio value={"COMMENTS"}>COMMENTS</Radio>
                    </Radio.Group>
                    <Form
                        form={form}
                        onFinish={onFinish}
                        labelCol={{ span: 14 }}
                        wrapperCol={{ span: 10 }}
                        layout="horizontal"

                    >
                        <Row gutter={24}>
                            <Col span={20}>
                                <Form.Item name="TotalBilirubin" label="Total Bilirubin" style={{ marginBottom: '7px' }}>
                                    <FormInputMeasurement units={`mg/dl`} />
                                </Form.Item>
                                <Form.Item name="ConjBilirubin" label="Conj. Bilirubin" style={{ marginBottom: '7px' }}>
                                    <FormInputMeasurement units={`mg/dl`} />

                                </Form.Item>
                                <Form.Item name="UnConjBilirubin" label="UnConj. Bilirubin" style={{ marginBottom: '7px' }}>
                                    <FormInputMeasurement units={`mg/dl`} />

                                </Form.Item>
                                <Form.Item name="SGOT" label="SGOT(AST)" style={{ marginBottom: '7px' }}>
                                    <FormInputMeasurement units={`U/L`} />

                                </Form.Item>
                                <Form.Item name="SGPT" label="SGPT(ALT)" style={{ marginBottom: '7px' }}>
                                    <FormInputMeasurement units={`U/L`} />

                                </Form.Item>
                                <Form.Item name="SAlkalinePhosphatase" label="S. Alkaline Phosphatase" style={{ marginBottom: '7px' }}>
                                    <FormInputMeasurement units={`U/L`} />

                                </Form.Item>
                                <Form.Item name="Serum Protien" label="Serum Protien" style={{ marginBottom: '7px' }}>
                                    <FormInputMeasurement units={`mg/dl`} />

                                </Form.Item>
                                <Form.Item name="Albumin" label="Albumin" style={{ marginBottom: '7px' }}>
                                    <FormInputMeasurement units={`mg/dl`} />

                                </Form.Item>
                                <Form.Item name="Globulin" label="Globulin" style={{ marginBottom: '7px' }}>
                                    <FormInputMeasurement units={`mg/dl`} />

                                </Form.Item>
                                <Form.Item name="AGRatio" label="A:G Ratio" style={{ marginBottom: '7px' }}>
                                    <FormInputMeasurement units={``} />

                                </Form.Item>
                                <Form.Item name="HbsAg" label="HbsAg" style={{ marginBottom: '7px' }}>
                                    <Select >
                                        <Option value="option1">Option 1</Option>
                                        <Option value="option2">Option 2</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={24}>
                            <Col span={12}></Col>
                            <Col span={12} style={{display:'flex',gap:'5px'}}>
                            <Button type="dashed" onClick={()=>{setOpen(false)}}>Cancel</Button>
                                <Form.Item style={{ marginBottom: '4px', display: "flex", justifyContent: 'end', alignItems: "end", gap: '2px' }}>
                                   
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>

                                </Form.Item>
                            </Col>
                        </Row>

                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default LFTDialog;