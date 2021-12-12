import React from 'react';
import {Row, Col, Layout} from "antd";
import InputForm from "./InputForm";
import StockWidget from "./StockWidget";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import MarketTrend from "./MarketTrend";
// import {Row, Col, Menu, Breadcrumb} from "antd";
//
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import PropTypes from "prop-types";



class HomePage extends React.Component{

    render() {
        return (
            <Layout>
                <Row>
                    <Col span={8} padding={10}><InputForm /></Col>
                    <Col span={12} padding={10}><MarketTrend /></Col>
                </Row>
                {/*<Row>*/}
                {/*    <Col span={8}>col-8</Col>*/}
                {/*    <Col span={8}>col-8</Col>*/}
                {/*    <Col span={8}>col-8</Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col span={6}>col-6</Col>*/}
                {/*    <Col span={6}>col-6</Col>*/}
                {/*    <Col span={6}>col-6</Col>*/}
                {/*    <Col span={6}>col-6</Col>*/}
                {/*</Row>*/}

            </Layout>

        )

    }
}

export default HomePage;