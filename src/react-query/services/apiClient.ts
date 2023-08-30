import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

class APIclient<T>{
    endpoint: string;

constructor(endpoint:string){
    this.endpoint=endpoint;
}


getAll=()=>{
    return axiosInstance
        .get<T[]>(this.endpoint)
        .then((res) => res.data)

}

post=<T>(data:T)=>{
    return axiosInstance
        .post<T>(this.endpoint,data)
        .then((res) => res.data)
}

}
export default APIclient;