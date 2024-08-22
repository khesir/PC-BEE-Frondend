import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
	const navigate = useNavigate()

    const redirect = (location: string) => {
        navigate(location)
    }

    return (
        <div className="w-full h-screen">
            <div className="h-full flex flex-col items-center justify-center">
                <p className="text-xl">Select a view:</p>
                <p>Admin</p>
                <Button variant="default" onClick={() => redirect("/employee/users")}>Login</Button>
                <p>Employee</p>
                <Button variant="default" disabled onClick={() => redirect("/employee/users")}>Login</Button>
                
            </div>
        </div>
    )
}
