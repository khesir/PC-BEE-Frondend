import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"

const items = [
    {
        title: "Employee",
        href: "/employee/users",
        label: "string",
        variant: "ghost",
    },{
        title: "Sales",
        href: "/sales/shop",
        label: "string",
        variant: "ghost"
    },{
        title: "Inventory",
        href: "/inventory/items",
        label: "string",
        variant: "ghost"
    }
]

export function Navbar(){
    const location = useLocation()
    const currentPath = location.pathname.split('/')[1]
    const pathName = "/" + currentPath

    return(
        <div className="flex gap-3">
            {items.map((item, index) => 
                <Link
                    key={index}
                    to={item.href}
                    className={cn(
                        buttonVariants({variant: "/"+item.href.split('/')[1] === pathName ? "default" : "ghost", size: "xs"}),
                        item.variant === "default" &&  "text-muted-foreground transition-all hover:text-primary",
                        "justify-start"
                    )}
                >
                {item.title}
                {item.label && (
                    <span className={cn(
                        "ml-auto",
                        item.variant === "default" &&
                    "text-background dark:text-white"
                    )}></span>
                )}
                </Link>
            )}
        </div>
    )
}