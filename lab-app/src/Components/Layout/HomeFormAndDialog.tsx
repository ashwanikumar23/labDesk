import React, { useState } from 'react';
import {
    Button,
    Cascader,
    DatePicker,
    Flex,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TimePicker,
    TimePickerProps,
    TreeSelect,
    Typography,
    Divider,
    DatePickerProps,
    Space,
    Row,
    Col
} from 'antd';
import dayjs from 'dayjs';
import PregnancyModal from './Modal/PregnancyModal';
import ModalGrid from './Modal/ModalGrid';

const { Option } = Select;
const selectBefore = (
    <Select defaultValue="Mr">
      <Option value="Mr">Mr</Option>
      <Option value="Dr">Dr</Option>
    </Select>
  );
interface FieldData {
    name: string | number | (string | number)[];
    value?: any;
    touched?: boolean;
    validating?: boolean;
    errors?: string[];
  }
type SizeType = Parameters<typeof Form>[0]['size'];
const baseStyle: React.CSSProperties = {
    width: '25%',
};
const baseStyle2: React.CSSProperties = {
    width: '25%',
};
const baseStyle3: React.CSSProperties = {
    width: '16%',
};
const HomeFormAndDialog: React.FC<any> = (props:any) => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };
    const handleMChange = (value: string) => {
        let Material=value;
        console.log(`selected ${value}`);
      };
    const dateFormatList = 'DD/MM/YYYY';
    const [object,setObject]=useState({
        date: '',
        time:'',
        RecivedDate:'',
        Recivedtime:'',
        prefix:'',
        name: '',
        address: '',
        age: '',
        gender: '',
        mobileNumber: '',
        labNumber: '',
        materials:'',
        referance:''



    });
    const onFinish = (fieldsValue: any) => {
        console.log(fieldsValue[0].name,fieldsValue[0].value);
      };


    return (
        
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onFinish={onFinish}
            labelWrap
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
            style={{ maxWidth: 1100 }}
        >
             <Row gutter={24}>
                <Col span={6}>
                        <Form.Item label="Date :" name="date">
                            <DatePicker style={{ width: '115%' }}  defaultValue={dayjs('01/01/2015', dateFormatList)} format={dateFormatList} />
                        </Form.Item>

                </Col>
                <Col span={6}>
                        <Form.Item label="Time :" name="time">
                            <DatePicker style={{ width: '115%' }} name='time' picker={'time'}  />
                        </Form.Item>
                </Col>
                <Col span={6}>
                        <Form.Item label="Lab :" name="labNumber">
                            <Input name='labNumber' style={{ width: '115%' }} placeholder='122' />
                        </Form.Item>

                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={6}>
                    <Form.Item label="Rec-Date:" name="Recivedtime" >
                        <DatePicker name='RecivedDate' style={{ width: '115%' }}  defaultValue={dayjs('01/01/2015', dateFormatList)} format={dateFormatList} />
                    </Form.Item>

                </Col>
                <Col span={6}>
                    <Form.Item label="Time :">
                        <DatePicker name='Recivedtime' style={{ width: '115%' }} picker={'time'}  />
                    </Form.Item>
                </Col>
                <Col span={6}>
                        

                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={6}>
                    <Form.Item label="Prefix" name="Prefix" >
                        <Select style={{ width: '100%' }} placeholder="Select Prefix">
                            <Option value="Mr">Mr</Option>
                            <Option value="Dr">Dr</Option>
                            <Option value="Master">Master</Option>
                        </Select>
                    </Form.Item>

                </Col>
                <Col span={6}>
                    <Form.Item label="Name" name="name" >
                        <Input style={{ width: '100%' }} placeholder="Input " />
                    </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item label="Gender" name="gender">
                        <Select style={{width:'100%'}}>
                            <Select.Option value="M">M</Select.Option>
                            <Select.Option value="F">F</Select.Option>
                        </Select>
                    </Form.Item>

                </Col>
                
              </Row>
              <Row gutter={24}>
                <Col span={6}>
                    <Form.Item label="Age" style={{ marginBottom: 0 }}>
                        <Form.Item
                            name="ageinNumber"
                            rules={[{ required: true }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input style={{ width: '100%' }} placeholder="Input birth year" />
                        </Form.Item>
                        <Form.Item
                            name="Year"
                            rules={[{ required: true }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                        >
                        <Select style={{ width: '100%' }} placeholder="Select Prefix">
                                <Option value="Day">Day</Option>
                                <Option value="Month">Month</Option>
                                <Option value="Year">Year</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                </Col>
                <Col span={6}></Col>
                <Col span={6}></Col>
              </Row>
            <Flex vertical={false} gap={'5px'}>
                <div style={{width:'60%'}}>
                <Form.Item label="Address :" name="address" style={{marginLeft:'-179px'}}>
                    <Input name='address' style={{  }} placeholder='Enter Address ' onChange={(e)=>{props.handleChange(e)}}/>
                </Form.Item>
                </div>
                <div style={{width:'25%'}}>
                <Form.Item label="Mobile No :" name="Mobilenumber">
                    <Input name='mobileNumber' style={{ width: '115%' }} placeholder='Enter Mobile ' onChange={(e)=>{props.handleChange(e)}}/>
                </Form.Item>
                </div>
            </Flex>

            <Flex vertical={false}>
                <div style={{width:"43%"}}>
                    <Form.Item label="Materials" name='materials' style={{marginLeft:'-89px'}}>
                        <Select
                        defaultValue="URINE"
                        style={{  }}
                        options={[
                            { value: 'URINE', label: 'URINE' },
                            { value: 'BOOLD', label: 'BLOOD' },
                           
                        ]}
                        />
                    </Form.Item>
                </div>
                <div style={{width:"40%"}}>
                    <Form.Item label="Reffer by" name='referance'>
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                            <Select.Option value="DR Ram">Dr Ram</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
            </Flex>
            
            <Divider />
            <ModalGrid />
            <Divider />
            <Flex gap="small" wrap="wrap">
                <Button type="dashed">NEW</Button>
                <Button type="dashed">EDIT</Button>
                <Button type="dashed">DELETE</Button>
                <Button type="dashed">NEXT</Button>
                <Button type="dashed">PREV</Button>
                <Form.Item style={{marginBottom: '4px'}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Button type="dashed">SAVE</Button>
                <Button type="dashed">Cancel</Button>
                <Button type="dashed">Search by Name</Button>
                <Button type="dashed">Search by Date</Button>
                <Button type="dashed">PRINT</Button>
               
            </Flex>
        </Form>
    );
};

export default HomeFormAndDialog;
