import { Employee } from "../../types/types";
import { Button } from "@/components/ui/button";
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
			<Button variant={'ghost'}>
				<MoreVertical/>
			</Button>
		</div>
    )
}