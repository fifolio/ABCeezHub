export default function Numbers() {
    const stats = [
        {
            number: "+30",
            label: "Satisfied Clients",
            hook: "We've built strong relationships and delivered real value to a growing list of happy clients.",
            icon: "👥",
            gradient: "from-blue-500 to-purple-600",
        },
        {
            number: "+50",
            label: "Projects Completed",
            hook: "Each project is a testament to our dedication and expertise, successfully brought to life.",
            icon: "🚀",
            gradient: "from-green-500 to-teal-600",
        },
        {
            number: "$2.5K",
            label: "Average Project Cost",
            hook: "We provide high-quality solutions that are both effective and budget-friendly.",
            icon: "💰",
            gradient: "from-orange-500 to-red-600",
        },
    ]

    return (
        <>
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="my-3">
                    <div
                        className="relative flex items-center justify-center rounded-lg shadow-md overflow-hidden border-white/20"
                        style={{
                            backgroundImage: `url("https://img.freepik.com/free-photo/aesthetic-background-with-gradient-neon-led-light-effect_53876-108138.jpg")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>

                        <div className="relative z-10 flex flex-col items-center text-center text-white bg-white/10 backdrop-blur-lg rounded-lg px-6 pt-3 w-full h-full ">
                            <h6 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 capitalize drop-shadow-md">
                                Some Numbers
                            </h6>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl">
                            {/* Card */}
                            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200">
                                {/* Gradient Background Accent */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.gradient}`}></div>

                                {/* Icon */}
                                <div className="text-center mb-4">
                                    <div className="text-4xl md:text-5xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                </div>

                                {/* Number */}
                                <div className="text-center mb-3">
                                    <div
                                        className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                                    >
                                        {stat.number}
                                    </div>
                                </div>

                                {/* Label */}
                                <div className="text-center">
                                    <div className="text-black font-extrabold text-md">{stat.label}</div>
                                </div>

                                 {/* Hook */}
                                <div className="text-center mt-2">
                                    <div className="text-slate-600 font-medium text-sm md:text-base leading-tight">{stat.hook}</div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-20"></div>
                                <div className="absolute -top-1 -left-1 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-30"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decorative Section */}
                <div className="my-12 md:mt-20 text-center">
                    <div className="flex justify-center items-center space-x-2 opacity-60">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                    <p className="text-slate-500 text-sm mt-4 font-medium">Growing every day with passion and dedication</p>
                </div>
            </div>
        </>
    )
}
