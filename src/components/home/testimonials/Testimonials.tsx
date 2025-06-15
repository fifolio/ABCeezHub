
// COMPONENTS
import AllTestimonials from "./AllTestimonials";

// PROMPTS
import testimonialsText from "@/prompts/testimonials/testimonialsText";

export default function Testimonials() {

    return (
        <div className="flex flex-col bg-white border-1 shadow-sm rounded-lg pt-2 pb-4 px-3">

            <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between my-2">
                    <h6 className="text-lg font-extrabold capitalize">{testimonialsText.testimonialsTitle}</h6>
                </div>
                <p className="text-sm text-gray-700 italic">{testimonialsText.testimonialsSubtitle}</p>
            </div>

            <AllTestimonials />

        </div>
    )
}
