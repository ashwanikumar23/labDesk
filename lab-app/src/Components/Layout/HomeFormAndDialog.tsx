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
    Space
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
    //     const rangeValue = fieldsValue['date'];
    //    // const rangeTimeValue = fieldsValue['range-time-picker'];
        
    //     console.log('Received values of form: ', rangeValue);
      };


    return (
        
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onFinish={onFinish}
            onFieldsChange={onFinish}
            labelWrap
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
            style={{ maxWidth: 1100 }}
        >
            <Flex vertical={false}>
                <div style={{ ...baseStyle }}>
                    <Form.Item label="Date :" name="date">
                        <DatePicker style={{ width: '115%' }}  defaultValue={dayjs('01/01/2015', dateFormatList)} format={dateFormatList} />
                    </Form.Item>
                </div>
                <div style={{ ...baseStyle }}>
                    <Form.Item label="Time :" name="time">
                        <DatePicker style={{ width: '115%' }} name='time' picker={'time'}  />
                    </Form.Item>
                </div>
                <div style={{ ...baseStyle }}>
                    <Form.Item label="Lab :" name="labNumber">
                        <Input name='labNumber' style={{ width: '115%' }} placeholder='122' />
                    </Form.Item>

                </div>
            </Flex>
            <Flex vertical={false}>
                <div style={{ ...baseStyle2 }}>
                    <Form.Item label="Rec-Date:" name="Recivedtime" >
                        <DatePicker name='RecivedDate' style={{ width: '115%' }}  defaultValue={dayjs('01/01/2015', dateFormatList)} format={dateFormatList} />
                    </Form.Item>
                </div>
                <div style={{ ...baseStyle2 }}>
                    <Form.Item label="Time :">
                        <DatePicker name='Recivedtime' style={{ width: '115%' }} picker={'time'}  />
                    </Form.Item>
                </div>
                <div style={{ width: '50%' }}></div>
            </Flex>
            <Flex vertical={false}>
                <div >
                    <Form.Item label="Name :" name="name">
                    <Space.Compact>
                        <Form.Item
                        name={['Name', 'Prefix']}
                        noStyle
                        rules={[{ required: true, message: 'Prefix is required' }]}
                        >
                        <Select style={{ width: '40%' }} placeholder="Select Prefix">
                            <Option value="Mr">Mr</Option>
                            <Option value="Dr">Dr</Option>
                        </Select>
                        </Form.Item>
                        <Form.Item
                        name={['Name', 'fullname']}
                        noStyle
                        rules={[{ required: true, message: 'fullname is required' }]}
                        >
                        <Input  placeholder="Input street" />
                        </Form.Item>
                    </Space.Compact>
                    </Form.Item>

                </div>
                <div style={{ width: '20%' }}>
                    <Form.Item label="Gender :" name="gender" style={{marginLeft:"72px"}}>
                        <Select style={{width:'70%'}}>
                            <Select.Option value="M">M</Select.Option>
                            <Select.Option value="F">F</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <div style={{width:'40%'}} >
                <Form.Item label="Age :" name="age">
                    <Space.Compact>
                        <Form.Item
                        name={['age', 'number']}
                        noStyle
                        rules={[{ required: true, message: 'Prefix is required' }]}
                        >
                        <Input  placeholder="Input street" />
                        </Form.Item>
                        <Form.Item
                        name={['age', 'old']}
                        noStyle
                        rules={[{ required: true, message: 'fullname is required' }]}
                        >
                       
                        <Select style={{ width: '40%' }} placeholder="Select Prefix">
                            <Option value="Mr">Mr</Option>
                            <Option value="Dr">Dr</Option>
                        </Select>
                        </Form.Item>
                    </Space.Compact>
                    </Form.Item>
                </div>

            </Flex>
            <Flex vertical={false}>
                <div style={{width:'58%'}}>
                <Form.Item label="Address :" name="address" style={{marginLeft:'-179px'}}>
                    <Input name='address' style={{ width: '115%' }} placeholder='Enter Address ' onChange={(e)=>{props.handleChange(e)}}/>
                </Form.Item>
                </div>
                <div style={{width:'25%'}}>
                <Form.Item label="Mobile No :" name="Mobilenumber">
                    <Input name='mobileNumber' style={{ width: '115%' }} placeholder='Enter Mobile ' onChange={(e)=>{props.handleChange(e)}}/>
                </Form.Item>
                </div>
            </Flex>
            <Flex vertical={false}>
                <div style={{width:"42%"}}>
                    <Form.Item label="Materials" name='materials' style={{marginLeft:'-89px'}}>
                        <Select
                        defaultValue="URINE"
                        style={{ width: 120 }}
                        options={[
                            { value: 'URINE', label: 'URINE' },
                            { value: 'BOOLD', label: 'BLOOD' },
                            // { value: 'Yiminghe', label: 'yiminghe' },
                            // { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                        />
                    </Form.Item>
                </div>
                <div style={{width:"50%"}}>
                    <Form.Item label="Reffer by" name='referance'>
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                            <Select.Option value="DR Ram">Dr Ram</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
            </Flex>
           
           
            {/* All dialog box  */}
            {/* <div style={{
                padding:'4px',
                background:'#dbdada'
            }}>
            <Flex vertical={false} wrap="wrap" gap="small" style={{marginBottom:'10px'}}>
                <div style={{...baseStyle3}}><PregnancyModal /></div>
                <div style={{...baseStyle3}}><PregnancyModal /></div>
                <div style={{...baseStyle3}}><PregnancyModal /></div>
                <div style={{...baseStyle3}}><PregnancyModal /></div>
                <div style={{...baseStyle3}}><PregnancyModal /></div>
            </Flex>
            <Flex vertical={false} gap={'small'}>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
            </Flex>
            <Flex vertical={false} gap={'small'}>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
            </Flex>
            <Flex vertical={false} gap={'small'}>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
            </Flex>
            <Flex vertical={false} gap={'small'}>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
                <div style={{width:'20%'}}><PregnancyModal /></div>
            </Flex>
            </div> */}
            <Divider />
            <ModalGrid />
            <Divider />
            <Flex gap="small" wrap="wrap">
                <Button type="dashed">NEW</Button>
                <Button type="dashed">EDIT</Button>
                <Button type="dashed">DELETE</Button>
                <Button type="dashed">NEXT</Button>
                <Button type="dashed">PREV</Button>
                <Button type="dashed">Cancel</Button>
                <Button type="dashed">Search by Name</Button>
                <Button type="dashed">Search by Date</Button>
                <Button type="dashed">PRINT</Button>
                {/* <Button type="link">Link Button</Button> */}
            </Flex>
            
            
            {/* <Form.Item label="Button">
                <Button>Button</Button>
            </Form.Item> */}
        </Form>
    );
};

export default HomeFormAndDialog;
