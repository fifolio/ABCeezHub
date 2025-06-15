
export default function AllTestimonials() {
    return (
        <div className="flex flex-col items-center space-y-4 pt-4 bg-white">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="border rounded-lg p-4 w-full bg-white shadow-md">

                    {/* User Info */}
                    <div className="flex items-center space-x-3 mb-3">
                        <img
                            src={`https://randomuser.me/api/portraits/men/${i+8}.jpg`}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <h6 className="text-sm font-semibold">John Doe</h6>
                            <p className="text-xs text-gray-500">June 1{i+1}, 2025</p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, star) => (
                            <span key={star} className={`text-yellow-400 text-lg`}>
                                ★
                            </span>
                        ))}
                    </div>

                    {/* Feedback */}
                    <p className="text-sm text-gray-700">
                        I had an excellent experience! The team was professional, the delivery was fast, and the quality exceeded my expectations. Definitely recommended!
                    </p>
                </div>
            ))}

        </div>

    )
}
