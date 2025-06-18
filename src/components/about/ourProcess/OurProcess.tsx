import { useEffect } from "react";

// ICONS
import {
    Search,
    FileText,
    LayoutTemplate,
    Code2,
    UploadCloud,
    Megaphone,
} from "lucide-react";

export default function AllServices() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    return (
        <div className="flex flex-col space-y-4 bg-white py-2 px-2 rounded-lg border-1">
            {/* COVER: COMPANY BUILDING */}
            <div
                className="relative min-h-[320px] flex items-center justify-center rounded-lg shadow-md overflow-hidden border border-white/20"
                style={{
                    backgroundImage: `url("/assets/aboutScreen/ABCeezTeamWorking.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
            </div>

            <div
                className="relative flex items-center justify-center rounded-lg shadow-md overflow-hidden border-white/20"
                style={{
                    backgroundImage: `url("https://img.freepik.com/free-photo/aesthetic-background-with-light-sunset-projector-lamp_53876-108129.jpg?semt=ais_hybrid&w=740")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>

                <div className="relative z-10 flex flex-col items-center text-center text-white bg-white/10 backdrop-blur-lg rounded-lg px-6 pt-3 w-full h-full ">
                    <h6 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 capitalize drop-shadow-md">
                        We Use the 6-D Process
                    </h6>
                </div>
            </div>

            {/* Step 01 - Discover */}
            <div className="flex gap-4 items-start bg-white border-l-4 border-pink-500 rounded-md p-5">
                <div className="flex items-center justify-center bg-pink-100 p-3 rounded-lg">
                    <Search className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-pink-700">01. Discover</h3>
                    <p className="text-sm text-gray-700">
                        We seek to understand where you are and where you wish to go. We take time to understand your marketing goals and objectives.
                    </p>
                </div>
            </div>

            {/* Step 02 - Define */}
            <div className="flex gap-4 items-start bg-white border-l-4 border-yellow-500  rounded-md p-5">
                <div className="flex items-center justify-center bg-yellow-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-yellow-700">02. Define</h3>
                    <p className="text-sm text-gray-700">
                        We start out by defining the necessary requirements for your project. Specific deliverables are agreed upon and the web strategy is put in place.
                    </p>
                </div>
            </div>

            {/* Step 03 - Design */}
            <div className="flex gap-4 items-start bg-white border-l-4 border-blue-500  rounded-md p-5">
                <div className="flex items-center justify-center bg-blue-100 p-3 rounded-lg">
                    <LayoutTemplate className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-blue-700">03. Design</h3>
                    <p className="text-sm text-gray-700">
                        We move into designing the website’s architecture. We focus on usability, searchability and simplicity via a clean professional design.
                    </p>
                </div>
            </div>

            {/* Step 04 - Develop */}
            <div className="flex gap-4 items-start bg-white border-l-4 border-green-500  rounded-md p-5">
                <div className="flex items-center justify-center bg-green-100 p-3 rounded-lg">
                    <Code2 className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-green-700">04. Develop</h3>
                    <p className="text-sm text-gray-700">
                        We hand off the designs to the development team to implement the code and back-end systems to make the website interactive.
                    </p>
                </div>
            </div>

            {/* Step 05 - Deploy */}
            <div className="flex gap-4 items-start bg-white border-l-4 border-purple-500  rounded-md p-5">
                <div className="flex items-center justify-center bg-purple-100 p-3 rounded-lg">
                    <UploadCloud className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-purple-700">05. Deploy</h3>
                    <p className="text-sm text-gray-700">
                        We make sure your team understands the CMS structure, technology, and website functionality for a smooth transition.
                    </p>
                </div>
            </div>

            {/* Step 06 - Deliver */}
            <div className="flex gap-4 items-start bg-white border-l-4 border-indigo-500  rounded-md p-5">
                <div className="flex items-center justify-center bg-indigo-100 p-3 rounded-lg">
                    <Megaphone className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-indigo-700">06. Deliver</h3>
                    <p className="text-sm text-gray-700">
                        Using ethical best-practice SEO techniques, we establish communication links to reach potential and existing customers.
                    </p>
                </div>
            </div>

        </div>
    );
}
