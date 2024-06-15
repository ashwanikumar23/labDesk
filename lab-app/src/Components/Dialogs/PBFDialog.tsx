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
import Idailog from "../../shared/Interface/Idailog";
import IPBF from "../../shared/Interface/IPBF";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../shared/Store/store";
import { updatePBF } from "../../shared/Store/dataSlice";

const { Option } = Select;
const PBFDialog = ({id,disabled,patientData,saveDataEvent}: Idailog) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] =useState<IEnterForm>(patientData);
  const [homatology,setHomatology]=useState<IPBF|null>(null);
  const dispatch:AppDispatch=useDispatch();

  const onFinish = (values: IPBF) => {
    console.log("Form values:", values);
    setHomatology(values);
    if(homatology){
      patientData.id=id;
      patientData.PBF=homatology;
      dispatch(updatePBF({id,data:homatology}));
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
    PBF 
    </Button> */}
     <Badge dot size="default">
    <GradientButton id={0} BtnName={"PBF"} width="150px" clickEvent={() => setOpen(true)} />

     </Badge>
    <Modal
      title="PERIPHERAL BLOOD FILM(PBF)"
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
    <Radio value={"METHOD"}>METHOD</Radio>
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
            <Form.Item name="LINE1" label="LINE(1)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /> 
                  </Space>
              </Form.Item>
              <Form.Item name="LINE2" label="LINE(2)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE3" label="LINE(3)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE4" label="LINE(4)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /> 
                  </Space>
              </Form.Item>
              <Form.Item name="LINE5" label="LINE(5)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE6" label="LINE(6)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>

              <Form.Item name="LINE7" label="LINE(7)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /> 
                  </Space>
              </Form.Item>
              <Form.Item name="LINE8" label="LINE(8)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE9" label="LINE(9)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE10" label="LINE(10)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /> 
                  </Space>
              </Form.Item>
              <Form.Item name="LINE11" label="LINE(11)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE12" label="LINE(12)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>

              <Form.Item name="LINE13" label="LINE(13)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /> 
                  </Space>
              </Form.Item>
              <Form.Item name="LINE14" label="LINE(14)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE15" label="LINE(15)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE16" label="LINE(16)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /> 
                  </Space>
              </Form.Item>
              <Form.Item name="LINE17" label="LINE(18)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE18" label="LINE(18)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>

              <Form.Item name="LINE19" label="LINE(19)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /> 
                  </Space>
              </Form.Item>
              <Form.Item name="LINE20" label="LINE(20)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE21" label="LINE(21)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="LINE22" label="LINE(22)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /> 
                  </Space>
              </Form.Item>
              <Form.Item name="LINE23" label="LINE(23)" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              <Form.Item name="OPTION" label="OPTION" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input />
                  </Space>
              </Form.Item>
              {/* <Form.Item name="TSH" label="TSH" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>u IU/ml</span> 
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


export default PBFDialog;