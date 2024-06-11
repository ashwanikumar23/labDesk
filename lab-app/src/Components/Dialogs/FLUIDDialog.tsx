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
} from "antd";
import GradientButton from "../../shared/UI/Button/gradientButton";
import Idailog from "../../shared/Interface/Idailog";
import IEnterForm from "../../shared/Interface/All-interface";
import IFluid from "../../shared/Interface/IFluid";

const { Option } = Select;
const FLUIDDialog = ({id,disabled,patientData,saveDataEvent}: Idailog) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] =  useState<IEnterForm>(patientData);
  const [homatology,setHomatology]=useState<IFluid|null>(null);

  const onFinish = (values: IFluid) => {
    console.log("Form values:", values);
    setHomatology(values);
    if(homatology){
      patientData.id=id;
      patientData.FLUID=homatology;
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
      FLUID
      </Button> */}
      <GradientButton id={0} BtnName={"FLUID"} width="150px" clickEvent={() => setOpen(true)} />
      <Modal
        title="FLUID TEST"
        centered
        
        open={open}
        footer={null} 
        //onOk={() => setOpen(false)}
       onCancel={() => setOpen(false)}
        width={800}
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
            <Row gutter={20}>
              <Col span={10}>
                <Form.Item name="TYPEOFFLUID" label="TYPE OF FLUID" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="GROSS_APPEARANCE" label="GROSS APPEARANCE" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                
                {/* <Form.Item name="Barbiturates" label="Barbiturates(BAR)" style={{marginBottom: '7px'}}>
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
                </Form.Item> */}
              </Col>
              <Col span={10}>
              <Form.Item name="RBCs" label="RBCs" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="ANY_MALIGNANT_CELLS" label="ANY MALIGNANT CELLS" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={10}>
              <div ><p>MACROSCOPIC EXAMINATION</p></div>
                <Form.Item name="PROTEINS" label="PROTEINS" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="MICRO_PROTEINS" label="MICRO PROTEINS" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="GLOBULIN" label="GLOBULIN" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="SUGAR" label="SUGAR" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="CHLORIDE" label="CHLORIDE" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <div ><p>MACROSCOPIC EXAMINATION</p></div>
                <Form.Item name="TOTALWBCCOUNT" label="TOTAL WBC COUNT" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item>
                <div ><p>DIFFERENTIAL EXAMINATION</p></div>
                <Form.Item name="LYMPHOCYTES" label="LYMPHOCYTES" style={{marginBottom: '7px'}}>
                  <Space>
                  <Input /><span>%</span>
                  </Space>
                </Form.Item>
                <Form.Item name="NEUTROPHILS" label="NEUTROPHILS" style={{marginBottom: '7px'}}>
                  <Space>
                  <Input /><span>%</span>
                  </Space>
                </Form.Item>
                <Form.Item name="EOSINOPHILS" label="EOSINOPHILS" style={{marginBottom: '7px'}}>
                  <Space>
                  <Input /><span>%</span>
                  </Space>
                </Form.Item>
                <Form.Item name="OTHERDESCRIPTION" label="OTHER DESCRIPTION" style={{marginBottom: '7px'}}>
                  <Space>
                  <Input /><span>%</span>
                  </Space>
                </Form.Item>
              </Col>
              <Col span={10}>
              <Form.Item name="ANYsPECIALSTAIN" label="ANY SPECIAL STAIN" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                {/* <Form.Item name="ANY_MALIGNANT_CELLS" label="ANY MALIGNANT CELLS" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item> */}
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

export default FLUIDDialog;