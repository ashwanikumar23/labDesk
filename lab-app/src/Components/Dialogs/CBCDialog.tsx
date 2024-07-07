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
  Radio,
  RadioChangeEvent,
  Switch,
  notification,
  NotificationArgsProps,
} from "antd";
import GradientButton from "../../shared/UI/Button/gradientButton";
import IEnterForm from "../../shared/Interface/All-interface";
import Idailog from "../../shared/Interface/Idailog";
import ICBC from "../../shared/Interface/ICBC";
import { useDispatch, useSelector } from "react-redux";
import { updateCBC, valueOfCBC } from '../../shared/Store/dataSlice'
import { AppDispatch } from "../../shared/Store/store";
import { FormInputMeasurement } from "../../shared/UI/customComponents/inputMeasurementComponents/formInputMeasurement";


const { Option } = Select;
const { Text, Link } = Typography;
const InitialValue: ICBC = {
  HB: "",
  TLC: "",
  Polymorphs: "",
  Lym: "",
  Lymphocytes: "",
  Gran: "",
  Monocytes: "",
  Mid: "",
  Mid_1: "",
  Eosinophils: "",
  LymHash: "",
  MidHash: "",
  Basophils: "",
  GranHash: "",
  TotalRBCCount: "",
  PCV: "",
  MCV: "",
  MCH: "",
  MCHC: "",
  RDW_CV: "",
  RDW_SD: "",
  Platelets: "",
  MPV: "",
  PDW_SD: "",
  PDW_CV: "",
  PCT: "",
  P_LCR: "",
  P_LCC: ""
};

type NotificationPlacement = NotificationArgsProps['placement'];

const Context = React.createContext({ name: 'Default' });

