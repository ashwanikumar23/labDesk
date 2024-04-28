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
  Typography,
} from "antd";

const { Option } = Select;
const { Text, Link } = Typography;
const SEMENDialog = (props: any) => {
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
      SEMEN
      </Button>
      <Modal
        title="SEMEN TEST"
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
           // labelCol={{ span: 4 }}
           // wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ remember: true }}
          >
            <Row gutter={20}>
            <Col span={4}></Col>
              <Col span={14} style={{paddingLeft:'30px'}}>
                <Form.Item name="SpecimenCollectedby" label="Specimen Collected by" style={{marginBottom: '7px'}}>
                <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Duration of Sample" label="Duration of Sample" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input  /><span></span> 
                  </Space>
                </Form.Item>
                <Form.Item name="AbstinencePeriod" label="AbstinencePeriod" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Text code>GROSS EXAMINATION</Text>
                <Divider style={{margin:"7px 0px"}} />
                <Form.Item name="ColourQ" label="" style={{ marginBottom: 0 }}>
                  <Form.Item
                    name="Colour"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                  >
                   <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                  </Form.Item>
                  <Form.Item
                    name="Quantity"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(40% - 8px)', margin: '0 8px' }}
                  >
                    <Space>
                    <Input placeholder="Input birth month" /><span>ml</span>
                    </Space>
                  </Form.Item>
                </Form.Item>
                <Form.Item name="Liquificationtime" label="Liquification time" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="Reaction" label="Reaction" style={{marginBottom: '7px'}}>
                <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Viscosity" label="Viscosity" style={{marginBottom: '7px'}}>
                <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Text code>GROSS EXAMINATION</Text>
                <Divider style={{margin:"7px 0px"}} />
                <Form.Item name="Motility" label="Motility" style={{marginBottom: '7px'}}>
                <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Active" label="Active" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span>
                  </Space>
                </Form.Item>
                <Form.Item name="Sluggish" label="Sluggish" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span>
                  </Space>
                </Form.Item>
                <Form.Item name="Sluggish" label="Sluggish" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span>
                  </Space>
                </Form.Item>
                <Form.Item name="Dead" label="Dead" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="PusCell" label="Pus Cell" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>/HPF</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="RBCs" label="RBCs" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>/HPF</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="Epithellals" label="Epithellals" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>/HPF</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="Morphology" label="Morphology" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="TotalSpermCount" label="Total Sperm Count" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  />
                  </Space>
                </Form.Item>
                <Form.Item name="Comments" label="Comments" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="OPTION" label="OPTION" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                
                
                
                
              </Col>
              {/* Repeat Form.Item for each input */}
              {/* Example Select */}
              {/* <Col span={4}></Col> */}
              {/* <Col span={8}>
              <Form.Item name="PTTK" label="PTTK" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>sec</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="TotalRBCCount" label="Total RBC Count" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>million/Cumm</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="Platelets_L" label="Platelets" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>lakh/cumm</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="Platelets_T" label="" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>Throusands/cumm</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="PCV" label="PCV" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="Reticulocyte" label="Reticulocyte Count" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="MCV" label="MCV" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>tl</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="MCH" label="MCH" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>pG</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="MCHC" label="MCHC" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="A-Eosinophil-Count" label="A. Eosinophil Count" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>/Cumm</span> 
                  </Space>
                </Form.Item>


                <Form.Item name="LECell" label="L. E; Cell">
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Coombs-Test(D)" label="Coombs Test(D)">
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="Coombs-Test(I)" label="Coombs Test(I)">
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
              </Col> */}
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

export default SEMENDialog;
