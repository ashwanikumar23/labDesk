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
import IPREG from "../../shared/Interface/IPREG";
import { useDispatch } from "react-redux";
import { updatePREG } from "../../shared/Store/dataSlice";
import { AppDispatch } from "../../shared/Store/store";

const { Option } = Select;
function PregnancyDilaog({id,disabled,patientData,saveDataEvent}: Idailog){
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] =  useState<IEnterForm>(patientData);
  const [homatology,setHomatology]=useState<IPREG|null>(null);
  const dispatch:AppDispatch=useDispatch();

  const onFinish = (values: IPREG) => {
    console.log("Form values:", values);
    setHomatology(values);
    if(homatology){
      patientData.id=id;
      patientData.PREG=homatology;
      dispatch(updatePREG({id,data:homatology}));
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
      PREGNANCY
      </Button> */}
      <Badge dot size="default">
      <GradientButton id={0} BtnName={"PREGNANCY"} width="150px" clickEvent={() => setOpen(true)} />

      </Badge>
      <Modal
        title=" PREGNANCY TEST"
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
              <Col span={18}>
              <Form.Item name="SampleBroughtFrom" label="Sample Brought From" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="ExpectedDate" label="Expected Date" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="betaHCG" label="beta HCG" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="CommentsAdvise" label="Comments/Advise" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* <Col span={2}></Col> */}
              {/* <Col span={8}>
                <div style={{textAlign:'center',color:"blue"}}><h3 style={{color:'blue'}}>Urine Level</h3></div>
                <Form.Item name="U1" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U2" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U3" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U4" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U5" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U6" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="U7" label="-" style={{marginBottom: '7px'}}>
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
              </Col> */}
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

export default PregnancyDilaog;