const CBCDialog = ({ id }: Idailog) => {
  const valueCBC = useSelector(valueOfCBC(id)) ||InitialValue;
  const dispatch: AppDispatch = useDispatch();
  const [showColor, setShowColor] = useState("red");
  console.warn(id, "valueCBC", valueCBC);
  useEffect(() => {
    if (valueCBC) {
      setCBCFormValue(valueCBC);
      setShowColor("green");
      console.warn(id, "valueCBC", valueCBC);
      console.warn(CBCFormValue);
    }
  }, [valueCBC]);
  const [open, setOpen] = useState(false);

  const [openHAEMATOLOGY, setOpenHAEMATOLOGY] = React.useState(false);
  const handleClickOpen = () => {
    setOpenHAEMATOLOGY(true);
  };

  const [form] = Form.useForm();
  const [CBCFormValue, setCBCFormValue] = useState<ICBC | null>(null);

  const onFinish = (values: ICBC) => {
    console.log("Form values:", values);
    dispatch(updateCBC({ id, data: values }));
    setCBCFormValue(values);
    openNotification('topRight')
    setOpen(false);
    console.log("FsetCBCFormValu:", values);
    if (CBCFormValue) {
      console.warn("hiye")
      CBCFormValue.PrintAll = PRINT === "PRINT-ALL";
      CBCFormValue.Print = PRINT !== "PRINT-ALL"
      const body = { id: id, data: CBCFormValue }
      // patientData.id = id;
      // patientData.CBC = CBCFormValue;
    }
  };

  const [PRINT, setPRINT] = useState('PRINT-ALL');

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setPRINT(e.target.value);
  };

  const [enable, setEnable] = useState(false);
  const onchangeDLC2 = () => {
    console.warn(enable);
    setEnable(prevEnable => {

      return !prevEnable;
    });
    console.warn(enable);
  }
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };


  const clickEvent = () => {
    setOpen(true);
    // console.log('check',valueCBC ,  Object.entries(valueCBC!).length !== 0);
    if (valueCBC && Object.entries(valueCBC).length !== 0) {
      const { PrintAll, Print, Comments, ...BIOValues } = valueCBC
      //form.setFieldsValue({ ...InitialValue })
      form.setFieldsValue({ ...valueCBC })

    } else {
      form.setFieldsValue({ ...InitialValue })

    }

  }

  // const checkPrice = (_: any, value: { number: number }) => {
  //   if (value.number > 0) {
  //     return Promise.resolve();
  //   }

  // };

  return (
    <>
      <Badge dot color={showColor} size="default">
        <GradientButton id={0} BtnName={"CBC"} width="150px" disabled={id === 0} clickEvent={() => clickEvent()} />
      </Badge>
      <Modal
        title="CBC TEST"
        centered

        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        width={800}
      >
        <div>
          <Form
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 18 }}
            layout="horizontal"
          //initialValues={{ remember: true }}
          >
            <Row gutter={24}>
              {/* <Col span={1}></Col> */}
              <Col span={24} style={{ paddingLeft: '30px' }}>
                <div style={{ display: "flex", justifyContent: 'space-around', gap: '18px' }}>
                  <div style={{ width: '30%' }}>
                    <Form.Item name="HB" label="HB" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`mg/dl`} />
                      {/* <Space>
                        <Input value={CBCFormValue?.HB} /><span>gm/dl</span> 
                      </Space> */}
                    </Form.Item>
                    <Form.Item name="TLC" label="TLC" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`/cumm`} />
                      {/* <Space>
                        <Input value={CBCFormValue?.TLC}  /><span>/cumm</span> 
                      </Space> */}
                    </Form.Item>
                  </div>
                  <div style={{ width: '65%', justifyItems: 'end', textAlign: 'end' }}>
                    <Radio.Group onChange={onChange} value={PRINT}>
                      <Radio value={"PRINT"}>PRINT</Radio>
                      <Radio value={"PRINT-ALL"}>PRINT ALL</Radio>
                    </Radio.Group>
                  </div>


                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <Switch checkedChildren="DLC" unCheckedChildren="DLC2" checked={!enable} onClick={() => { onchangeDLC2() }} />
                  <Switch checkedChildren="DLC2" unCheckedChildren="DLC2" checked={enable} onClick={() => { onchangeDLC2() }} />

                </div>
                <Divider style={{ margin: "7px 0px" }} />
                <Space size={30}>
                  <Flex gap={2} vertical={true}>
                    <Form.Item name="Polymorphs" label="Polymorphs" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                        <Input value={CBCFormValue?.Polymorphs}  /><span>%</span> 
                      </Space> */}
                    </Form.Item>
                    <Form.Item name="Lymphocytes" label="Lymphocytes" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                        <Input value={CBCFormValue?.Lymphocytes} /><span>%</span> 
                      </Space>*/}
                    </Form.Item>
                    <Form.Item name="Monocytes" label="Monocytes" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                        <Input value={CBCFormValue?.Monocytes} /><span>%</span>
                      </Space> */}
                    </Form.Item>
                    <Form.Item name="Eosinophils" label="Eosinophils" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                        <Input value={CBCFormValue?.Eosinophils} /><span>%</span>
                      </Space> */}
                    </Form.Item>
                    <Form.Item name="Basophils" label="Basophils" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                        <Input value={CBCFormValue?.Basophils} /><span>%</span>
                      </Space> */}
                    </Form.Item>
                    <Form.Item name="Mid" label="Mid" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                        <Input value={CBCFormValue?.Mid} /><span>%</span>
                      </Space> */}
                    </Form.Item>

                  </Flex>
                  <Flex gap={2} vertical={true}>
                    <Form.Item name="Lym" label="Lym" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} disabled={!enable} />
                      {/* <Space>
                        <Input value={CBCFormValue?.Lym} disabled={!enable} /><span>%</span>
                      </Space> */}
                    </Form.Item>
                    <Form.Item name="Gran" label="Gran" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} disabled={!enable} />
                      {/* <Space>
                        <Input value={CBCFormValue?.Gran} disabled={!enable} /><span>%</span>
                      </Space> */}
                    </Form.Item>
                    <Form.Item name="Mid_1" label="Mid" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} disabled={!enable} />
                      {/* <Space>
                        <Input value={CBCFormValue?.Mid_1} disabled={!enable} /><span>%</span>
                      </Space> */}
                    </Form.Item>
                    <Form.Item name="LymHash" label="Lym" style={{ marginBottom: '7px', }}>
                      <FormInputMeasurement units={`%`} disabled={!enable} />
                      {/* <Space>
                        <Input value={CBCFormValue?.LymHash} disabled={!enable} /><span>#</span>
                      </Space> */}
                    </Form.Item>
                    <Form.Item name="GranHash" label="Gran" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} disabled={!enable} />
                      {/* <Space>
                        <Input value={CBCFormValue?.GranHash} disabled={!enable} /><span>#</span>
                      </Space> */}
                    </Form.Item>
                    <Form.Item name="MidHash" label="Mid" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} disabled={!enable} />
                      {/* <Space>
                        <Input value={CBCFormValue?.MidHash} disabled={!enable} /><span>#</span>
                      </Space> */}
                    </Form.Item>

                  </Flex>

                  {/* <div style={{width:'5px'}}></div> */}

                </Space>
                <Row gutter={24}>
                  <Col span={10}>
                    <Form.Item name="TotalRBCCount" label="Total RBC Count" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`million/cumm`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.TotalRBCCount} /><span>million/cumm</span>
                    </Space> */}
                    </Form.Item>
                    <Form.Item name="PCV" label="PCV" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.PCV} /><span>%</span>
                    </Space> */}
                    </Form.Item>
                    <Form.Item name="MCV" label="MCV" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`fL`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.MCV} /><span>fL</span>
                    </Space> */}
                    </Form.Item>
                    <Form.Item name="MCH" label="MCH" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`pG`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.MCH} /><span>pG</span>
                    </Space> */}
                    </Form.Item>
                    <Form.Item name="MCHC" label="MCHC" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.MCHC} /><span>%</span>
                    </Space> */}
                    </Form.Item>
                    <Form.Item name="RDW_CV" label="RDW-CV" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.RDW_CV} /><span>%</span>
                    </Space> */}
                    </Form.Item>
                    <Form.Item name="RDW_SD" label="RDW-SD" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`fL`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.RDW_SD} /><span>fL</span>
                    </Space> */}
                    </Form.Item>
                    <Form.Item name="Platelets" label="Platelets" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`lakhs/cumm`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.Platelets} /><span>lakhs/cumm</span>
                    </Space> */}
                    </Form.Item>
                    <Form.Item name="MPV" label="MPV" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`fL`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.MPV} /><span>fL</span>
                    </Space> */}
                    </Form.Item>
                    <Form.Item name="PDW_SD" label="PDW-SD" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={``} />
                      {/* <Space>
                      <Input value={CBCFormValue?.PDW_SD} /><span></span>
                    </Space> */}
                    </Form.Item>

                    <Form.Item name="PDW_CV" label="PDW-CV" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.PDW_CV} /><span>%</span>
                    </Space> */}
                    </Form.Item>
                    <Form.Item name="PCT" label="PCT" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.PCT} /><span>%</span>
                    </Space> */}
                    </Form.Item>

                    <Form.Item name="P_LCR" label="P-LCR" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.P_LCR} /><span>%</span>
                    </Space> */}
                    </Form.Item>

                    <Form.Item name="P_LCC" label="P-LCC" style={{ marginBottom: '7px' }}>
                      <FormInputMeasurement units={`%`} />
                      {/* <Space>
                      <Input value={CBCFormValue?.P_LCC} /><span></span>
                    </Space> */}
                    </Form.Item>

                  </Col>
                  <Col span={14}></Col>
                </Row>

                {/* <Form.Item name="BGrouping" label="B. Grouping" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="RhTyping" label="Rh Typing" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  />
                  </Space>
                </Form.Item> */}
                {/* <Form.Item name="MaterialParasite" label="Material Parasite" style={{marginBottom: '7px'}}>
                  <Select >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item> */}
                {/* <Form.Item name="PTIControl" label="P.T.I.  Control" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>sec(100%)</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="Test" label="Test" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>sec</span> 
                  </Space>
                </Form.Item> */}
                {/* <Form.Item name="Index" label="Index" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Space>
                <Form.Item name="INR" label="INR" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /> 
                  </Space>
                </Form.Item> */}
                {/* <Form.Item name="APTT" label="APTT" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>sec</span> 
                  </Space>
                </Form.Item>
                </Space>
                <Space>
                <Form.Item name="Bleeding-Time" label="Bleeding-Time" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /> 
                  </Space>
                </Form.Item>
                

                </Space> */}
                {/* <Form.Item name="clotting-Time" label="clotting-Time" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /> 
                  </Space>
                </Form.Item> */}
              </Col>
              {/* Repeat Form.Item for each input */}
              {/* Example Select */}
              {/* <Col span={4}></Col> */}
              {/* <Col span={8}>
              <Form.Item name="PTTK" label="PTTK" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>sec</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="TotalRBCCount" label="Total RBC Count" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>million/Cumm</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="Platelets_L" label="Platelets" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>lakh/cumm</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="Platelets_T" label="" style={{marginBottom: '7px'}}>
                  <Space>
                    <Input /><span>Throusands/cumm</span> 
                  </Space>
              </Form.Item>
              <Form.Item name="PCV" label="PCV" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="Reticulocyte" label="Reticulocyte Count" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="MCV" label="MCV" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>tl</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="MCH" label="MCH" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>pG</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="MCHC" label="MCHC" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>%</span> 
                  </Space>
                </Form.Item>
                <Form.Item name="A-Eosinophil-Count" label="A. Eosinophil Count" style={{marginBottom: '7px'}}>
                <Space>
                    <Input  /><span>/Cumm</span> 
                  </Space>
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
              </Col> */}
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

export default CBCDialog;

// const { Option } = Select;



