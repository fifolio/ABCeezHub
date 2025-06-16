
// PROMPTS
import { Button } from "@/components/ui/button";
import ctaAccessTexts from "@/prompts/ctaAccess/ctaAccessTexts";

export default function CtaAccess() {

    return (
        <div
            className="relative flex flex-col h-[600px] border shadow-sm rounded-lg overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://cdn.dribbble.com/userupload/24426263/file/original-52cf3a971cd1054bf2985d8f34a9a056.gif")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col items-center justify-center w-full h-full text-white bg-white/10 backdrop-blur-xs rounded-lg p-4">
                <div className="flex flex-row items-center justify-between mb-5">
                    <h6 className="text-4xl font-extrabold capitalize">
                        {ctaAccessTexts.ctaAccessTitle}
                    </h6>
                </div>
                <p className="text-sm text-center">
                    {ctaAccessTexts.ctaAccessSubtitle}
                </p>
                <div className="flex flex-row mt-10 items-center justify-between space-x-5">
                    <Button variant="secondary" className="font-bold">Learn More</Button>
                    <p>or</p>
                    <Button variant="secondary" className="font-bold">Join Now</Button>
                </div>
            </div>
        </div>

    )
}
