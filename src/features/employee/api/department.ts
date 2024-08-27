
import { ApiResponse, request} from "@/api/axios";
import { Department } from "../types/types";

export async function getAllDepartment(){
    try{
        const response = await request<ApiResponse<Department>>('GET', '/ems/department/')
        console.log(response.data.data)
        return response.data.data
    } catch (error){
        console.log('Error sending data: ', error);
        throw error
    }
}