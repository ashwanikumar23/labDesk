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
import { PaitentValue, updateKFT, valueOFKFT } from "../../shared/Store/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../shared/Store/store";
import { IKFT } from "../../shared/Interface/IKFT";

const initialValue:IKFT={
  RFT_KFT: "",
  urea: "",
  Creatinine: "",
  BUN: "",
  S_Uric_Acid: "",
  SerumProtein: "",
  Albumin: "",
  Globulin: "",
  AG_Ratio: "",
  eGFR: ""
}
const { Option } = Select;
const RFTDialog = (props:any) => {
  const {id}=props;
  const [open, setOpen] = useState(false);
  let valueRFT = useSelector(valueOFKFT(id));
  const saveddata = useSelector(PaitentValue(id));
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (valueRFT) {

    } else {
      valueRFT = initialValue
    }
}, [saveddata]);

  const onFinish = (values: IKFT) => {
    console.log("Form values:", values);
    //setFormData(values);
    dispatch(updateKFT({ id, data: values }));
    setOpen(false);
  };

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const ClickEvent=()=>{
    setOpen(true);
    if (valueRFT && Object.entries(valueRFT).length !== 0) {
      const { ...LFTValues } = valueRFT
      form.setFieldsValue({ ...LFTValues })
     // form.setFieldsValue({ ...LFTValues })

  } else {
      form.setFieldsValue({ ...initialValue })

  }

  }

  return (
    <>

       <Badge dot size="default">
      <GradientButton id={0} BtnName={"RFT/KFT"} width="150px" clickEvent={() => ClickEvent()} />
        
       </Badge>
      <Modal
        title="RFT/KFT"
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
      <Radio value={"Comments"}>Comments</Radio>
    </Radio.Group>
          <Form
            form={form}
            onFinish={onFinish}
           // labelCol={{ span: 4 }}
           // wrapperCol={{ span: 14 }}
            layout="horizontal"
           
          >
            <Row gutter={16}>
              <Col span={15}>
                <Form.Item name="RFT_KFT" label="RFT/KFT" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="urea" label="urea" style={{marginBottom: '7px'}}>
                <Space><Input /><span>mg/dl</span></Space>
                </Form.Item>
                <Form.Item name="Creatinine" label="Creatinine" style={{marginBottom: '7px'}}>
                <Space><Input /><span>mg/dl</span></Space>
                </Form.Item>
                <Form.Item name="BUN" label="BUN" style={{marginBottom: '7px'}}>
                <Space><Input /><span>mg/dl</span></Space>
                </Form.Item>
                <Form.Item name="S_Uric_Acid" label="Uric Acid" style={{marginBottom: '7px'}}>
                <Space><Input /><span>mg/dl</span></Space>
                </Form.Item>
                <Form.Item name="SerumProtein" label="Serum Protein" style={{marginBottom: '7px'}}>
                <Space><Input /><span>mg/dl</span></Space>
                </Form.Item>
                <Form.Item name="Albumin" label="Albumin" style={{marginBottom: '7px'}}>
                <Space><Input /><span>mg/dl</span></Space>
                </Form.Item>
                <Form.Item name="Globulin" label="Globulin" style={{marginBottom: '7px'}}>
                <Space><Input /><span>mg/dl</span></Space>
                </Form.Item>
                <Form.Item name="AG_Ratio" label="A:G Ratio" style={{marginBottom: '7px'}}>
                <Space><Input /><span>mg/dl</span></Space>
                </Form.Item>
                <Form.Item name="eGFR" label="eGFR" style={{marginBottom: '7px'}}>
                  <Space><Input /><span>mg/dl</span></Space>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item style={{marginBottom: '4px'}}>
              <div style={{display:"flex",justifyContent:'end',alignItems:"end",gap:'2px'}}>
              <Button type="dashed">Cancel</Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              </div>
            </Form.Item>
          </Form>

          {/* Display the form data in a grid form */}
          {formData && (
            <div>
              <h2>Form Data</h2>
              <Row gutter={16}>
                {Object.entries(formData).map(([key, value]) => (
                  <Col span={8} key={key}>
                    <p>
                      <strong>{key}:</strong>{formData[key]}
                    </p>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}

export default RFTDialog;