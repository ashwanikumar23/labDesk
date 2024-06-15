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
import IEnterForm from "../../shared/Interface/All-interface";
import ILFT from "../../shared/Interface/ILFT";
import Idailog from "../../shared/Interface/Idailog";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../shared/Store/store";
import { updateLFT } from "../../shared/Store/dataSlice";

const { Option } = Select;
const LFTDialog = ({id,disabled,patientData,saveDataEvent}: Idailog) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] =useState<IEnterForm>(patientData);
  const [homatology,setHomatology]=useState<ILFT|null>(null);
  const dispatch:AppDispatch=useDispatch();

  const onFinish = (values: ILFT) => {
    console.log("Form values:", values);
    setHomatology(values);
    if(homatology){
      patientData.id=id;
      patientData.LFT=homatology;
      dispatch(updateLFT({id,data:homatology}));
    }else{
   ///throw alert messages
    }
    setFormData(patientData);
    console.log(formData);
    saveDataEvent(formData);
  };

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
    {/* <Button className="btn" type="primary" onClick={() => setOpen(true)}>
   LFT
    </Button> */}
     <Badge dot size="default">
    <GradientButton id={0} BtnName={"LFT"} width="150px" clickEvent={() => setOpen(true)} />

     </Badge>
    <Modal
      title="LFT TEST"
      centered
      
      open={open}
      footer={null} 
      //onOk={() => setOpen(false)}
     onCancel={() => setOpen(false)}
      width={400}
    >
      <div>
      <Radio.Group onChange={onChange} value={value}>
    <Radio value={"PRINT"}>PRINT</Radio>
    <Radio value={"PRINT-ALL"}>PRINT ALL</Radio>
    {/* <Radio value={"METHOD"}>METHOD</Radio> */}
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
          <Row gutter={22}>
          <Col span={4}></Col>
            <Col span={18}>
            <Form.Item name="TotalBilirubin" label="Total Bilirubin" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="ConjBilirubin" label="Conj. Bilirubin" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="UnConjBilirubin" label="UnConj. Bilirubin" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="SGOT" label="SGOT(AST)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>U/L</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="SGPT" label="SGPT(ALT)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>U/L</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="SAlkalinePhosphatase" label="S. Alkaline Phosphatase" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>U/L</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="Serum Protien" label="Serum Protien" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span>
                  </Space>
              </Form.Item>
              <Form.Item name="Albumin" label="Albumin" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span>
                  </Space>
              </Form.Item>
              <Form.Item name="Globulin" label="Globulin" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>mg/dl</span>
                  </Space>
              </Form.Item>
              <Form.Item name="AGRatio" label="A:G Ratio" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="HbsAg" label="HbsAg" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
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
                    <strong>{key}:</strong>
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

export default LFTDialog;