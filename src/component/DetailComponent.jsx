import React, { Component, Fragment } from 'react'
import { Button, Layout, Menu, Breadcrumb, Col, Row, Image, Dropdown } from 'antd';
import './detail.scss';
import img from '../images/classic-tee.jpg';
import {
    ShoppingCartOutlined
} from '@ant-design/icons';


const { Header, Content, Footer } = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            <Row className="cart-list">
                <Col span={6}><img src={img} alt="" /></Col>
                <Col span={6} offset={4}>
                    <span>Classic Tee</span>
                    <p>1 X <b>$75.00</b></p>
                    <span>Size：S</span>
                </Col>
            </Row>
        </Menu.Item>
        <Menu.Item>
            <Row className="cart-list">
                <Col span={6}><img src={img} alt="" /></Col>
                <Col span={6} offset={4}>
                    <span>Classic Tee</span>
                    <p>1 X <b>$75.00</b></p>
                    <span>Size：S</span>
                </Col>
            </Row>
        </Menu.Item>

    </Menu>
);


export default class DetailComponent extends Component {

    render() {
        return (
            <Fragment>
                <Layout className="layout">
                    <Header>
                        <Menu theme="" mode="horizontal" >
                            <Menu.Item></Menu.Item>
                            <Dropdown overlay={menu} placement="bottomLeft">
                                <Button className="cart-btn button-color-light">
                                    <ShoppingCartOutlined />
                                    MyCart(4)
                                    </Button>
                            </Dropdown>
                        </Menu>
                    </Header>
                </Layout>

                <Content >
                    <Row>
                        <Col xs={{ span: 24, offset: 0 }} sm={24}
                            md={{ span: 22, offset: 1 }}
                            lg={{ span: 20, offset: 2 }}
                            xl={{ span: 20, offset: 2 }}
                            className={'center'} className="site-layout-content">

                            <Row>
                                <Col xs={{ span: 24, offset: 0 }} sm={24}
                                    md={{ span: 12, offset: 0 }}
                                    lg={{ span: 10, offset: 0 }}
                                    xl={{ span: 10, offset: 0 }}
                                    className="left-img">
                                    <Image
                                        src={img}
                                    />
                                </Col>
                                <Col xs={{ span: 24, offset: 0 }} sm={24}
                                    md={{ span: 12, offset: 2 }}
                                    lg={{ span: 10, offset: 4 }}
                                    xl={{ span: 10, offset: 4 }}
                                    className="right-info">
                                    <div className="product-info">
                                        <h1>Classic Tee</h1>
                                        <hr />
                                        <h3>$75.00</h3>
                                        <hr />
                                        <p>Dolor sit amet......</p>
                                        <p>Dolor sit amet......</p>
                                        <p>Dolor sit amet......</p>
                                        <p>Dolor sit amet......</p>
                                    </div>
                                    <div className='product-size'>
                                        <div>SIZE <span>*</span> </div>
                                        <br />
                                        <div >
                                            <Button className="button-color-light">S</Button>
                                            <Button className="button-color-light">M</Button>
                                            <Button className="button-color-light">L</Button>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="add-to-cart">
                                            <Button className="button-color-dark" size="large" type="primary" >ADD TO CART</Button>
                                        </div>
                                    </div>


                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Content>

            </Fragment >
        )
    }
}
