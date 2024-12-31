import useLocalStorage from "../hooks/useLocalStrorage"

const ApiClient = {
    getBasicHeaders: ()=>{
        const token = useLocalStorage().getItem('user_token');
        const headers = {
            'Content-Type': 'application/json',
            'x-access-token':`${token}`,
            };
        return headers;
    },
    getMultiPartHeaders: ()=>{
        const token = useLocalStorage().getItem('user_token');
        const headers = {
            'Content-Type': 'multipart/form-data',
            'x-access-token':`${token}`,
            };
        return headers;
    }
};

export default ApiClient;