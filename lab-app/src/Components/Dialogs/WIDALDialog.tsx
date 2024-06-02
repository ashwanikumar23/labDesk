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
const WIDALDialog = (props:any) => {
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
      WADAL
      </Button> */}
      <GradientButton id={0} BtnName={"WADAL TEST"} width="150px" clickEvent={() => setOpen(true)} />
      <Modal
        title=" WADAL TEST"
        centered
        
        open={open}
        footer={null} 
        //onOk={() => setOpen(false)}
       onCancel={() => setOpen(false)}
        width={700}
      >
        <div>
        <Radio.Group onChange={onChange} value={value}>
      <Radio value={"PRINT"}>PRINT</Radio>
      <Radio value={"PRINT-ALL"}>PRINT ALL</Radio>
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
            <Row gutter={20}>
            <Col span={6}><p style={{textAlign:'center',color:'black'}}>Positive Upto dil</p></Col>
            <Col span={3}><p style={{textAlign:'center',color:'black'}}>1:20</p></Col>
            <Col span={3}> <p style={{textAlign:'center',color:'black'}}>1:40</p></Col>
            <Col span={3}><p style={{textAlign:'center',color:'black'}}>1:80</p></Col>
            <Col span={3}> <p style={{textAlign:'center',color:'black'}}>1:160</p></Col>
            <Col span={3}><p style={{textAlign:'center',color:'black'}}>1:320</p></Col>
            <Col span={3}> <p style={{textAlign:'center',color:'black'}}>1:640</p></Col>
           
           </Row>
           <Divider style={{margin:'2px 0px'}} />
           <Row gutter={20}>
            <Col span={6}><p style={{textAlign:'center',color:'black',margin:"7px"}}>S.TYPHI "O" (TO)</p></Col>
            <Col span={3}>
                  <Form.Item name="STYPHIO" label="" style={{marginBottom: '7px'}}>
                    <Input />
                  </Form.Item>
            </Col>
            <Col span={3}>
            <Form.Item name="STYPHIO2" label="" style={{marginBottom: '7px'}}>
                <Input />
                </Form.Item>
            </Col>
            <Col span={3}><Form.Item name="STYPHIO3" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="STYPHIO4" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="STYPHIO5" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="STYPHIO6" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            </Row>
            <Divider style={{margin:'2px 0px'}} />
            <Row gutter={20}>
            <Col span={6}><p style={{textAlign:'center',color:'black',margin:"7px"}}>S.TYPHI "H" (TH)</p> </Col>
            <Col span={3}><Form.Item name="STYPHIH" label="" style={{marginBottom: '7px'}}>
                    <Input />
                  </Form.Item></Col>
            <Col span={3}> <Form.Item name="STYPHIH2" label="" style={{marginBottom: '7px'}}>
                <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="STYPHIp" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="STYPHIH4" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="STYPHIH5" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="STYPHIH6" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            </Row>
            <Divider style={{margin:'2px 0px'}} />
            <Row gutter={20}>
              <Col span={6}><p style={{textAlign:'center',color:'black',margin:"7px"}}>S.PARATYPHI "A" (H)</p>   </Col>
              <Col span={3}><Form.Item name="PARATYPHI" label="" style={{marginBottom: '7px'}}>
                    <Input />
                  </Form.Item></Col>
              <Col span={3}><Form.Item name="PARATYPHI2" label="" style={{marginBottom: '7px'}}>
                <Input />
                </Form.Item></Col>
              <Col span={3}><Form.Item name="PARATYPHI3" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
              <Col span={3}><Form.Item name="PARATYPHI4" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
              <Col span={3}><Form.Item name="PARATYPHI5" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
              <Col span={3}><Form.Item name="PARATYPHI6" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            </Row>
            <Divider style={{margin:'2px 0px'}} />
            <Row gutter={20}>
            <Col span={6}><p style={{textAlign:'center',color:'black',margin:"7px"}}>S.PARATYPHI "B" (H)</p> </Col>
            <Col span={3}><Form.Item name="PARATYPHIB" label="" style={{marginBottom: '7px'}}>
                    <Input />
                  </Form.Item></Col>
            <Col span={3}><Form.Item name="PARATYPHIB2" label="" style={{marginBottom: '7px'}}>
                <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="PARATYPHIB3" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="PARATYPHIB4" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="PARATYPHIB5" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            <Col span={3}><Form.Item name="PARATYPHIB6" label="" style={{marginBottom: '7px'}}>
                  <Input />
                </Form.Item></Col>
            </Row>
            <Divider style={{margin:'2px 0px'}} />
             
            
                
              
                
                


            
            {/* <Row gutter={20}></Row>
            <Row gutter={20}></Row>
            <Row gutter={20}></Row> */}
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

export default WIDALDialog;