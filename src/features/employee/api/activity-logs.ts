
import { ApiResponse, request} from "@/api/axios";
import { ActivityLogs } from "../types/types";

export async function getAllActivityLogs(){
    try{
        const response = await request<ApiResponse<ActivityLogs>>('GET', '/ems/activity-logs/')
        
        return response.data
    } catch (error){
        console.log('Error sending data: ', error);
        throw error
    }
}

export async function createActivityLog(data: ActivityLogs){
    try{
        const response = await request<ApiResponse<ActivityLogs>>('POST', '/ems/activity-logs/', data)
        
        console.log(response)
    } catch (error){
        console.log('Error sending data: ', error);
        throw error
    }
}