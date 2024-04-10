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
    Divider
} from 'antd';
import dayjs from 'dayjs';
import PregnancyModal from './Modal/PregnancyModal';
import ModalGrid from './Modal/ModalGrid';


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
const HomeFormAndDialog: React.FC = () => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };
    const dateFormatList = 'DD/MM/YYYY';
    return (
        
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"

            labelWrap
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
            style={{ maxWidth: 1100 }}
        >
            <Flex vertical={false}>
                <div style={{ ...baseStyle }}>
                    <Form.Item label="Date :" name="date">
                        <DatePicker style={{ width: '115%' }} defaultValue={dayjs('01/01/2015', dateFormatList)} format={dateFormatList} />
                    </Form.Item>
                </div>
                <div style={{ ...baseStyle }}>
                    <Form.Item label="Time :" name="time">
                        <DatePicker style={{ width: '115%' }} picker={'time'} onChange={(value) => console.log(value)} />
                    </Form.Item>
                </div>
                <div style={{ ...baseStyle }}>
                    <Form.Item label="Lab :" name="labNumber">
                        <Input style={{ width: '115%' }} placeholder='122' />
                    </Form.Item>

                </div>
            </Flex>
            <Flex vertical={false}>
                <div style={{ ...baseStyle2 }}>
                    <Form.Item label="Rec-Date:" name="Recivedtime" >
                        <DatePicker style={{ width: '115%' }} defaultValue={dayjs('01/01/2015', dateFormatList)} format={dateFormatList} />
                    </Form.Item>
                </div>
                <div style={{ ...baseStyle2 }}>
                    <Form.Item label="Time :">
                        <DatePicker style={{ width: '115%' }} picker={'time'} onChange={(value) => console.log(value)} />
                    </Form.Item>
                </div>
                <div style={{ width: '50%' }}></div>
            </Flex>
            <Flex vertical={false}>
                <div >
                    <Form.Item label="Name :" name="name">
                        <Flex gap='small' vertical={false} style={{ width: '135%' }}>
                            <div style={{ width: '40%' }}>
                                <Select>
                                    <Select.Option value="demo">Mr</Select.Option>
                                    <Select.Option value="demo">Ms</Select.Option>
                                    <Select.Option value="demo">Master</Select.Option>
                                    <Select.Option value="demo">Dr</Select.Option>
                                </Select>
                            </div>
                            <div style={{ width: '60%' }}>
                                <Input style={{ width: '115%' }} placeholder='Enter Patient Name ' />

                            </div>

                        </Flex>
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
                        <Flex vertical={false} style={{ width: '135%' }}>
                        <div style={{ width: '60%' }}>
                                <Input style={{ width: '95%' }} placeholder='Enter Patient Name ' />

                            </div>
                            <div style={{ width: '30%' }}>
                                <Select>
                                    <Select.Option value="days">days</Select.Option>
                                    <Select.Option value="month">month</Select.Option>
                                    <Select.Option value="year">year</Select.Option>
                                </Select>
                            </div>
                            

                        </Flex>
                    </Form.Item>
                </div>

            </Flex>
            <Flex vertical={false}>
                <div style={{width:'58%'}}>
                <Form.Item label="Address :" name="address" style={{marginLeft:'-179px'}}>
                    <Input style={{ width: '115%' }} placeholder='Enter Address ' />
                </Form.Item>
                </div>
                <div style={{width:'25%'}}>
                <Form.Item label="Mobile No :" name="Mobilenumber">
                    <Input style={{ width: '115%' }} placeholder='Enter Mobile ' />
                </Form.Item>
                </div>
            </Flex>
            <Flex vertical={false}>
                <div style={{width:"42%"}}>
                    <Form.Item label="Materials" style={{marginLeft:'-89px'}}>
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <div style={{width:"50%"}}>
                    <Form.Item label="Reffer by">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
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
