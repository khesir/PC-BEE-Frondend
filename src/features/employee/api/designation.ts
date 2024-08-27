
import { ApiResponse, request} from "@/api/axios";
import { Designation } from "../types/types";

export async function getAllDesignation(){
    try{
        const response = await request<ApiResponse<Designation>>('GET', '/ems/designation/')
        
        return response.data.data
    } catch (error){
        console.log('Error sending data: ', error);
        throw error
    }
}