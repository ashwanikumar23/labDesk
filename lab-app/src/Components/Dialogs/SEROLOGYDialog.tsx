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

const { Option } = Select;

const SEROLOGYDialog = (props:any) => {
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
    SEROLOGY TEST 
    </Button> */}
     <Badge dot size="default">
    <GradientButton id={0} BtnName={"SEROLOGY TEST"} width="150px" clickEvent={() => setOpen(true)} />

     </Badge>
    <Modal
      title="SEROLOGY TEST"
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
          <Form.Item name="ASOTITRE" label="ASO TITRE" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
          </Form.Item>
          <Form.Item name="ASO(Quantitative)" label="ALSO (Quantitative) " style={{marginBottom: '7px'}}>
              <Input value={'21ML'}/>
          </Form.Item>
          <Form.Item name="CReactionProtien" label="C Reaction Protien" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
          </Form.Item>
          <Form.Item name="CRP(Quantitative)" label="CRP (Quantitative) " style={{marginBottom: '7px'}}>
              <Input value={'21ML'}/>
          </Form.Item>
          <Form.Item name="R.A.Factor" label="R.A.Factor" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="RAF(Quantitative)" label="RAF (Quantitative) " style={{marginBottom: '7px'}}>
              <Input value={'21ML'}/>
          </Form.Item>
          <Form.Item name="Mantoux" label="Mantoux" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Dia" label="Dia" style={{marginBottom: '7px'}}>
              <Input />
          </Form.Item>
          <Form.Item name="with" label="With" style={{marginBottom: '7px'}}>
              <Input />
          </Form.Item>
          <Form.Item name="PPDAfter" label="PPDAfter" style={{marginBottom: '7px'}}>
              <Input />
          </Form.Item>
          {/* <Form.Item name="APPEARANCE" label="APPEARANCE" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item> */}
           <div ><p>GRAVINDEX TEST</p></div>
          <Form.Item name="BETAHCG" label="BETAHCG" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">MANY</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="PREGNANCYCARDTEST" label="PREGNANCY CARD TEST" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          {/* <Form.Item name="EpthelialCell" label="Epthelial Cel" style={{marginBottom: '7px'}}>
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
          </Form.Item> */}
          <div ><p>MICROSCOPIC EXAMINATION</p></div>
          <Form.Item name="QUALITATIVE" label="QUARITATIVE" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          
          <Form.Item name="QUANTITATIVE" label="QUANTITATIVE" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          {/* <Form.Item name="Yeast" label="Yeast" style={{marginBottom: '7px'}}>
              <Space><Input /><span>%</span></Space>
          </Form.Item>
          <Form.Item name="BenceJonesProtien" label="Bence Jones Protien" style={{marginBottom: '7px'}}>
              <Space><Input /><span>%</span></Space>
          </Form.Item> */}
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
            {/* <div ><p>CHEMICAL EXAMINATION</p></div> */}
            {/* <div ><p>MACROSCOPIC EXAMINATION</p></div> */}
            <Form.Item name="WIDALREACTION" label="WIDAL REACTION" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          {/* <Form.Item name="MICROALBUMIN" label="MICRO ALBUMIN" style={{marginBottom: '7px'}}> */}
            <Input />
          {/* </Form.Item> */}
          <Form.Item name="STO" label="ST 'O'" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="STH" label="ST 'H'" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="PAH" label="PA 'H'" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="PBH" label="PB 'H'" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="HBSAG" label="Hbsag" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="HIV-I" label="HIV-IN" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="HIV-II" label="HIV-II" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="SPUTUMFORAFB" label="SPUTUM FOR AFB" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="GRAMSTAIB" label="GRAMSTAIB" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Slidertestfortoxoplasmagondit" label="Slider test for toxoplasma gondit" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="stainForAFB" label="stain For AFB (Z.N. Stain)" style={{marginBottom: '7px'}}>
          <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="HepatitisC.Virus(HCV)" label="HepatitisC.Virus(HCV)" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="HepatitisC.Virus(HCV-II)" label="HepatitisC.Virus(HCV-II)" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Dengue.Rapid & Screen Test(lgG)" label="Dengue.Rapid & Screen Test(lgG)" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Dengue.Rapid & Screen Test(lgM)" label="Dengue.Rapid & Screen Test(lgM)" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Dengue.Rapid & Screen Test(lgM)" label="Dengue.Rapid & Screen Test(lgM)" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Denguensag" label="Dengue NS!Ag" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Typhidot(lgM)" label="Typhidot(lgM)" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Typhidot(lgM)" label="Typhidot(lgM)" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Typhidot(lgG)" label="Typhidot(lgG)" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="Typhidot" label="Typhidot" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="MalariaAntigen" label="Malaria Antigen" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="weilFelix" label="weil Felix" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
          </Form.Item>
          <Form.Item name="ChikunGunya" label="Chikun Gunya" style={{marginBottom: '7px'}}>
              <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
              </Select>
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

export default SEROLOGYDialog;