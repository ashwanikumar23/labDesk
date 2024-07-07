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
import IPREG from "../../shared/Interface/IPREG";
import { useDispatch, useSelector } from "react-redux";
import { PaitentValue, updatePREG, valueOfPreg } from "../../shared/Store/dataSlice";
import { AppDispatch } from "../../shared/Store/store";

const initialValue:IPREG={
  SampleBroughtFrom: "",
  ExpectedDate: "",
  betaHCG: "",
  CommentsAdvise: ""
}

const { Option } = Select;
function PregnancyDilaog({id}: Idailog){
  const [open, setOpen] = useState(false);
  let valuePreg = useSelector(valueOfPreg(id));
  const [form] = Form.useForm();
  const [formData, setFormData] =  useState<IEnterForm>();
  const [homatology,setHomatology]=useState<IPREG|null>(null);
  const dispatch:AppDispatch=useDispatch();
  const saveddata = useSelector(PaitentValue(id));  

  useEffect(()=>{
     if(valuePreg && Object.entries(valuePreg).length !== 0){

     }else{
      valuePreg=initialValue;
     }
  },[saveddata]);

  const onFinish = (values: IPREG) => {
    console.log("Form values:", values);
    setHomatology(values);
    values.PrintAll=true;
    values.Print = false;
    values.Comments =false;
    dispatch(updatePREG({id,data:values}));
    setOpen(false)

  };

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }; 

  const EventClick = ()=>{
    setOpen(true);
    if(valuePreg && Object.entries(valuePreg).length !== 0){
      const {PrintAll,Print,Comments,...preg}=valuePreg
      form.setFieldsValue({ ...preg })
    }

  }

    return (
      <>
      <Badge dot size="default">
      <GradientButton id={0} BtnName={"PREGNANCY"} width="150px" clickEvent={() => EventClick()} />

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
              
            </Row>
            <Form.Item style={{marginBottom: '4px'}}>
              <div style={{display:"flex",justifyContent:'end',alignItems:"end",gap:'2px'}}>
              <Button type="dashed" onClick={()=>{setOpen(false)}}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
    )
}

export default PregnancyDilaog;
