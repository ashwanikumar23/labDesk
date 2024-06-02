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
const URINEDialog = (props:any) => {
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
    URINE TEST 
    </Button> */}
    <GradientButton id={0} BtnName={"URINE TEST"} width="150px" clickEvent={() => setOpen(true)} />
    <Modal
      title="URINE TEST"
      centered
      
      open={open}
      footer={null} 
      //onOk={() => setOpen(false)}
     onCancel={() => setOpen(false)}
      width={700}
    >
      <div><Space>
      <p>PHYSICAL EXAMINATION</p>
      <Radio.Group onChange={onChange} value={value}>
    <Radio value={"PRINT"}>PRINT</Radio>
    <Radio value={"PRINT-ALL"}>PRINT ALL</Radio>
    {/* <Radio value={"METHOD"}>METHOD</Radio> */}
    <Radio value={"COMMENTS"}>COMMENTS</Radio>
  </Radio.Group>
      </Space>
        <Form
          form={form}
          onFinish={onFinish}
         // labelCol={{ span: 4 }}
         // wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ remember: true }}
        >
          <Row gutter={22}>
          <Col span={10}>
          {/* <div ><p>MACROSCOPIC EXAMINATION</p></div> */}
          <Form.Item name="QUALITY" label="QUALITY" style={{marginBottom: '7px'}}>
              <Input value={'21ML'}/>
          </Form.Item>
          <Form.Item name="COLOUR" label="COLOUR" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
          </Form.Item>
          <Form.Item name="DEPOSITS" label="DEPOSITS" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="SPECIFICGRAVITY" label="SPECIFIC GRAVITY" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="REACTION" label="REACTION" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="APPEARANCE" label="APPEARANCE" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
           <div ><p>MICROSCOPIC EXAMINATION</p></div>
          <Form.Item name="RBCs" label="RBCs" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">MANY</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="PUSCELLS" label="Pus Cells" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="EpthelialCell" label="Epthelial Cel" style={{marginBottom: '7px'}}>
              <Input/>
          </Form.Item>
          <Form.Item name="Crystal" label="Crystal" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Casts" label="Casts" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <div ><p>MICROSCOPIC EXAMINATION</p></div>
          <Form.Item name="SpermatozaSeen" label="Spermatoza Seen" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          
          <Form.Item name="24hoursProtein" label="24 hours Protein" style={{marginBottom: '7px'}}>
              <Space><Input /><span>%</span></Space>
          </Form.Item>
          <Form.Item name="Yeast" label="Yeast" style={{marginBottom: '7px'}}>
              <Space><Input /><span>%</span></Space>
          </Form.Item>
          <Form.Item name="BenceJonesProtien" label="Bence Jones Protien" style={{marginBottom: '7px'}}>
              <Space><Input /><span>%</span></Space>
          </Form.Item>
          {/* <Form.Item name="PlusCells" label="Plus Cells" style={{marginBottom: '7px'}}>
              <Space><Input /><span>/HPF</span></Space>
          </Form.Item>
          <Form.Item name="RBCs" label="RBCs" style={{marginBottom: '7px'}}>
              <Space><Input /><span>/HPF</span></Space>
          </Form.Item>
          <Form.Item name="EPITHELIAL CELL" label="EPITHELIAL CELL" style={{marginBottom: '7px'}}>
              <Space><Input /><span>/HPF</span></Space>
          </Form.Item> */}
          {/* <Form.Item name="MORPHOLOGY" label="MORPHOLOGY" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="TOTALSPERMCOUNT" label="TOTAL SPERM COUNT" style={{marginBottom: '7px'}}>
              <Input/>
          </Form.Item>
          <Form.Item name="COMMENTS" label="COMMENTS" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="OPINION" label="OPINION" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item> */}
          
          
          </Col>
           <Col span={4} ></Col>
            <Col span={10}>
            <div ><p>CHEMICAL EXAMINATION</p></div>
            {/* <div ><p>MACROSCOPIC EXAMINATION</p></div> */}
            <Form.Item name="ALBUMIN" label="ALBUMIN" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="MICROALBUMIN" label="MICRO ALBUMIN" style={{marginBottom: '7px'}}>
            <Input />
          </Form.Item>
          <Form.Item name="SUGAR" label="SUGAR" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="ACETONE" label="ACETONE" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="KETONE" label="KETONE" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="BITESALTS" label="BITE SALTS" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="UROBILINOGEN" label="UROBILINOGEN" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="PH" label="PH" style={{marginBottom: '7px'}}>
              <Input />
          </Form.Item>
          <Form.Item name="NITRITE" label="NITRITE" style={{marginBottom: '7px'}}>
              <Input />
          </Form.Item>
          {/* <Form.Item name="D-DIMER" label="DIMER" style={{marginBottom: '7px'}}>
              <Input />
          </Form.Item>
          <Form.Item name="CYST" label="CYST" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item> */}
          {/* <Form.Item name="UndigestedFoodParticles" label="Undigested Food Particles" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="RBCs" label="RBCs" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item> */}
          {/* <Form.Item name="PlusCells" label="Plus Cells" style={{marginBottom: '7px'}}>
                <Space>
                  <Input />
                </Space>
          </Form.Item>
          <Form.Item name="EpithellalCells" label="EpithellalCells Cells" style={{marginBottom: '7px'}}>
                <Space>
                  <Input />
                </Space>
          </Form.Item> */}
              {/* <Form.Item name="S_HDL_cholestrol" label="S.HDL cholestrol" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="S_Triglycerides" label="S. Trighycerides" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="S_VLDLcholestrol" label="S. VLDL Cholestrol" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="S_LDLcholestrol" label="S. LDL cholestrol" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="SerumTotalLipids" label="Serum Total Lipids" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="Totalcholestrol_HDIcholestrol" label="Total cholestrol/HDI. cholestrol" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LDL/HDLcholestrol" label="LDL/HDL cholestrol" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
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

export default URINEDialog;