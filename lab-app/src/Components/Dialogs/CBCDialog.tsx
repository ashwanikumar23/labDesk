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
import GradientButton from "../../shared/UI/Button/gradientButton";

const { Option } = Select;
const { Text, Link } = Typography;
const CBCDialog = (props: any) => {
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
      {/* <Button className="btn" type="primary" onClick={() => setOpen(true)}>
        CBC
      </Button> */}
      <GradientButton id={0} BtnName={"CBC"} width="150px" clickEvent={() => setOpen(true)} />
      <Modal
        title="CBC TEST"
        centered
        
        open={open}
        footer={null} 
        //onOk={() => setOpen(false)}
       onCancel={() => setOpen(false)}
        width={600}
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
            <Col span={5}></Col>
              <Col span={15} style={{paddingLeft:'30px'}}>
                <Form.Item name="HB" label="HB" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>gm/dl</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="TLC" label="TLC" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input  /><span>/cumm</span> 
                  </Space>
                </Form.Item>
                <Text code>DLC --:</Text>
                <Divider style={{margin:"7px 0px"}} />
                <Space>
                    <Form.Item name="Polymorphs" label="Polymorphs" style={{marginBottom: '7px'}}>
                    <Space>
                        <Input  /><span>%</span> 
                      </Space>
                    </Form.Item>
                    <div style={{width:'50px'}}></div>
                    <Form.Item name="Lym" label="Lym" style={{marginBottom: '7px'}}>
                    <Space>
                        <Input  /><span>%</span> 
                      </Space>
                    </Form.Item>
                </Space>

                <Space>
                    <Form.Item name="Lymphocytes" label="Lymphocytes" style={{marginBottom: '7px'}}>
                    <Space>
                        <Input  /><span>%</span> 
                      </Space>
                    </Form.Item>
                    <div style={{width:'50px'}}></div>
                    <Form.Item name="Gran" label="Gran" style={{marginBottom: '7px'}}>
                    <Space>
                        <Input  /><span>%</span> 
                      </Space>
                    </Form.Item>
                </Space>

                <Space>
                <Form.Item name="Monocytes" label="Monocytes" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <div style={{width:'50px'}}></div>
                <Form.Item name="Mid" label="Mid" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>

                </Space>

                <Space>
                  <Form.Item name="Eosinophils" label="Eosinophils" style={{marginBottom: '7px'}}>
                  <Space>
                      <Input  /><span>%</span> 
                    </Space>
                  </Form.Item>
                  <div style={{width:'50px'}}></div>
                  <Form.Item name="LymHash" label="Lym" style={{marginBottom: '7px'}}>
                  <Space>
                      <Input  /><span>#</span> 
                    </Space>
                  </Form.Item>

                </Space>

                <Space>
                  <Form.Item name="Basophils" label="Basophils" style={{marginBottom: '7px'}}>
                  <Space>
                      <Input  /><span>%</span> 
                    </Space>
                  </Form.Item>
                  <div style={{width:'50px'}}></div>
                  <Form.Item name="GranHash" label="Gran" style={{marginBottom: '7px'}}>
                  <Space>
                      <Input  /><span>#</span> 
                    </Space>
                  </Form.Item>

                </Space>

                <Space>
                  <Form.Item name="Mid" label="Mid" style={{marginBottom: '7px'}}>
                  <Space>
                      <Input  /><span>%</span> 
                    </Space>
                  </Form.Item>
                  <div style={{width:'50px'}}></div>
                  <Form.Item name="Mid" label="Mid" style={{marginBottom: '7px'}}>
                  <Space>
                      <Input  /><span>#</span> 
                    </Space>
                  </Form.Item>

                </Space>
               
                
                
               
                <Form.Item name="TotalRBCCount" label="Total RBC Count Description" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>million/cumm</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="PCV" label="PCV" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="MCV" label="MCV" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>fL</span> 
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
                <Form.Item name="RDW-CV" label="RDW-CV" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="RDW-SD" label="RDW-SD" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>fL</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="Platelets" label="Platelets" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>lakhs/cumm</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="MPV" label="MPV" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>fL</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="PDW-SD" label="PDW-SD" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span></span> 
                  </Space>
                </Form.Item>

                <Form.Item name="PDW-CV" label="PDW-CV" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="PCT" label="PCT" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>

                <Form.Item name="P-LCR" label="P-LCR" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>

                <Form.Item name="P-LCC" label="P-LCC" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span></span> 
                  </Space>
                </Form.Item>
                {/* <Form.Item name="BGrouping" label="B. Grouping" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="RhTyping" label="Rh Typing" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  />
                  </Space>
                </Form.Item> */}
                {/* <Form.Item name="MaterialParasite" label="Material Parasite" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item> */}
                {/* <Form.Item name="PTIControl" label="P.T.I.  Control" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>sec(100%)</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="Test" label="Test" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>sec</span> 
                  </Space>
                </Form.Item> */}
                {/* <Form.Item name="Index" label="Index" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Space>
                <Form.Item name="INR" label="INR" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /> 
                  </Space>
                </Form.Item> */}
                {/* <Form.Item name="APTT" label="APTT" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>sec</span> 
                  </Space>
                </Form.Item>
                </Space>
                <Space>
                <Form.Item name="Bleeding-Time" label="Bleeding-Time" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /> 
                  </Space>
                </Form.Item>
                

                </Space> */}
                {/* <Form.Item name="clotting-Time" label="clotting-Time" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /> 
                  </Space>
                </Form.Item> */}
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

export default CBCDialog;
