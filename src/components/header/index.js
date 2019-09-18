import React from "react";
import {Row,Col} from 'antd'
import './index.less'
import {momentYMDHMSS} from '@/utils/index'
import axios from '@/axios/'
export default class Header extends React.Component{
    state = {}
    componentWillMount() {
        setInterval(()=>{
            const times = momentYMDHMSS(new Date)
            this.setState({times})
        },1000)
    }

    getWeatherData=()=>{
        axios.jsonp('https://free-api.heweather.net/s6/weather/now?location=beijing&key=d972b14796b34e01b4b9c42fb762f452')
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，河畔一角</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breakCrumb">
                    <Col span={4} className="breakCrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span>{this.state.times}</span>
                        <span>晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
