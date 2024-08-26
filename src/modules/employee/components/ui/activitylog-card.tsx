import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ActivityLogs } from "../../types/types";

export function ActivityLogCard(data : ActivityLogs) {
    return(
            <Dialog>
                <DialogTrigger>
                    <section 
                        className="flex items-center gap-3" 
                    >
                        <div className="h-10 w-10 rounded-full p-1 bg-white">
                            <img width={200} height={200} src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${data.fullname}`} alt="avatar"/>
                        </div>
                        <div className="text-start">
                            <p className="font-semibold text-md">{data.fullname}</p>
                            <div className="text-gray-400 text-sm font-semibold">
                                {data.action}
                            </div>
                        </div>
                    </section>
                </DialogTrigger>    
                <DialogContent>
                    <DialogTitle>Action name here</DialogTitle>
                    <DialogDescription>Necessary action information</DialogDescription>
                </DialogContent>   
            </Dialog>
    )
}