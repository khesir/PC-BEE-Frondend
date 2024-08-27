import { useCallback, useEffect, useState } from "react";
import { Employee } from "../../types/types";
import { UserCard } from "../ui/user-card";
import { getAllEmployee } from "../../api/employee";

import { useToast } from "@/components/ui/use-toast";



export function ListEmployee() {
	const {toast} = useToast()
	const [activeEmployee,setActiveEmployee] = useState<Employee[]>([])
	const [isFetching, setIsFetching] = useState<boolean>(false)

	const fetchData = useCallback( async () => {
		try{
			setIsFetching(true);
			const data = await getAllEmployee()
			if (data != null) {
				setActiveEmployee(data)
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
		} finally {
			setIsFetching(false)
		}
	}, [])

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

	if(activeEmployee.length == 0){
		return <div>
			No data available
		</div>
	}
	console.log(activeEmployee)
	return (
		
		<>
			{activeEmployee.map((d,i) => (
				<UserCard
					key={i}
					{...d}
				/>
			))}
		</>
		
	);
}
