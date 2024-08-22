import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Input } from "@/components/ui/input";
import { DialogDescription } from "@radix-ui/react-dialog";

export function HotSearch() {
    return(
        <div className="w-full flex items-center justify-center">
            <Dialog>
                <DialogTrigger>
                    <Button className="h-[30px] w-[200px] bg-slate-900 text-slate-300">Search Whatever</Button>
                </DialogTrigger>
                <DialogContent className="w-full">
                    <DialogTitle>
                    <Input placeholder="Search Something"/>
                    </DialogTitle>
                    <DialogDescription>
                        Some results here
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        
        </div>
    )
}