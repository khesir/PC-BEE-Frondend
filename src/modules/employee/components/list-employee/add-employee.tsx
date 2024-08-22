import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";


export function AddEmployee() {
    const navigate = useNavigate()

    const createUser = () =>{
        navigate('/employee/create')
    }
    return(
        <div className="flex justify-between items-center">
            <span className="font-semibold text-md">
                Employees
            </span>
            <Button onClick={createUser}>
                <User className="w-4 h-4"/>
                Add Employee
            </Button>
        </div>
    )
}