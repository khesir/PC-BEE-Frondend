import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Employee } from "../../types/types";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MoreVertical } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";



export function UserCard(props : Employee) {
    const navigate = useNavigate()

    return(
        <div className="flex gap-3 hover:bg-slate-500 p-1 rounded-md cursor-pointer">

                <Link
                    to="/chat/channel/1"
                    className="flex-1"
                >
                    <section className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full p-1 bg-white">
                            <img width={200} height={200} src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.firstname}`} alt="avatar"/>
                        </div>
                        <div>
                            <p className="font-semibold text-md">{props.lastname + ", " + props.firstname + " " + props.employee_id}</p>
                            <div className="text-gray-400 text-sm font-semibold">
                                {props.status}
                            </div>
                        </div>
                    </section>
                </Link>
                <Popover>
                    <PopoverTrigger>
                        <MoreVertical/>
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col gap-2 bg-slate-800 text-white border-none" side="right" align="start">
                        <Button onClick={() => navigate('/chat/channel/1')} variant={'ghost'} className="text-start">Send Message</Button>
                        <Button onClick={() => navigate('/employee/edit/1')} variant={'ghost'} className="text-start">Edit Employee</Button>
                        <Button onClick={() => navigate('/employee/payroll/1')} variant={'ghost'} className="text-start">Payroll</Button>
                        <Dialog>
                            <DialogTrigger>
                                <Button variant={'ghost'} className="text-start">Assign Joborder</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>Assign Job Order</DialogTitle>
                                <DialogDescription>List all Active Job order here</DialogDescription>
                            </DialogContent>
                        </Dialog>
                    </PopoverContent>
                </Popover>
		</div>
    )
}