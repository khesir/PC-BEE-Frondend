import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function WelcomePage() {
    const navigate = useNavigate()

    const redirect = () => {
        navigate("/login")
    }

    return (
        <div className="w-full h-screen">
            <div className="h-full flex flex-col items-center justify-center">
                <p>Welcome!</p>
                <Button variant="default" onClick={redirect}>Login</Button>
            </div>
        </div>
    )
}