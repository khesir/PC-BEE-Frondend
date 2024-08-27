import { useState, useEffect } from "react"
import { ActivityLogData } from "../../constant/temp-data"
import { ActivityLogs } from "../../types/types"
import { ActivityLogCard } from "../ui/activitylog-card"


export function ActivityLogsPage() {
    const [logs,setLogs] = useState<ActivityLogs[]>([])
	const [isFetching, setIsFetching] = useState<boolean>(false)

	useEffect(() =>  {
		const fetchData = () => {
			try{
				const data = ActivityLogData
				setLogs(data)
			} catch (error){
				console.log(error)
			}
		}
		setIsFetching(true)
		fetchData()
		setIsFetching(false)
	},[])
	if(isFetching){
		return <div>
			Fetching Data
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