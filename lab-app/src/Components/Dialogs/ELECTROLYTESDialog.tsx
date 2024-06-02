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

const { Option } = Select;
const ELECTROLYTESDialog = (props:any) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    setFormData(values);
  };

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
    {/* <Button className="btn" type="primary" onClick={() => setOpen(true)}>
    ELECTROLYTES 
    </Button> */}
    <GradientButton id={0} BtnName={"ELECTROLYTES"} width="150px" clickEvent={() => setOpen(true)} />
    <Modal
      title="ELECTROLYTES TEST"
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
         // labelCol={{ span: 4 }}
         // wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ remember: true }}
        >
          <Row gutter={22}>
          <Col span={4}></Col>
            <Col span={18}>
            <Form.Item name="S_Sodium" label="S. Sodium" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mEq/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="Potassium" label="Potassium" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mEq/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="Chloride" label="Chloride" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mEq/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="S_Calcium" label="S. Calcium" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="S_Bicarbonate" label="S. Bicarbonate" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mMol/L</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="S_Magnesium" label="S. Magnesium" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="S_Phosphorus" label="S. Phosphorus" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
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

export default ELECTROLYTESDialog;