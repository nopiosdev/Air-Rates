
import axios from 'axios';


const Get = async (host) => {
    return axios.get(host)
        .then(({ data }) => {
            console.log(data, 'data')
            return data;
        })
        .catch(async (error) => {
            return null;
        });
}


const Post = async (host, data) => {
    return axios.post(host, data)
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
}


export { Get, Post };