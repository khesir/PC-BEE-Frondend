import { Employee } from "../../types/types";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MoreVertical } from "lucide-react";



export function UserCard(props : Employee) {
    return(
        <div className="flex flex-wrap justify-between gap-3 hover:bg-slate-500 p-1 rounded-md cursor-pointer">
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
			<Popover>
                <PopoverTrigger>
                    <MoreVertical/>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col gap-2 bg-slate-800 text-white border-none" side="right" align="start">
                    <Button onClick={() => {}} variant={'ghost'} className="text-start">Send Message</Button>
                    <Button onClick={() => {}} variant={'ghost'} className="text-start">Edit Employee</Button>
                    <Button onClick={() => {}} variant={'ghost'} className="text-start">Payroll</Button>
                    <Button onClick={() => {}} variant={'ghost'} className="text-start">Assign Joborder</Button>
                </PopoverContent>
            </Popover>
		</div>
    )
}