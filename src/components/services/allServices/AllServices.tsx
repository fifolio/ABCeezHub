import { useEffect } from "react";

// ICONS
import {
    LayoutTemplate,
    Code2,
    RefreshCw,
    ShoppingCart,
    BarChart3,
    SearchCheck,
} from "lucide-react";

export default function AllServices() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }, [])

    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Web Design */}
            <div className="flex gap-4 items-center border bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition duration-200">
                <div className="p-3 rounded-lg bg-pink-100 flex items-center justify-center">
                    <LayoutTemplate className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Web Design</h3>
                    <p className="text-sm text-gray-600">
                        Communicate your mission via custom designs built around your brand.
                    </p>
                </div>
            </div>

            {/* Web Development */}
            <div className="flex gap-4 items-center border bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition duration-200">
                <div className="p-3 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Web Development</h3>
                    <p className="text-sm text-gray-600">
                        Welcome your online visitors with fast, responsive and secure websites.
                    </p>
                </div>
            </div>

            {/* Web Migration & Rebranding */}
            <div className="flex gap-4 items-center border bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition duration-200">
                <div className="p-3 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Web Migration & Rebranding</h3>
                    <p className="text-sm text-gray-600">
                        Move to new web hosts and rebrand to new domain names with ease.
                    </p>
                </div>
            </div>

            {/* eCommerce Solutions */}
            <div className="flex gap-4 items-center border bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition duration-200">
                <div className="p-3 rounded-lg bg-green-100 flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">eCommerce Solutions</h3>
                    <p className="text-sm text-gray-600">
                        Sell and ship worldwide and take online payments securely.
                    </p>
                </div>
            </div>

            {/* CRO & A/B Testing */}
            <div className="flex gap-4 items-center border bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition duration-200">
                <div className="p-3 rounded-lg bg-purple-100 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">CRO & A/B Testing</h3>
                    <p className="text-sm text-gray-600">
                        Understand your website users and deliver the best user experience they expect.
                    </p>
                </div>
            </div>

            {/* Search Engine Optimization */}
            <div className="flex gap-4 items-center border bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition duration-200">
                <div className="p-3 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <SearchCheck className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Search Engine Optimization</h3>
                    <p className="text-sm text-gray-600">
                        Be found on relevant search results for your offered services and products.
                    </p>
                </div>
            </div>

        </div>
    );
}