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
import Idailog from "../../shared/Interface/Idailog";
import IEnterForm from "../../shared/Interface/All-interface";
import IIRON from "../../shared/Interface/IIRON";
import { updateIRON } from "../../shared/Store/dataSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../shared/Store/store";

const { Option } = Select;


const IronDialog = ({id,disabled,patientData,saveDataEvent}: Idailog) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<IEnterForm>(patientData);
  const [homatology,setHomatology]=useState<IIRON|null>(null);
  const dispatch:AppDispatch=useDispatch();

  const onFinish = (values: IIRON) => {
    console.log("Form values:", values);
    setHomatology(values);
    if(homatology){
      patientData.id=id;
      patientData.IRON=homatology;
      dispatch(updateIRON({id,data:homatology}));
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
    IRON 
    </Button> */}
     <Badge dot size="default">
    <GradientButton id={0} BtnName={"IRON"} width="150px" clickEvent={() => setOpen(true)} />

     </Badge>
    <Modal
      title="IRON TEST"
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
            <Form.Item name="TotalIron" label="Total Iron" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>ug/dL</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="TIBC" label="TIBC" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>ug/dL</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="TSAT" label="TSAT" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>ug/dL</span> 
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

export default IronDialog;