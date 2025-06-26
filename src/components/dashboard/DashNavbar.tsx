import { useEffect, useState } from "react"

// ICONS
import { Bell, FilePlus, FolderPlus, LogOut, MessageCircle, Search } from "lucide-react"

// UIS
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

// BACKEND
import { account } from '@/backend/configs/configs'

const actionButtons = [
    {
        label: "New Article",
        icon: FilePlus,
        bgColor: "bg-blue-800",
        hoverColor: "hover:bg-blue-700",
        allowAccess: ['admin', 'author'],
        onClick: () => console.log("New Article clicked"),
    },
    {
        label: "Add Project",
        icon: FolderPlus,
        bgColor: "bg-green-800",
        hoverColor: "hover:bg-green-700",
        allowAccess: ['admin'],
        onClick: () => console.log("Add Project clicked"),
    },
];

// Right-side icon buttons config
const headerActions = [
    {
        type: "dropdown",
        icon: <Bell className="h-4 w-4" />,
        label: "Notifications",
        allowAccess: ['admin'],
        items: [
            {
                title: "placeholde",
                subtitle: "2 minutes ago",
            },
        ],
    },
    {
        type: "dropdown",
        icon: <MessageCircle className="h-4 w-4" />,
        label: "Messages",
        allowAccess: ['admin'],
        items: [
            {
                title: "Mike Chen",
                subtitle: "The client testimonial has been approved",
            },
            {
                title: "Team Updates",
                subtitle: "Weekly report is ready for review",
            },
        ],
    },
    {
        type: "button",
        icon: <LogOut className="h-4 w-4 text-red-500" />,
        label: "Logout",
        onClick: () => console.log("Logging out..."),
    },
];


export default function DashNavbar() {

    const [user, setUser] = useState<string[]>([]);

    async function userData() {
        const data = await account.get();
        setUser(data.labels ?? []);
    }

    useEffect(() => {
        userData();
    }, [])

    return (
        <header className="w-full h-16 bg-white border-b">
            <div className="flex items-center justify-between h-full px-4 mx-auto max-w-screen-2xl gap-4">

                {/* Left: Search */}
                <div className="flex flex-1 items-center gap-4">
                    <div className="relative w-full max-w-[550px]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search articles, projects..."
                            className="w-full h-[40px] bg-background pl-10 pr-3 text-sm"
                        />
                    </div>

                    {/* Action buttons: Post New Article | Add Project */}
                    <div className="ml-3 flex gap-3">
                        {actionButtons.map((item) => {
                            const hasAccess = item.allowAccess.some(role => user.includes(role));

                            if (!hasAccess) return null;

                            return (
                                <Button
                                    key={item.label}
                                    onClick={item.onClick}
                                    className={`flex items-center gap-2 h-10 sm:!px-6 !px-1 rounded-md shadow cursor-pointer ${item.bgColor} ${item.hoverColor} font-bold text-white transition`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.label}
                                </Button>
                            );
                        })}

                    </div>
                </div>

                {/* Right: Icons */}
                <div className="flex items-center gap-2">
                    {headerActions.map((action, index) => {
                        // ✅ Check role access only if allowAccess is defined
                        const hasAccess =
                            !action.allowAccess || action.allowAccess.some(role => user.includes(role));

                        if (!hasAccess) return null;

                        // Dropdown action
                        if (action.type === "dropdown") {
                              return (
                                <DropdownMenu key={index}>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="relative">
                                            {action.icon}
                                            <span className="sr-only">{action.label}</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-80">
                                        {action.items && action.items.length > 0 ? (
                                            action.items.map((item, idx) => (
                                                <DropdownMenuItem key={idx}>
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-sm font-medium">{item.title}</p>
                                                        <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                                                    </div>
                                                </DropdownMenuItem>
                                            ))
                                        ) : (
                                            <DropdownMenuItem disabled>
                                                <p className="text-sm text-muted-foreground">No items available</p>
                                            </DropdownMenuItem>
                                        )}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            );
                        }

                        // Button action
                        if (action.type === "button") {
                            return (
                                <Button
                                    key={index}
                                    variant="ghost"
                                    size="icon"
                                    onClick={action.onClick}
                                >
                                    {action.icon}
                                    <span className="sr-only">{action.label}</span>
                                </Button>
                            );
                        }

                        return null;
                    })}
                </div>


            </div>
        </header>

    )
}
