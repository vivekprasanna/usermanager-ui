import React, { Component } from 'react';
import { fetchUser } from "./Helpers/ajaxhelper";
import {ChildInputs} from "./Components/ChildInputs";
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            message: "This will get updated one the user start to enter information.",
            isHidden: true,
            errMessage: "",
            userName: "User",
            password: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.loginCallback = this.loginCallback.bind(this);
        this.errorCallback = this.errorCallback.bind(this);
    }

    handleOnChange(value){

        this.setState({
            isHidden: true,
            message: "User Input is being edited:: "+ value
        });
    }

    handleLogin = (userName, password) => {
        fetchUser(this.loginCallback, this.errorCallback, userName, password, false);
    }

    handleRegister = (userName, password) => {
        this.setState({
            userName: result.data.userName
        });
        fetchUser(this.loginCallback, this.errorCallback, userName, password, true);
    }

    loginCallback(result, registerFlg){
        if(registerFlg){
            if(result.body==="User successfully registered."){
                this.setState({
                    isHidden: true,
                    message: "User "+this.state.userName+" is successfully registered."
                });
            }else if(result.body==="User already registered."){
                this.setState({
                    isHidden: false,
                    message: "User "+this.state.userName+" is already registered."
                });
            }
        }else {
            if (null == result.data.userName) {
                this.setState({
                    isHidden: true,
                    errMessage: "User Name or Password is wrong."
                });
            } else {
                this.setState({
                    userName: result.data.userName
                });
            }
        }
    }

    errorCallback(error){

    }

      render() {
        return (
            <div className="App">
                <header >
                    <div className="header">
                        <div className="header-logo">
                            <i className="icon_homedepot"></i>
                        </div>
                        <div className="header-info">
                            <label className="product-info">User Manager</label>
                            <label className="user-info">Welcome {this.state.userName}</label>
                        </div>
                    </div>
                </header>
                <div style={{height: 50 + 'px'}}/>
                <div className="banner information">
                    <span className="message">{this.state.message}</span>
                </div>
                <div id="loadingDiv">
                    {this.state.isHidden ? <div className="banner error">
                        <span className="message">{this.state.errMessage}</span>
                    </div> :<div />}

                </div>
                <ChildInputs onLoginClicked={this.handleLogin} onRegisterClicked={this.handleRegister} onUserEdit={this.handleOnChange}/>
            </div>
        );
      }
}

export default App;
