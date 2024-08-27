
import { ApiResponse, request} from "@/api/axios";
import { ActivityLogs } from "../types/types";

export async function getAllActivityLogs(){
    try{
        const response = await request<ApiResponse<ActivityLogs>>('GET', '/ems/activity-logs/')
        console.log(response.data.data)
        return response.data.data
    } catch (error){
        console.log('Error sending data: ', error);
        throw error
    }
}