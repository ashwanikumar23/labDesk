import React, { useState } from "react";
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
import Idailog from "../../shared/Interface/Idailog";
import IEnterForm from "../../shared/Interface/All-interface";
import IDRUG from "../../shared/Interface/IDRUG";
import { AppDispatch } from "../../shared/Store/store";
import { useDispatch } from "react-redux";
import { updateDRUGABUSE } from "../../shared/Store/dataSlice";

const { Option } = Select;
const DRUG_ABUSE = ({id,disabled,patientData,saveDataEvent}: Idailog) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<IEnterForm>(patientData);
  const [homatology,setHomatology]=useState<IDRUG|null>(null);
  const dispatch:AppDispatch=useDispatch();

  const onFinish = (values: IDRUG) => {
    console.log("Form values:", values);
    setHomatology(values);
    if(homatology){
      patientData.id=id;
      patientData.DRUGABUSE=homatology;
      dispatch(updateDRUGABUSE({id,data:homatology}));
    }else{
   ///throw alert messages
    }
    setFormData(patientData);
    console.log(formData);
    saveDataEvent(formData);
  };

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      {/* <Button className="btn" type="primary" onClick={() => setOpen(true)}>
      DRUG ABUSE3
      </Button> */}
       <Badge dot size="default">
        <GradientButton id={0} BtnName={"DRUG ABUSE3"} clickEvent={() => setOpen(true)} />

       </Badge>
      <Modal
        title="DRUG ABUSET TEST"
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
    </Radio.Group>
          <Form
            form={form}
            onFinish={onFinish}
           // labelCol={{ span: 4 }}
           // wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ remember: true }}
          >
            <Row gutter={16}>
              <Col span={16}>
                <Form.Item name="Cocaine" label="Cocain (COC)" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Benzodiazepine" label="Benzodiazepine(BZO)" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Morphine" label="Morphine(MOP)" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Amphetamine" label="Amphetamine(AMP)" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Barbiturates" label="Barbiturates(BAR)" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Merijuana" label="Merijuana(THC)" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Opiates" label="Opiates(OPI)" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
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
                      <strong>{key}:</strong>
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

export default DRUG_ABUSE;