
import { ApiResponse, request} from "@/api/axios";
import { Employee } from "../types/types";

export async function getAllEmployee(){
    try{
        const response = await request<ApiResponse<Employee>>('GET', '/ems/employee/')
        
        return response.data.data
    } catch (error){
        console.log('Error sending data: ', error);
        throw error
    }
}