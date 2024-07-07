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
  Typography,
  Badge,
} from "antd";
import GradientButton from "../../shared/UI/Button/gradientButton";
import Idailog from "../../shared/Interface/Idailog";
import IEnterForm from "../../shared/Interface/All-interface";
import IHAEMATOLOGY from "../../shared/Interface/IHAEMATOLOGY";
import { AppDispatch } from "../../shared/Store/store";
import { useDispatch, useSelector } from "react-redux";
import { PaitentValue, updateHAEMATOLOGY, valueOfHAEMATOLOGY } from "../../shared/Store/dataSlice";
import { FormInputMeasurement } from "../../shared/UI/customComponents/inputMeasurementComponents/formInputMeasurement";

const { Option } = Select;
const { Text, Link } = Typography;

const initial:IHAEMATOLOGY={
  Print: false,
  Comments: false,
  HB: "12",
  TLC: "",
  Polymorphs: "",
  Lymphocytes: "",
  Monocytes: "",
  Eosinophils: "",
  Basophils: "",
  Description: "",
  AbnormalCell: "",
  ESR: "",
  BGrouping: "",
  RhTyping: "",
  MaterialParasite: "",
  PTIControl: "",
  Test: "",
  Index: "",
  INR: "",
  APTT: "",
  BleedingTime: "",
  ClottingTime: "",
  PTTK: "",
  TotalRBCCount: "",
  Platelets_L: "",
  Platelets_T: "",
  PCV: "",
  Reticulocyte: "",
  MCV: "",
  MCH: "",
  MCHC: "",
  AEosinophilCount: "",
  LECell: "",
  CoombsTest_D: "",
  CoombsTest_I: ""
}


const HAEMATOLOGYDialog = ({id, disabled}: Idailog) => {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openHAEMATOLOGY, setOpenHAEMATOLOGY] = React.useState(false);
  let valueHAEMATOLOGY = useSelector(valueOfHAEMATOLOGY(id)) // ||initial ;
  const savedData = useSelector(PaitentValue(id)); 
  const handleClickOpen = () => {
    setOpenHAEMATOLOGY(true);
  };

  const [form] = Form.useForm();
  const [formData, setFormData] = useState<IEnterForm>();
  const [homatology,setHomatology]=useState<IHAEMATOLOGY|null>(null);

