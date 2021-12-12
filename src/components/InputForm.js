import React from 'react';
import {Button, Form, InputNumber} from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Typography} from 'antd';

class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {amount: 5000, strategies: [], loading: false, showGraph: false};

    }

    onFinish(values){
        console.log('Success:', values);
    };

    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    };

    setAmount = e => {
        console.log(e)
        this.setState({amount: e});
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
            this.state.strategies.length > 1 && this.state.strategies.indexOf(id) === -1
        );
    };

    handleSubmit = () => {
        this.setState({loading: true, showGraph:true});
        console.log(this.state)
        // this.props.actions.saveUserInput({amount: parseInt(this.state.amount), strategies:this.state.strategies}).then( () =>{
        //     this.setState({"loading": false});
        // });
    };

    render() {
        const names = [
            "Ethical Investing",
            "Growth Investing",
            "Index Investing",
            "Quality Investing",
            "Value Investing"
        ];
        const { Title, Paragraph} = Typography;
        return (
            <div className='input-form'>
                <Typography className='Typography'>
                    <Title level={3} className='title'>Welcome to Stock Advisor</Title>
                    <Paragraph className='subtitle'>
                        Please Enter your investment amount and chose your strategies
                    </Paragraph>
                    <Form
                        name="stockInput"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                        className='stockInputForm'
                    >

                        <Form.Item
                            className='InputAmount'
                            label="Money"
                            name="money"
                            rules={[{required:true, message:'Please enter a number'}]}
                        >
                            <InputNumber style={{width:'50%'}}
                                         defaultValue={this.state.amount}
                                         onChange={this.setAmount}
                            />
                        </Form.Item>
                        <Form.Item className='InputCheckbox'>
                            <Paragraph>Choose one or two investment Strategies</Paragraph>
                            {names.map(name =>(
                                <Checkbox.Group >
                                    <Checkbox value={name}
                                              onChange={this.setStrategies(name)}
                                              disabled={this.isDisabled(name)}
                                              label={name}
                                              checked={this.state.strategies.indexOf(name) > -1}>
                                        {name}
                                    </Checkbox>
                                </Checkbox.Group>
                                )
                            )}

                        </Form.Item>
                        <Button disabled={this.state.strategies.length < 1 || this.state.strategies.length > 2
                        || this.state.loading || this.state.amount<5000}
                                color="primary"
                                className='submit-button'
                                onClick={this.handleSubmit}>
                            {/*{this.state.loading && <CircularProgress size={24} />}*/}
                            Submit
                        </Button>
                    </Form>



                </Typography>
                {this.state.amount}
                {this.state.showGraph}
            </div>

        )

    }
}

export default InputForm;