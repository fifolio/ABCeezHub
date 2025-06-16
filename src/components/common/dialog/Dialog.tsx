// UI COMPONENTS
import { Button } from "@/components/ui/button";
import {
    Dialog as DialogContainer,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

// STORES
import { useDialog } from "@/stores/dialog/useDialog"
import { DialogClose } from "@radix-ui/react-dialog";


export default function Dialog() {

    const { dialogDisplay, dialogTitle, dialogSubtitle, dialogDescription, dialogAddImg, dialogImgUrl, dialogCloseText, setDialogDisplay } = useDialog();

    return (
        <DialogContainer open={dialogDisplay}>
            <DialogContent className="[&>button]:hidden">
                <DialogHeader>
                    <DialogTitle className="font-extrabold">{dialogTitle}</DialogTitle>
                    <div className="text-sm text-gray-600 truncate">{dialogSubtitle}</div>
                    {dialogAddImg && (
                        <div
                        className="flex self-center"
                            style={{
                                backgroundImage:`url(${dialogImgUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '150px',
                                height: '150px',
                            }}
                        ></div>
                    )}
                    <div></div>
                    <DialogDescription
                        className="text-sm text-black font-medium">
                        {dialogDescription}
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button
                            variant="default"
                            onClick={() => {
                                setDialogDisplay(false)
                            }}>
                            {dialogCloseText}
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </DialogContainer>
    )
}
