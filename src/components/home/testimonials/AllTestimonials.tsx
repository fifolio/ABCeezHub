import { useEffect, useState } from "react";

// STORES
import { useSk_Testimonials } from "@/stores/skeletons/HomeScreen/sk_Testimonials";

// SKELETONS
import Skeleton_Testimonials from "@/skeletons/HomeScreen/Skeleton_Testimonials";

// APIs
import { GET_clientTestimonials } from "@/backend/services/clientTestimonials/GET_clientTestimonials";

// TYPES
import type { Models } from "node_modules/appwrite/types/client";

export default function AllTestimonials() {

    const { sk_Testimonials, setSk_Testimonials } = useSk_Testimonials();

    const [testimonials, setTestimonials] = useState<Models.Document[]>([]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })

        setSk_Testimonials(true)

        GET_clientTestimonials()
            .then((res) => {
                setTestimonials(res);
                setSk_Testimonials(false);
            })
            .catch((err) => {
                console.error("Error fetching testimonials:", err);
            })

    }, [])

    if (sk_Testimonials || testimonials.length < 0) return (<Skeleton_Testimonials />)

    return (
        <div className="flex flex-col items-center space-y-4 pt-4 bg-white">
            {testimonials.map((client, i) => (
                <div key={i} className="border rounded-lg p-4 w-full bg-white shadow-md">

                    {/* User Info */}
                    <div className="flex items-center space-x-3 mb-3">
                        <img
                            src={`${client.avatar}`}
                            alt="User Avatar"
                            className="w-15 h-15 rounded-full object-cover"
                        />
                        <div>
                            <h6 className="text-md font-semibold">{client.name}</h6>
                            <i className="text-gray-500 text-sm">{client.company}</i>
                            <p className="text-xs text-gray-500">{client.$createdAt.split("T")[0]}</p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-2">
                        {[...Array(client.rating)].map((_, star) => (
                            <span key={star} className={`text-yellow-400 text-lg`}>
                                ★
                            </span>
                        ))}
                        <small className="ml-1 mt-[1px] text-yellow-600">({client.rating}/5)</small>
                    </div>

                    {/* Feedback */}
                    <p className="text-sm text-gray-700">
                        {client.testimonial}
                    </p>
                </div>
            ))}

        </div>

    )
}
