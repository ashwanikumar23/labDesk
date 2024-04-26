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

const { Option } = Select;


const GTTDialog = (props:any) => {
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
      <Button className="btn" type="primary" onClick={() => setOpen(true)}>
      GTT
      </Button>
      <Modal
        title="GTT Test"
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
              <Col span={12}>
                <div style={{textAlign:'center',color:"blue"}}><p style={{color:'blue'}}>Blood Level</p></div>
              <Form.Item name="Fasting" label="Fasting" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />: <Input />
                  </Space>
                </Form.Item>
                <Form.Item name="AfterHalfHour" label="After 1/2 Hour" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
                </Form.Item>
                <Form.Item name="AfterHour" label="After 1 Hour" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
                </Form.Item>
                <Form.Item name="AfterOneThirtyHour" label="After 1.30 Hour" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
                </Form.Item>
                <Form.Item name="AfterTwoHour" label="After 2 Hour" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
                </Form.Item>
                <Form.Item name="AfterTwoThirdyHour" label="After 2.30 Hour" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
                </Form.Item>
                <Form.Item name="AfterThreeHour" label="After 3 Hour" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
                </Form.Item>
              </Col>
              <Col span={2}></Col>
              <Col span={8}>
                <div style={{textAlign:'center',color:"blue"}}><h3 style={{color:'blue'}}>Urine Level</h3></div>
                <Form.Item name="U1" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U2" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U3" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U4" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U5" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U6" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U7" label="-" style={{marginBottom: '7px'}}>
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

export default GTTDialog;