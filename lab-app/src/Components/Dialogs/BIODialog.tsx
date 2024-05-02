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
const BIOModal = (props:any) => {
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
    BIO TEST 
    </Button>
    <Modal
      title="BIO TEST"
      centered
      
      open={open}
      footer={null} 
      //onOk={() => setOpen(false)}
     onCancel={() => setOpen(false)}
      width={900}
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
          <Col span={8}>
          {/* <div ><p>MACROSCOPIC EXAMINATION</p></div> */}
          <Form.Item name="BSugarFasting" label="B.Sugar Fasting" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="B.SugarPP" label="B.SugarPP" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="B. Sugar Random" label="B. Sugar Random" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="Urea" label="Urea" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="Creatinine" label="Creatinine" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="BUN" label="BUN" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
           {/* <div ><p>MICROSCOPIC EXAMINATION</p></div> */}
          <Form.Item name="SUricAcid" label="S.Uric Acid" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="SerumProtein" label="Serum Protein" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="Albumin" label="Albumin" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="Globulin" label="Globulin" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="AGratio" label="A:G Ratio" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="TotalBilirubin" label="Total Bilirubin" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
         
          <Form.Item name="ConjBilirubin" label="Conj Bilirubin" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="UnConjBilirubin" label="UnConj Bilirubin" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="SGOT(AST)" label="SGOT (AST)" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>U/L</span>
              </Space>
          </Form.Item>
          <Form.Item name="SGPT(AST)" label="SGPT (AST)" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>U/L</span>
              </Space>
          </Form.Item>
          <Form.Item name="AlkPhosphatase" label="Alk. Phosphatase" style={{marginBottom: '7px'}}>
              <Space>
                <Input value={'21ML'}/><span>U/L</span>
              </Space>
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
           
            <Col span={8}>
            {/* <div ><p>CHEMICAL EXAMINATION</p></div> */}
            {/* <div ><p>MACROSCOPIC EXAMINATION</p></div> */}
            <Form.Item name="SCholestrol" label="S. Cholestrol" style={{marginBottom: '7px'}}>
            <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="SHDLCholestrol" label="S. HDL Cholestrol" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="STriglycerides" label="S. Triglycerides" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="SldlChelestrol" label="S ldl Chelestrol" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="S.VLDLCholeastrol" label="S. VLDL Choleastrol" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="Serum Total Lipids" label="Serum Total Lipids" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="TotalHDLCholestrol" label="Total HDL Cholestrol" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="SAcidPhosphastase" label="SAcidPhosphastase" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="ProstaticFraction" label="Prostatic Fraction" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="SerumAmylase" label="Serum Amylase" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="GGT" label="GTT" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="CK" label="CK" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="CPK_MB" label="CPK_MB" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="CPK_NAC" label="CPK_NAC" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="LDH" label="LDH" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="G6PD" label="G6PD" style={{marginBottom: '7px'}}>
          <Space>
                <Input value={'21ML'}/><span>mg/dl</span>
              </Space>
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
            <Col span={8} >
            <Form.Item name="SSodium" label="S. Sodium" style={{marginBottom: '7px'}}>
            <Space>
                <Input value={'21ML'}/><span>mEq/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="Potassium" label="Potassium" style={{marginBottom: '7px'}}>
            <Space>
                <Input value={'21ML'}/><span>mEq/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="Chloride" label="Chloride" style={{marginBottom: '7px'}}>
            <Space>
                <Input value={'21ML'}/><span>mEq/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="S.CalCium" label="S.CalCium" style={{marginBottom: '7px'}}>
            <Space>
                <Input value={'21ML'}/><span>mEq/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="S.Phosphorus" label="S.Phosphorus" style={{marginBottom: '7px'}}>
            <Space>
                <Input value={'21ML'}/><span>mEq/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="S.Copper" label="S.Copper" style={{marginBottom: '7px'}}>
            <Space>
                <Input value={'21ML'}/><span>mEq/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="S.Bicarbonate" label="S.Bicarbonate" style={{marginBottom: '7px'}}>
            <Space>
                <Input value={'21ML'}/><span>mEq/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="Lipase" label="Lipase" style={{marginBottom: '7px'}}>
            <Space>
                <Input value={'21ML'}/><span>mEq/dl</span>
              </Space>
          </Form.Item>
          <Form.Item name="GCT" label="GCT" style={{marginBottom: '7px'}}>
            <Space>
                <Input value={'21ML'}/><span>mEq/dl</span>
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

export default BIOModal;