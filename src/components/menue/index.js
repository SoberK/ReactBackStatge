import React from "react";
import { Menu, Icon } from 'antd';
import logo from './../../logo.svg';
import menueConfig from "../../config/menueConfig";
import './index.less'
import {NavLink } from 'react-router-dom'

const { SubMenu } = Menu;

export default class extends React.Component{
    componentWillMount() {
        const menue = this.renderMenue(menueConfig)
        this.setState({menue})
    }

    renderMenue = (menueConfig)=>{
        return menueConfig.map((item)=>{
            if(item.children){
              return  (<SubMenu key={item.key} title={ <span>
                          <Icon type={item.icon} />
                          <span>{item.title}</span>

                        </span>}>
                    {this.renderMenue(item.children)}
                </SubMenu>)
            }
            return <Menu.Item key={item.key}>
                <NavLink to={item.key}>
                {item.title}
                </NavLink>
            </Menu.Item>

        })
    }


    render() {
        return (
            <div>
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark" mode="vertical">
                        {this.state.menue}
                </Menu>
            </div>
        )
    }
}
