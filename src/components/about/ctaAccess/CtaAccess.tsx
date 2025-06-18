// UI COMPONENT
import { Button } from "@/components/ui/button";

// PROMPTS
import { ctaAccessTexts } from "@/prompts";

// STORES
import { useDialog } from "@/stores/dialog/useDialog";


export default function CtaAccess() {

        const { setDialogDisplay, setDialogTitle, setDialogSubtitle, setDialogDescription, setDialogCloseText, setDialogAddImg, setDialogImgUrl } = useDialog();
    

    return (
        <div
            className="relative flex items-center justify-center h-[300px] rounded-lg shadow-xl overflow-hidden"
            style={{
                backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1YwDMrTBLp_Uv1aPZwMFXByd8CWQ-28rZhyXXr6iYfswqZn-pIMjOPx7hN6egSVQ4_k&usqp=CAU")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            {/* Radial overlay for elegant effect */}
            <div className="absolute inset-0 bg-gradient-radial from-white/10 via-white/5 to-transparent z-0" />

            <div className="relative z-10 flex flex-col items-center text-center text-white bg-white/10 backdrop-blur-md rounded-xl px-6 py-8 max-w-[90%] shadow-lg">
                <h6 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 capitalize drop-shadow-md">
                    {ctaAccessTexts.about_ctaAccessTitle}
                </h6>
                <p className="text-sm md:text-base text-white/90 max-w-md">
                    {ctaAccessTexts.about_ctaAccessSubtitle}
                </p>

                <Button 
                className="mt-6 text-md font-extrabold p-6 text-black bg-white rounded-full shadow-lg"
                 onClick={() => {
                            setDialogImgUrl('https://cdn-icons-gif.flaticon.com/10246/10246777.gif')
                            setDialogTitle('Coming Soon')
                            setDialogSubtitle('Something powerful is on the way')
                            setDialogDescription("This feature, and more will be available through ABCeez Hub v2. Stay tuned, the next version is just around the corner!")
                            setDialogCloseText('Got it')
                            setDialogAddImg(true)
                            setDialogDisplay(true)
                        }}
                >
                    Get In Touch
                </Button>
            </div>
        </div>

    )
}
