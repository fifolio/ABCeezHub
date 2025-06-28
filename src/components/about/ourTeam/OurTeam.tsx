const teamMembers = [
  {
        name: "Chams Riahi",
        title: "CEO & Founder",
        description: "Driving the vision with strategic leadership and innovation.",
        img: 'https://i.ibb.co/SXjwrBF3/Chams-scaled-e1606424964641-768x768.jpg'
    },
    {
        name: "Wajdi Riahi",
        title: "COO & Head of Strategy",
        description: "Architecting impactful strategies for client success.",
        img: 'https://i.ibb.co/rG7PPkcb/cm9gw2puj0kak5hac9ken8ozd-picture.jpg'
    }
];

export default function OurTeam() {
    return (
        <>
            <div
                className="relative flex items-center justify-center rounded-lg shadow-md overflow-hidden border-white/20"
                style={{
                    backgroundImage: `url("https://img.freepik.com/free-photo/colorful-gradient-background-with-neon-led-light_53876-103676.jpg?semt=ais_items_boosted&w=740")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>

                <div className="relative z-10 flex flex-col items-center text-center text-white bg-white/10 backdrop-blur-lg rounded-lg px-6 pt-3 w-full h-full ">
                    <h6 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 capitalize drop-shadow-md">
                        The Minds Behind Success
                    </h6>
                </div>
            </div>

            {/* COVER: TEAM WORKING */}
            <div
                className="relative min-h-[335px] flex items-center justify-center rounded-lg shadow-md overflow-hidden border border-white/20"
                style={{
                    backgroundImage: `url("/assets/aboutScreen/ABCeezTeamWorking.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
            </div>

            <div className="flex flex-wrap gap-3">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="flex-1 bg-white rounded-lg p-6 shadow text-center"
                    >
                        <div className="flex justify-center">
                            <div className="w-34 h-34 rounded-full border-4 border-blue-500 p-1 mb-4 bg-white shadow">
                                <img src={member.img} className="w-full h-full text-blue-500 rounded-full" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">{member.title}</p>
                        <p className="text-sm text-gray-600">{member.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
