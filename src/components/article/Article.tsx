import { useEffect } from "react";

// ICONS
import { CalendarDays, Clock, Tag, User } from "lucide-react";


export default function Product() {

  const sections = [
    {
      title: "Overview",
      content:
        "Our team partnered with a major e-commerce platform to revamp their user interface and enhance the overall shopping experience Our team partnered with a major e-commerce platform to revamp their user interface and enhance the overall shopping experience Our team partnered with a major e-commerce platform to revamp their user interface and enhance the overall shopping experience Our team partnered with a major e-commerce platform to revamp their user interface and enhance the overall shopping experience Our team partnered with a major e-commerce platform to revamp their user interface and enhance the overall shopping experience Our team partnered with a major e-commerce platform to revamp their user interface and enhance the overall shopping experience Our team partnered with a major e-commerce platform to revamp their user interface and enhance the overall shopping experience Our team partnered with a major e-commerce platform to revamp their user interface and enhance the overall shopping experience Our team partnered with a major e-commerce platform to revamp their user interface and enhance the overall shopping experience Our team partnered with a major e-commerce platform to revamp their user interface and enhance the overall shopping experience"
    }
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    })
  }, [])

  return (
    <>
      {/* HERO IMAGE */}
      <div
        className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-lg min-h-80 shadow-sm mb-3"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuClNP9_07iYQOkHrUGjvvIqD2mJzN0xBi2tK6iSpeYR2nmd84xlR9_s47h7EK8pvR5PnYxPmUjVseWuUPL_jVb6pNeVVAwfMxTrYhB-XBD8AwUYWuKzWJMk8KoRE7lzv6Si6DdvK1TmeoknR1SylrWyJ7BzErCeHR1TK-uJvuCmJSdT3qLxgGiWsKaSvU3a1PHsljKYg3mgEc2ZGvowU9oBDs44A4P5MqMWG0J-5oYtMZXm3AHKzYjFIzUAd2nn-xBI0Q0tvrmhamy6')",
        }}
      >
      </div>

      {/* DETAILS */}
      <div className="flex border-1 bg-white p-4 rounded-md gap-4">
        {/* Author */}
        <div className="flex flex-col items-center space-y-2 w-full">
          <div className="flex h-8 items-center justify-center">
            <User className="w-6 h-6 text-orange-700" />
          </div>
          <div className="text-center">
            <span className="text-xs font-bold block">Author</span>
            <span className="text-xs font-medium text-gray-700">
              Firas D.
            </span>
          </div>
        </div>

        {/* Published */}
        <div className="flex flex-col items-center space-y-2 w-full">
          <div className="flex h-8 items-center justify-center">
            <CalendarDays className="w-6 h-6 text-orange-700" />
          </div>
          <div className="text-center">
            <span className="text-xs font-bold block">Published</span>
            <span className="text-xs font-medium text-gray-700">
              June 17, 2025
            </span>
          </div>
        </div>

        {/* Reading Time */}
        <div className="flex flex-col items-center space-y-2 w-full">
          <div className="flex h-8 items-center justify-center">
            <Clock className="w-6 h-6 text-orange-700" />
          </div>
          <div className="text-center">
            <span className="text-xs font-bold block">Reading Time</span>
            <span className="text-xs font-medium text-gray-700">
              4 min read
            </span>
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-col items-center space-y-2 w-full">
          <div className="flex h-8 items-center justify-center">
            <Tag className="w-6 h-6 text-orange-700" />
          </div>
          <div className="text-center">
            <span className="text-xs font-bold block">Category</span>
            <span className="text-xs font-medium text-gray-700">
              UI/UX Design
            </span>
          </div>
        </div>
      </div>

      {/* ALL DETAILS */}
      {sections.map((section, i) => (
        <div key={i} className="bg-white mt-2 border-1 rounded-md p-4">
          <h2 className="text-black text-[22px] font-bold py-1">
            {section.title}
          </h2>
          <p className="text-gray-800 text-base font-normal py-2">
            {section.content}
          </p>
        </div>
      ))}

    </>

  );
}