import React, {Component} from 'react';

export class ChildInputs extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleLogin = () => {
        let userName = this.username.value;
        let password = this.password.value;
        this.props.onLoginClicked(userName, password);
    }

    handleRegister = () => {
        let userName = this.username.value;
        let password = this.password.value;
        this.props.onRegisterClicked(userName, password);
    }

    handleOnChange = () => {
        let userName = this.username.value;
        this.props.onUserEdit(userName);
    }
    render(){
        return (
            <div>
                <div className="text-input-container">
                    <input type="text" ref={(ref) => this.username = ref} name="username" title="User Name"  onChange={this.handleOnChange}/>
                    <label htmlFor="username">User Name</label>
                </div>
                <div className="text-input-container" >
                    <input type="password" ref={(ref) => this.password = ref} name="password" title="Password" />
                    <label htmlFor="password" > Password </label>
                </div>
                <table className="standard-table">
                    <tr>
                        <td><button title="Login" className="button md" onClick={this.handleLogin}>Login</button></td>
                        <td><button title="Register" className="button md" onClick={this.handleRegister}>Register</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}