import React, { useEffect, useState } from "react";
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
import Idailog from "../../shared/Interface/Idailog";
import IEnterForm from "../../shared/Interface/All-interface";
import IBio from "../../shared/Interface/IBio";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../shared/Store/store";
import { updateBIO, valueOfBIO } from "../../shared/Store/dataSlice";
import { FormInputMeasurement } from "../../shared/UI/customComponents/inputMeasurementComponents/formInputMeasurement";


const InitialValue: IBio = {
  // Print: undefined,
  // PrintAll: undefined,
  // Comments: undefined,
  BSugarFasting: '8',
  BSugarPP: '8',
  BSugarRandom: '8',
  Urea: '8',
  Creatinine: '8',
  BUN: '8',
  SUricAcid: '8',
  SerumProtein: '8',
  Albumin: '8',
  Globulin: '8',
  AGratio: '8',
  TotalBilirubin: '8',
  ConjBilirubin: '8',
  UnConjBilirubin: '8',
  SGOT_AST: '8',
  SGPT_AST: '8',
  AlkPhosphatase: '8',
  SCholestrol: '8',
  SHDLCholestrol: '8',
  STriglycerides: '8',
  SldlChelestrol: '8',
  S_VLDLCholeastrol: '8',
  SerumTotalLipids: '8',
  TotalHDLCholestrol: '8',
  SAcidPhosphastase: '8',
  ProstaticFraction: '8',
  SerumAmylase: '8',
  GGT: '8',
  CK: '8',
  CPK_MB: '8',
  CPK_NAC: '8',
  LDH: '8',
  G6PD: '8',
  SSodium: '8',
  Potassium: '8',
  Chloride: '8',
  S_CalCium: '8',
  S_Phosphorus: '8',
  SCopper: '8',
  SBicarbonate: '8',
  Lipase: '8',
  GCT: '8',
};



