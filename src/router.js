import React from "react";
import App from './App'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Login from './page/Login/Login'
import Admin from './admin'
import menueConfig from "./config/menueConfig";
import Nomtch from './components/404/404'


export default class rot extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={
                        prop => <Admin>
                                <Switch>
                                    {menueConfig.map((e,index)=>{
                                        return(
                                            <Route path={e.key} component={e.component} key={e.key+e.index}></Route>
                                        )
                                    })}
                                    <Route  component={Nomtch}></Route>
                                </Switch>
                        </Admin>
                    }
                    ></Route>
                </App>
            </HashRouter>
        )
    }
}
