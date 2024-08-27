import { useEffect, useState } from "react";
import { Employee } from "../../types/types";
import { ActiveUsers } from "../../constant/temp-data";
import { UserCard } from "../ui/user-card";



export function ListEmployee() {
	const [activeEmployee,setActiveEmployee] = useState<Employee[]>([])
	const [isFetching, setIsFetching] = useState<boolean>(false)

	useEffect(() =>  {
		const fetchData = () => {
			try{
				const data = ActiveUsers
				setActiveEmployee(data)
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
