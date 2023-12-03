import { api } from "./api.service";

export const getProducts =  async() => {
    return api.get("").then((response)=>{
        return response.data
    })
}