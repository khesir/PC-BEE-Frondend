import { useState, useEffect, useCallback } from "react"

import { useToast } from "@/components/ui/use-toast"

import { ActivityLogs } from "../../types/types"
import { ActivityLogCard } from "../ui/activitylog-card"
import { getAllActivityLogs } from "../../api/activity-logs"


export function ActivityLogsPage() {
    const [logs,setLogs] = useState<ActivityLogs[]>([])
	const [isFetching, setIsFetching] = useState<boolean>(false)

	const {toast} = useToast()
	const fetchData = useCallback( async () => {
		try {
			setIsFetching(true);
			const data = await getAllActivityLogs()
			if (data !=null) {
				setLogs(data)
			}

		} catch (error){
			console.log(error)
			toast({
				variant: "destructive",
				description: (
					<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
						<code className="text-white">{JSON.stringify(error, null, 2)}</code>
					</pre>
				),
			})
		} finally  {
			setIsFetching(false)
		}
	},[])

	useEffect(() =>  {
		let isMounted = true;

		const loadData = async () => {
			if (isMounted) {
				await fetchData()
			}
		}
		loadData()

		return () => { isMounted = false}
	},[fetchData])

	if(isFetching){
		return <div>
			Fetching Data...
		</div>
	}
    return(
        <div className="w-full flex flex-col mt-5 ml-2 gap-3">
            {logs.map((data,index) => (
				<ActivityLogCard
					key={index}
					{...data}
				/>
			))}
        </div>
    )
}