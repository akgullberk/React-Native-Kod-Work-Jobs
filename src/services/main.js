import { BaseUrl } from "./NetWorkUrl";

const get = urlOption =>{
    return fetch(BaseUrl+urlOption,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res =>{
        if(!res.ok){
            throw Error("Network request failed");
        }
        return res.json();
    })
    .catch(err =>{
        console.log("Error", err);
        throw err;
    })
};

export {get}