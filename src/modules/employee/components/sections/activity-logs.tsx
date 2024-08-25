import { useState, useEffect } from "react"
import { ActivityLogData } from "../../constant/temp-data"
import { ActivityLogs } from "../../types/types"


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
            {logs.map((d,i) => (
			<section 
				className="flex items-center gap-3" 
				key={i}
			>
				<div className="h-10 w-10 rounded-full p-1 bg-white">
					<img width={200} height={200} src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${d.fullname}`} alt="avatar"/>
				</div>
                <div>
                    <p className="font-semibold text-md">{d.fullname}</p>
                    <div className="text-gray-400 text-sm font-semibold">
                        {d.action}
                    </div>
                </div>
			</section>
			))}
        </div>
    )
}