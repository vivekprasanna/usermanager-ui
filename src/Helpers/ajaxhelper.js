import axios from "axios";

export const fetchUser = (callback, userName, password, registerFlg) => {
    const user = {
        userName: userName,
        password: password
    }
    let url = "";
    if(registerFlg){
        url = "";
    }else{
        url = "";
    }
    axios.post(url, {user})
        .then(result => {
            callback(result);
        })
        .catch(error => {
            callback(error);
        });
};

