import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import { UserPlus2 } from "lucide-react";
import { useState } from "react";

interface ConfirmationCreateEmployeeProps {
    onConfirm: () => void;
}

export function ConfirmationCreateEmployee ({onConfirm} : ConfirmationCreateEmployeeProps){

    const [open, setOpen] = useState<boolean>(false);

    const handleConfirm = () => {
        onConfirm();
    };
    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className="flex"
                >
                    <span className="mr-2">
                        <UserPlus2/>
                    </span>
                    Create Employee
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    Are you sure about the information given?
                </DialogTitle>
                <DialogDescription>
                    you can still edit the given data so don't worry
                </DialogDescription>
                <DialogFooter>
                    <Button onClick={() => setOpen((open) => !open)}>Cancel</Button>
                    <Button type="submit" onClick={handleConfirm} color="primary">Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
