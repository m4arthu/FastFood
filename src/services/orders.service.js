
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

export  const updateOrder = async (data) => {
    return api.put("/orders",data).then((response)=>{
        return response.data
    }).catch((e)=>{console.log(e)})
}

export  const deleteOrderApi = async (id) => {
    return api.delete(`/orders/${id}`).then((response)=>{
        return response.data
    }).catch((e)=>{console.log(e)})
}