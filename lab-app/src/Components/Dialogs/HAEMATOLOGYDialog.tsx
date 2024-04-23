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
} from "antd";

const { Option } = Select;
const HAEMATOLOGYDialog = (props: any) => {
  const [open, setOpen] = useState(false);
  const [openHAEMATOLOGY, setOpenHAEMATOLOGY] = React.useState(false);
  const handleClickOpen = () => {
    setOpenHAEMATOLOGY(true);
  };

  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    setFormData(values);
  };



  return (
    <>
      <Button className="btn" type="primary" onClick={() => setOpen(true)}>
        HAEMATOLOGY
      </Button>
      <Modal
        title="HAEMATOLOGY"
        centered
        
        open={open}
        footer={null} 
        //onOk={() => setOpen(false)}
       onCancel={() => setOpen(false)}
        width={1000}
      >
        <div>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            initialValues={{ remember: true }}
          >
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item name="HB" label="Input 1">
                  <Input />
                </Form.Item>
                <Form.Item name="input1" label="Input 1">
                  <Input />
                </Form.Item>
                <Form.Item name="input1" label="Input 1">
                  <Input />
                </Form.Item>
              </Col>
              {/* Repeat Form.Item for each input */}
              {/* Example Select */}
              <Col span={8}>
                <Form.Item name="select1" label="Select 1">
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            {/* Repeat Row and Col for additional inputs */}
            {/* Add more Form.Items as needed */}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
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
  );
};

export default HAEMATOLOGYDialog;
