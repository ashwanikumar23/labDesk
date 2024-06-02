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
const CULTUREDialog = (props: any) => {
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
        CULTURE 
      </Button> */}
      <GradientButton id={0} BtnName={"CULTURE"} width="150px" clickEvent={() => setOpen(true)} />
      <Modal
        title="CULTURE & SENSITIVITY REPORT"
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
              <Col span={19} style={{paddingLeft:'30px'}}>
              <Form.Item label="SPECIMEN" style={{ marginBottom: 0 ,width:'500px'}}>
                <Form.Item
                  name="SPECIMEN_OPTION"
                 // rules={[{ required: true }]}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                  <Input placeholder="" />
                </Form.Item>
                <Form.Item
                  name="monSPECIMEN_INPUT"
                  //rules={[{ required: true }]}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                  <Input placeholder="" />
                </Form.Item>
              </Form.Item>
                <Form.Item name="DIRECTSMEAR" label="DIRECT SMEAR" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
                </Form.Item>
                <Form.Item name="GRAN STAIN" label="GRANSTAIN" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input  /><span></span> 
                  </Space>
                </Form.Item>
                <Form.Item name="KOH SMEAR" label="KOHSMEAR" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input  /><span></span> 
                  </Space>
                </Form.Item>
                
                <Divider style={{margin:"7px 0px"}} />
                <Space>
                  <Form.Item name="COLONY COUNT" label="COLONYCOUNT" style={{marginBottom: '7px'}}>
                  <Space>
                      <Input  /> 
                    </Space>
                  </Form.Item>
                  <div style={{width:"20px"}}></div>
                  <Form.Item name="BACTERIAL COUNT" label="BACTERIALCOUNT" style={{marginBottom: '7px'}}>
                  <Space>
                      <Input /> 
                    </Space>
                  </Form.Item>

                </Space>
                <Form.Item name="NO GROWTH" label="NOGROWTH" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /> 
                  </Space>
                </Form.Item>
                <Form.Item name="GROWTH" label="GROWTH(IF ANY)" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /> 
                  </Space>
                </Form.Item>
                <Row gutter={20}>
                <Space>
                  <div style={{width: "93px"}}></div>
                  <div style={{width: "152px"}}> <p>ANTIBOITICS TEST</p></div>
                  <div style={{width: "158px",textAlign:'center'}}> <p>SENSITIVE TEST</p></div>
                  <div style={{width: "162px"}}> <p></p></div>
                  <div style={{width: "152px"}}> <p>ANTIBOITICS TEST</p></div>
                  
                  </Space>
                  <Space>
                  <Form.Item name="MEDICINE1" label="MEDICINE(1)" style={{marginBottom: '7px'}}>
                      <Space>
                        <Input  /> 
                      </Space>
                </Form.Item>
                <div style={{width:"10px"}}></div>
                <Form.Item name="MEDICINESENITIVE1" label="" style={{marginBottom: '7px'}}>
                      <Space>
                        <Input  /> 
                      </Space>
                </Form.Item>
                <div style={{width:"40px"}}></div>
                <Form.Item name="MEDICINE16" label="MEDICINE16" style={{marginBottom: '7px'}}>
                      <Space>
                        <Input  /> 
                      </Space>
                </Form.Item>
                  </Space>

                  <Space>
                    <Form.Item name="MEDICINE2" label="MEDICINE(2)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE2" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE17" label="MEDICINE17" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>

                  <Space>
                    <Form.Item name="MEDICINE3" label="MEDICINE(3)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE3" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE18" label="MEDICINE18" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>

                  <Space>
                    <Form.Item name="MEDICINE4" label="MEDICINE(4)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE4" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE19" label="MEDICINE19" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>

                  <Space>
                    <Form.Item name="MEDICINE5" label="MEDICINE(5)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE5" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE20" label="MEDICINE20" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>


                  <Space>
                    <Form.Item name="MEDICINE6" label="MEDICINE(6)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE6" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE21" label="MEDICINE21" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>

                  <Space>
                    <Form.Item name="MEDICINE7" label="MEDICINE(7)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE7" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE22" label="MEDICINE22" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>


                  <Space>
                    <Form.Item name="MEDICINE8" label="MEDICINE(8)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE8" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE23" label="MEDICINE23" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>

                  <Space>
                    <Form.Item name="MEDICINE9" label="MEDICINE(9)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE9" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE24" label="MEDICINE24" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>

                  <Space>
                    <Form.Item name="MEDICINE10" label="MEDICINE(10)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE10" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE25" label="MEDICINE25" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>

                  <Space>
                    <Form.Item name="MEDICINE11" label="MEDICINE(11)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE11" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE26" label="MEDICINE26" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>

                  <Space>
                    <Form.Item name="MEDICINE12" label="MEDICINE(12)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE12" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE27" label="MEDICINE27" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>


                  <Space>
                    <Form.Item name="MEDICINE13" label="MEDICINE(13)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE13" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE28" label="MEDICINE28" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>


                  <Space>
                    <Form.Item name="MEDICINE14" label="MEDICINE(14)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE14" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE29" label="MEDICINE29" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>


                  <Space>
                    <Form.Item name="MEDICINE15" label="MEDICINE(15)" style={{marginBottom: '7px'}}>
                        <Space>
                          <Input  /> 
                        </Space>
                      </Form.Item>
                      <div style={{width:"10px"}}></div>
                      <Form.Item name="MEDICINESENITIVE15" label="" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                      </Form.Item>
                      <div style={{width:"40px"}}></div>
                      <Form.Item name="MEDICINE30" label="MEDICINE30" style={{marginBottom: '7px'}}>
                            <Space>
                              <Input  /> 
                            </Space>
                    </Form.Item>
                  </Space>
                </Row>
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

export default CULTUREDialog;
