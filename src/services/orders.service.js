
import { api } from "./api.service"
export const getOrders = async () => {
    return api.get("/orders").then((response)=>{
        return response.data
    }).catch((e)=>{console.log(e)})
}

export const  postOrder =async (data) => {
    return api.post("/orders",data).then((response)=>{
        return response.data
    }).catch((e)=>{console.log(e)})
}