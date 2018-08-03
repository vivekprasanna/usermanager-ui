import axios from "axios";

export const fetchUser = (callback, errCallback, userName, password, registerFlg) => {
    const user = {
        userName: userName,
        password: password
    }
    let url = "";
    if(registerFlg){
        url = "http://35.226.30.68:8080/api/registerUser";
    }else{
        url = "http://35.226.30.68:8080/api/validateLogin";
    }
    axios.post(url, {user})
        .then(result => {
            callback(result, registerFlg);
        })
        .catch(error => {
            errCallback(error);
        });
};

