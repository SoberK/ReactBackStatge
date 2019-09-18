import React from 'react'
import { Row,Col } from 'antd'
import Header from './components/header'
import Footer from './components/footer'
import Menue from './components/menue'
import './style/common.less'

export default class Admin extends React.Component{

    render(){
        return (
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <Menue/>
                    </Col>
                    <Col span={20} className="main">
                        <Header/>
                        <Row className="content">
                            content
                        </Row>
                        <Footer></Footer>
                    </Col>
                </Row>
        )
    }
}
