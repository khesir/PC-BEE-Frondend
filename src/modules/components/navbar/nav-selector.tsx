import { Link, useLocation } from "react-router-dom";
import { SidebarItems } from "../project-layout";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SidebarItem } from "../project-layout";

export function NavSelector({layout}: SidebarItems){
    const location = useLocation();
    const pathName = location.pathname;
    console.log(layout)
    return(
        <>
            {layout.map((item : SidebarItem, index: number) => 
                <Link 
                    key={index}
                    to={item.href}
                    className={cn(
                        buttonVariants({variant: item.href === pathName ? "default" : "ghost", size: "sm"}),
                        item.variant === "default" &&  "text-muted-foreground transition-all hover:text-primary",
                        "justify-start"
                    )}
                >
                <item.icon className="mr-2 h-4 w-4"/>
                {item.title}
                {item.label && (
                    <span className={cn(
                        "ml-auto bg-red-600 px-2 rounded-sm",
                        item.variant === "default" &&
                    "text-background  dark:text-white"
                    )}>{item.label}</span>
                )}
                </Link>
            )}
        </>
 )
}