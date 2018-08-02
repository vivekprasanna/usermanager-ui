import React, { Component } from 'react';
//import { fetchUser } from "./Helpers/ajaxhelper";
import {ChildInputs} from "./Components/ChildInputs";
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            message: "This will get updated one the user start to enter information. Do not close this banner.",
            userName: "User",
            password: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleOnChange(value){

        this.setState({
            message: "User Input is being edited:: "+ value
            //fetchUser(this.fetchCallBack, this.state.startDate.toString(), this.state.endDate.toString())
        });
    }

    handleLogin = (userName, password) => {
        alert(userName);
        alert(password);
    }

    handleRegister = (userName, password) => {
        alert(userName);
        alert(password);
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
                    <span className="close"></span>
                </div>
                <ChildInputs onLoginClicked={this.handleLogin} onRegisterClicked={this.handleRegister} onUserEdit={this.handleOnChange}/>
            </div>
        );
      }
}

export default App;
