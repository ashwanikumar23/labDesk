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
import IEnterForm from "../../shared/Interface/All-interface";
import Idailog from "../../shared/Interface/Idailog";
import IHBA1c2 from "../../shared/Interface/ IHBA1c2";

const { Option } = Select;
const HBA1c2Dialog = ({id,disabled,patientData,saveDataEvent}: Idailog) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] =useState<IEnterForm>();
  const [homatology,setHomatology]=useState<IHBA1c2|null>(null);

  const onFinish = (values: IHBA1c2) => {
    console.log("Form values:", values);
    setHomatology(values);
    if(homatology){
      // patientData.id=id;
      // patientData.HBA1c2=homatology;
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
    HBA1c1 
    </Button> */}
     <Badge dot size="default">
    <GradientButton id={0} BtnName={"HBA1c2"} width="150px" clickEvent={() => setOpen(true)} />

     </Badge>
    <Modal
      title="HBA1c1 TEST"
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
    <Radio value={"METHOD"}>METHOD</Radio>
    <Radio value={"COMMENTS"}>COMMENTS</Radio>
  </Radio.Group>
        <Form
          form={form}
          onFinish={onFinish}
         // labelCol={{ span: 4 }}
         // wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ remember: true }}
        >
          <Row gutter={22}>
          <Col span={4}></Col>
            <Col span={18}>
            <Form.Item name="HBA1c1" label="HBA1c1" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>%</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="ABG" label="ABG" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
              </Form.Item>
              {/* <Form.Item name="TSH" label="TSH" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>u IU/ml</span> 
                  </Space>
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


export default HBA1c2Dialog;