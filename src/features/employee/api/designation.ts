
import { ApiResponse, request} from "@/api/axios";
import { Designation } from "../types/types";

export async function getAllDesignation(): Promise<Designation[] | Designation>{
    try{
        const response = await request<ApiResponse<Designation>>('GET', '/ems/designation/')
        
        return response.data
    } catch (error){
        console.log('Error sending data: ', error);
        throw error
    }
}