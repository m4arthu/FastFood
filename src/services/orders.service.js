import axios from "axios"
import { api } from "./api.service"
export const getOrders = async () => {
    return api.get("/orders").then((response)=>{
        return response.data
    }).catch((e)=>{console.log(e)})
}