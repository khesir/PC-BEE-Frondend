import { Plus } from "lucide-react";

export function JobOrderListing() {
    return(
        <div>
            <div className="flex px-2 justify-between">
                <span className="text-sm font-semibold">
                    Job orders
                </span>
                <Plus className="h-5 w-5 mr-2"/>
            </div>
        </div>
    )
}