const { Option } = Select;
const BIOModal = ({ id, disabled, patientData, saveDataEvent }: Idailog) => {
  const [open, setOpen] = useState(false);
  const valueBIO = useSelector(valueOfBIO(id));
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<IEnterForm>(patientData);
  const [Bio, setBio] = useState<IBio | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [PRINT, setPRINT] = useState('PRINT-ALL');
  const [enable, setEnable] = useState(false);


  // useEffect(() => {
  //   console.log("Beforce", form.getFieldsValue());
  //   if(valueCBC &&  Object.entries(valueCBC).length !== 0){
  //     form.setFieldsValue({ ...InitialValue })

  //   }
  //   console.log("after", form.getFieldsValue());

  // }, []);

  // useEffect(() => {
  //   console.log("Beforce", form.getFieldsValue());
  //   if(valueCBC &&  Object.entries(valueCBC).length !== 0){
  //     form.setFieldsValue({ ...InitialValue })

  //   }
  //   console.log("after", form.getFieldsValue());
  // }, [form, valueCBC]);




  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setPRINT(e.target.value);
  };


  // const onChange = (e: RadioChangeEvent) => {
  //   console.log('radio checked', e.target.value);
  //   setValue(e.target.value);
  // };
  const clickEvent = () => {
    setOpen(true);
    // console.log(valueCBC);
    // if(valueCBC &&  Object.entries(valueCBC).length !== 0){
      console.log('check',valueBIO ,  Object.entries(valueBIO!).length !== 0);
    if(valueBIO &&  Object.entries(valueBIO).length !== 0){
      const {PrintAll,Print,Comments,...BIOValues}=valueBIO
      //form.setFieldsValue({ ...InitialValue })
      form.setFieldsValue({ ...valueBIO })

    }else{
      form.setFieldsValue({ ...InitialValue })

    }
    // //form.forceUpdate();
    // console.log("after",form.getFieldsValue());
    // console.log("value");
    // const {PrintAll,Print,Comments,...formDate}=valueCBC;
    // console.log("value",formDate);
    // setBIOValue(formDate);


    // }else{
    //   console.log("Reset");
    //   form.resetFields();
    // }
  }
  const setBIOValue = (data: IBio) => {
    // setBio(data);
  }
  const onFinish = (values: IBio) => {
    console.log("Form values:", values);
    setBio(values);
    values.PrintAll = PRINT === "PRINT-ALL";
    values.Print = PRINT !== "PRINT-ALL"
    dispatch(updateBIO({ id, data: values }));
    if (Bio) {
      patientData.id = id;
      patientData.BIO = Bio;
    }
    // setFormData(patientData);
    //console.log(formData);
    // saveDataEvent(formData);
  };
  return (
    <>
      <Badge dot color={(valueBIO && Object.entries(valueBIO).length !== 0)?'green':'red'} size="default">
        <GradientButton id={0} BtnName={" BIO TEST "} disabled={id===0} width="150px" clickEvent={() => clickEvent()} />
      </Badge>
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
          <br />
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={"PRINT"}>PRINT</Radio>
            <Radio value={"PRINT-ALL"}>PRINT ALL</Radio>
            <Radio value={"COMMENTS"}>COMMENTS</Radio>
          </Radio.Group>
        </Space>
          <Form
            form={form}
            name="BIO_form"
            // initialValues={{ remember: true }}
            onFinish={onFinish}
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 18 }}
            layout="horizontal"
          // initialValues={{ "BSugarFasting":'22' }}
          >
            <Row gutter={22}>
              <Col span={8}>
                {/* <div ><p>MACROSCOPIC EXAMINATION</p></div> */}
                <Form.Item name="BSugarFasting" label="B.Sugar Fasting" style={{ marginBottom: '7px' }}>
                  {/* <Input /> */}
                  <FormInputMeasurement units={`mg/dl`} />
                  {/* <span>mg/dl</span> */}
                  {/* <Space>
                  </Space> */}
                </Form.Item>
                <Form.Item name="BSugarPP" label="B.SugarPP" style={{ marginBottom: '7px' }}>
                  <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <span></span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="BSugarRandom" label="B. Sugar Random" style={{ marginBottom: '7px' }}>
                  <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="Urea" label="Urea" style={{ marginBottom: '7px' }}>
                  <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="Creatinine" label="Creatinine" style={{ marginBottom: '7px' }}>
                  <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="BUN" label="BUN" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                {/* <div ><p>MICROSCOPIC EXAMINATION</p></div> */}
                <Form.Item name="SUricAcid" label="S.Uric Acid" style={{ marginBottom: '7px' }}>
                  <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="SerumProtein" label="Serum Protein" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="Albumin" label="Albumin" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="Globulin" label="Globulin" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="AGratio" label="A:G Ratio" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="TotalBilirubin" label="Total Bilirubin" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>

                <Form.Item name="ConjBilirubin" label="Conj Bilirubin" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="UnConjBilirubin" label="UnConj Bilirubin" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="SGOT_AST" label="SGOT (AST)" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`U/L`} />
                  {/* <Space>
                    <Input /><span>U/L</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="SGPT_AST" label="SGPT (AST)" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`U/L`} />
                  {/* <Space>
                    <Input /><span>U/L</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="AlkPhosphatase" label="Alk. Phosphatase" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`U/L`} />
                  {/* <Space>
                    <Input /><span>U/L</span>
                  </Space> */}
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
                <Form.Item name="SCholestrol" label="S. Cholestrol" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="SHDLCholestrol" label="S. HDL Cholestrol" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="STriglycerides" label="S. Triglycerides" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="SldlChelestrol" label="S ldl Chelestrol" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="S_VLDLCholeastrol" label="S. VLDL Choleastrol" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="SerumTotalLipids" label="Serum Total Lipids" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="TotalHDLCholestrol" label="Total HDL Cholestrol" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="SAcidPhosphastase" label="SAcidPhosphastase" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="ProstaticFraction" label="Prostatic Fraction" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="SerumAmylase" label="Serum Amylase" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="GGT" label="GTT" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="CK" label="CK" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="CPK_MB" label="CPK_MB" style={{ marginBottom: '7px' }}>
                   <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="CPK_NAC" label="CPK_NAC" style={{ marginBottom: '7px' }}>
                  <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="LDH" label="LDH" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="G6PD" label="G6PD" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mg/dl`} />
                  {/* <Space>
                    <Input /><span>mg/dl</span>
                  </Space> */}
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
                <Form.Item name="SSodium" label="S. Sodium" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mEq/dl`} />
                  {/* <Space>
                    <Input /><span>mEq/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="Potassium" label="Potassium" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mEq/dl`} />
                  {/* <Space>
                    <Input /><span>mEq/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="Chloride" label="Chloride" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mEq/dl`} />
                  {/* <Space>
                    <Input /><span>mEq/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="S_CalCium" label="S.CalCium" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mEq/dl`} />
                  {/* <Space>
                    <Input /><span>mEq/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="S_Phosphorus" label="S.Phosphorus" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mEq/dl`} />
                  {/* <Space>
                    <Input /><span>mEq/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="SCopper" label="S.Copper" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mEq/dl`} />
                  {/* <Space>
                    <Input /><span>mEq/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="SBicarbonate" label="S.Bicarbonate" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mEq/dl`} /> 
                  {/* <Space>
                    <Input /><span>mEq/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="Lipase" label="Lipase" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mEq/dl`} />
                  {/* <Space>
                    <Input /><span>mEq/dl</span>
                  </Space> */}
                </Form.Item>
                <Form.Item name="GCT" label="GCT" style={{ marginBottom: '7px' }}>
                <FormInputMeasurement units={`mEq/dl`} />
                  {/* <Space>
                    <Input /><span>mEq/dl</span>
                  </Space> */}
                </Form.Item>
              </Col>

            </Row>
            <Form.Item style={{ marginBottom: '4px' }}>
              <div style={{ display: "flex", justifyContent: 'end', alignItems: "end", gap: '2px' }}>
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
                      {/* <strong>{key}:</strong>{formData.} */}
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