useEffect(()=>{
  console.log("valueHAEMATOLOGY",valueHAEMATOLOGY);
  if(valueHAEMATOLOGY &&  Object.entries(valueHAEMATOLOGY).length !== 0){
    alert('Update');

  }else{
    valueHAEMATOLOGY=initial;
  }

},[savedData]);
  const onFinish = (values: IHAEMATOLOGY) => {
    console.log("Form values:", values);
    setHomatology(values);
    if(homatology){
      console.warn("hiye")
      const body={id: id, data: homatology}
      // patientData.id=id;
      // patientData.HAEMATOLOGY=homatology;
    }
    dispatch(updateHAEMATOLOGY({id,data:values}));
  };

  const clickEvent = () => {
    setOpen(true);

    if(valueHAEMATOLOGY &&  Object.entries(valueHAEMATOLOGY).length !== 0){
      const {PrintAll,Print,Comments,...BIOHAEMATOLOGY}=valueHAEMATOLOGY
      form.setFieldsValue({ ...BIOHAEMATOLOGY })

    }else{
      form.setFieldsValue({ ...initial })

    }
  }



  return (
    <>
      <Badge dot size="default">
      <GradientButton id={id} BtnName={"HAEMATOLOGY"} disabled={disabled}  width="150px" clickEvent={() => clickEvent()} />

      </Badge>
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
           labelCol={{ span: 12 }}
           wrapperCol={{ span: 18 }}
            layout="horizontal"
            // initialValues={{ remember: true }}
          >
            <Row gutter={24}>
              <Col span={10} style={{paddingLeft:'30px'}}>
                <Form.Item name="HB" label="HB" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`mg/dl`} />
                </Form.Item>
                <Form.Item name="TLC" label="TLC" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`/cumm`} />
                </Form.Item>
                <Text code>DLC --</Text>
                <Divider style={{margin:"7px 0px"}} />
                <Form.Item name="Polymorphs" label="Polymorphs" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`%`} />
                </Form.Item>
                <Form.Item name="Lymphocytes" label="Lymphocytes" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`%`} />
                </Form.Item>
                <Form.Item name="Monocytes" label="Monocytes" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`%`} />
                </Form.Item>
                <Form.Item name="Eosinophils" label="Eosinophils" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`%`} />
                </Form.Item>
                <Form.Item name="Basophils" label="Basophils" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`%`} />
                </Form.Item>
                <Form.Item name="Description" label="Other Description" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={``} />
                </Form.Item>
                <Form.Item name="AbnormalCell" label="any Abnormal Cell" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={``} />
                </Form.Item>
                <Form.Item name="ESR" label="ESR" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`mm at first hr.(W.G.)`} />
                </Form.Item>
                <Form.Item name="BGrouping" label="B. Grouping" style={{marginBottom: '7px'}}>
                
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="RhTyping" label="Rh Typing" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={``} />
                </Form.Item>
                <Form.Item name="MaterialParasite" label="Material Parasite" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="PTIControl" label="P.T.I.  Control" style={{marginBottom: '7px'}}>
                
                <FormInputMeasurement units={`sec(100%)`} />
                    
                </Form.Item>
                <Form.Item name="Test" label="Test" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`sec`} />
                </Form.Item>
                <Form.Item name="Index" label="Index" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`%`} />
                </Form.Item>
                <Space>
                <Form.Item name="INR" label="INR" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={``} />
                </Form.Item>
                <Form.Item name="APTT" label="APTT" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`sec`} />

                </Form.Item>
                </Space>
                <Space>
                <Form.Item name="Bleeding-Time" label="Bleeding-Time" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={``} />
                </Form.Item>
                

                </Space>
                <Form.Item name="clotting-Time" label="clotting-Time" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={``} />

                </Form.Item>
              </Col>
              {/* Repeat Form.Item for each input */}
              {/* Example Select */}
              <Col span={2}></Col>
              <Col span={10}>
              <Form.Item name="PTTK" label="PTTK" style={{marginBottom: '7px'}}>
              <FormInputMeasurement units={`sec`} />
              </Form.Item>
              <Form.Item name="TotalRBCCount" label="Total RBC Count" style={{marginBottom: '7px'}}>
              <FormInputMeasurement units={`million/Cumm`} />
              </Form.Item>
              <Form.Item name="Platelets_L" label="Platelets" style={{marginBottom: '7px'}}>
              <FormInputMeasurement units={`Lakh/cumm`} />
              </Form.Item>
              <Form.Item name="Platelets_T" label="" style={{marginBottom: '7px'}}>
              <FormInputMeasurement units={`Throusands/cumm`} />
              </Form.Item>
              <Form.Item name="PCV" label="PCV" style={{marginBottom: '7px'}}>
              <FormInputMeasurement units={`%`} />
                </Form.Item>
                <Form.Item name="Reticulocyte" label="Reticulocyte Count" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`%`} />
                </Form.Item>
                <Form.Item name="MCV" label="MCV" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`tl`} />
                </Form.Item>
                <Form.Item name="MCH" label="MCH" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`pG`} />

                </Form.Item>
                <Form.Item name="MCHC" label="MCHC" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`%`} />
  
                </Form.Item>
                <Form.Item name="A-Eosinophil-Count" label="A. Eosinophil Count" style={{marginBottom: '7px'}}>
                <FormInputMeasurement units={`/Cumm`} />
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
        </div>
      </Modal>
    </>
  );
};

export default HAEMATOLOGYDialog;
