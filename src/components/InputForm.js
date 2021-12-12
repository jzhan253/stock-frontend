import React from 'react';
import {Button, Col, Form, Input, InputNumber, PageHeader, Row} from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Typography, Divider } from 'antd';

class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {amount: 5000, strategies: [], loading: false};

    }

    onFinish(values){
        console.log('Success:', values);
    };

    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    };

    setAmount = e => {
        this.setState({amount: e.target.value});
    };

    onChange = checkedValues => {
        this.setState(() => {
            return { strategies: checkedValues };
        });
    };

    setStrategies  = strategy => event => {
        if(event.target.checked) {
            this.setState({strategies: this.state.strategies.concat(strategy)});
        } else {
            this.setState({strategies: this.state.strategies.filter( s => s !== strategy)});
        }
    };

    isDisabled = id => {
        return (
            this.state.strategies.length > 2 && this.state.strategies.indexOf(id) === -1
        );
    };

    render() {
        const names = [
            "Ethical Investing",
            "Growth Investing",
            "Index Investing",
            "Quality Investing",
            "Value Investing"
        ];
        const { Title, Paragraph, Text, Link } = Typography;
        return (
            <div className='input-form'>
                <Typography>
                    <Title level={3}>Welcome to Stock Advisor</Title>
                    <Paragraph>
                        Please Enter your investment amount and chose your strategies
                    </Paragraph>
                    <Form
                        name="stockInput"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item
                            label="Money"
                            name="money"
                            rules={[{required:true, message:'Please enter a number'}]}
                        >
                            <InputNumber style={{width:'50%'}}/>
                        </Form.Item>
                        <Form.Item>
                            <Paragraph>Choose one or two investment Strategies</Paragraph>
                            {names.map(name =>(
                                <Checkbox.Group onChange={this.onChange}>
                                    <Checkbox value={name}
                                              disabled={this.isDisabled(name)}>
                                        {name}
                                    </Checkbox>
                                </Checkbox.Group>
                                )
                            )}

                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>



                </Typography>

            </div>

        )

    }
}

export default InputForm;