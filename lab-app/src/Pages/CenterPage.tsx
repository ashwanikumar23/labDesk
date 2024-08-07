// EnterForm.js
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select, Divider, Badge } from 'antd';
import GradientButton from '../shared/UI/Button/gradientButton';
import { SearchProps } from 'antd/es/input/Search';
import IEnterForm from '../shared/Interface/All-interface';
import { AppDispatch, RootState } from '../shared/Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { PaitentValue, addData } from '../shared/Store/dataSlice';
import { PDFPreview } from '../shared/UI/Button/pdfPreviewButton';
import moment from 'moment';
const { Option } = Select;

interface IEnterFormProps {
    id: number,
    createId?: any,
    saveData?: any,
    initalData?: IEnterForm[],

}
const { Search } = Input;
const EnterForm = ({ id, createId, saveData, initalData }: IEnterFormProps) => {
    const dispatch: AppDispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState<IEnterForm>();
    const selectedId = useSelector((state: RootState) => state.seletedId);
    const LoadPatientData = useSelector(PaitentValue(selectedId));  
    const labno = useSelector((state: RootState) => state.auth.labNo);
    const [form] = Form.useForm();

    const handleFinish = (values: { DATE: { format: (arg0: string) => any; }; time: { format: (arg0: string) => any; }; ReciveData: { format: (arg0: string) => any; }; Receivtime: { format: (arg0: string) => any; }; }) => {
        const formattedValues: any = {
            ...values,
            DATE: values.DATE.format('DD-MM-YYYY'),
            time: values.time.format('HH:mm'),
            ReciveData: values.ReciveData.format('DD-MM-YYYY'),
            Receivtime: values.Receivtime.format('HH:mm')
        };
        console.log("save",formattedValues);

        const newFormData = formattedValues as IEnterForm;
        newFormData.id = id
        console.log("new", newFormData);
        setFormData(newFormData);
        console.log('hit');
        dispatch(addData(newFormData));
        // saveData(newFormData);
    };
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    useEffect(() => {

        if (id === 0) {
            setDisabled(true);
        }
        if (id !== 0) {
            setDisabled(false);
        }



    }, []);
    const CreateId = () => {
        createId();
        setDisabled(false);


    }

    useEffect(() => {
        if (selectedId !== 0) {
            setDisabled(false);
        }
        if (LoadPatientData) {
            setFormData(LoadPatientData);
            form.setFieldsValue({
                ...LoadPatientData,
                LabNO:labno,
                DATE: LoadPatientData.DATE ? moment(LoadPatientData.DATE, 'DD-MM-YYYY') : null,
                time: LoadPatientData.time ? moment(LoadPatientData.time, 'HH:mm') : null,
                ReciveData: LoadPatientData.ReciveData ? moment(LoadPatientData.ReciveData, 'DD-MM-YYYY') : null,
                Receivtime: LoadPatientData.Receivtime ? moment(LoadPatientData.Receivtime, 'HH:mm') : null,
            });
        }
    }, [selectedId, LoadPatientData, form]);
    
    


    return (
        <div style={{ width: "90%", margin: "6px auto" }}>
            <div style={{ display: "flex", gap: "4px", margin: "10px 2px " }}>
                <GradientButton id={id} BtnName={'Add Patient'} clickEvent={CreateId} />
                <PDFPreview id={id} />
                <GradientButton id={id} BtnName={'Save'} clickEvent={CreateId} />
                <div style={{ width: "100%" }}></div>
                {/* <GradientButton id={id} BtnName={'Name Wi'} /> */}
                <Search
                    placeholder=" search name wise"
                    allowClear
                    enterButton={'search'}
                    size="large"
                    onSearch={onSearch}
                />
            </div>
            <Divider />
            <Form
                form={form}
                layout="vertical"
                disabled={disabled}
                onFinish={handleFinish}
            >
                <div style={{ display: "flex", gap: "4px" }}>
                    <Form.Item
                        style={{ width: "30%" }}
                        label="Report Date"
                        name="DATE"
                        rules={[{ required: true, message: 'Please select a date!' }]}
                    >
                        <DatePicker style={{ width: "96%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "30%" }}
                        label="Time"
                        name="time"
                        rules={[{ required: true, message: 'Please select a time!' }]}
                    >
                        <TimePicker style={{ width: "96%" }} />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "30%" }}
                        label="Lab Number"
                        name="LabNO"
                        rules={[{ required: true, message: 'Please input the lab number!' }]}
                    >
                        <Input type="number" value={formData?.LabNO} style={{ width: "96%" }} />
                    </Form.Item>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                    <Form.Item
                        style={{ width: "30%" }}
                        label="Received Date"
                        name="ReciveData"
                        rules={[{ required: true, message: 'Please select a received date!' }]}
                    >
                        <DatePicker style={{ width: "96%" }} />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "30%" }}
                        label="Received Time"
                        name="Receivtime"
                        rules={[{ required: true, message: 'Please select a received time!' }]}
                    >
                        <TimePicker style={{ width: "96%" }} />
                    </Form.Item>

                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                    <Form.Item
                        style={{ width: "20%" }}
                        label="Prefix"
                        name="prefix"
                        rules={[{ required: true, message: 'Please input the prefix!' }]}
                    >
                        <Select>
                            <Option value="MR">MR</Option>
                            <Option value="MRS">MRS</Option>
                            <Option value="MS">MS</Option>
                            <Option value="DR">DR</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        style={{ width: "30%", padding: "0px 2px" }}
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "20%", padding: "0px 2px" }}
                        label="Age"
                        name="Age"
                        rules={[{ required: true, message: 'Please input the age!' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "20%", padding: "0px 2px" }}
                        label="Gender"
                        name="Gender"
                        rules={[{ required: true, message: 'Please select the gender!' }]}
                    >
                        <Select>
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                    <Form.Item
                        style={{ width: "40%", padding: "0px 2px" }}
                        label="Address"
                        name="Address"
                        rules={[{ required: true, message: 'Please input the address!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "20%", padding: "0px 2px" }}
                        label="Mobile Number"
                        name="M_no"
                        rules={[{ required: true, message: 'Please input the mobile number!' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                    <Form.Item
                        style={{ width: "50%", padding: "0px 2px" }}
                        label="Reference By"
                        name="Reference"
                        rules={[{ required: true, message: 'Please input the address!' }]}
                    >
                        <Select>
                            <Option value="Ram">DR Ram</Option>
                            <Option value="Krishan">DR Krishan</Option>

                        </Select>
                    </Form.Item>
                    <Form.Item
                        style={{ width: "50%", padding: "0px 2px" }}
                        label="Materials"
                        name="materials"
                        rules={[{ required: true, message: 'Please input the mobile number!' }]}
                    >
                        <Select>
                            <Option value="Blood">Blood</Option>
                            <Option value="Blood1">Blood1</Option>

                        </Select>
                    </Form.Item>
                </div>

                <Form.Item>
                    <Badge dot size="default">
                        <Button  type="primary" htmlType="submit" >Save</Button>
                        {/* <GradientButton id={id} BtnName={'Save'} htmlType="submit" disabled={disabled} /> */}
                    </Badge>
                    
                </Form.Item>
            </Form>

        </div>
    );
};

export default EnterForm;


