import { useEffect, useState } from "react"
import { Link } from "react-router"

// ICONS
import { Bell, BookOpen, FolderOpen, HelpCircle, MessageSquare, MessagesSquare, Settings, User2Icon, Users } from "lucide-react"

// UIS
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar"

// BACKEND
import { account } from '@/backend/configs/configs'

// Menu items for main navigation
const MenuItems = [
  {
    title: "Articles",
    url: "/articles",
    icon: BookOpen,
    allowAccess: ['admin', 'author']
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
    allowAccess: ['admin']

  },
  {
    title: "Teams",
    url: "/teams",
    icon: Users,
    allowAccess: ['admin']
  },
  {
    title: "Client Testimonials",
    url: "/testimonials",
    icon: MessageSquare,
    allowAccess: ['admin']
  },
]

const MenuItems2 = [
  {
    title: "Messages",
    url: "/messages",
    icon: MessagesSquare,
    allowAccess: ['admin']
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
    allowAccess: ['admin']

  }
]

// Bottom menu items
const bottomItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Get Help",
    url: "/help",
    icon: HelpCircle,
  },
]

export function DashSidebar() {

  const [user, setUser] = useState<{ name: string; email: string; labels: string[], avatar: string }>({ name: "", email: "", labels: [], avatar: "" })


  async function userData() {

    const data = await account.get()
    const prefs = await account.getPrefs()

    setUser(prev => ({
      ...prev,
      name: data.name,
      email: data.email,
      labels: data.labels ?? [],
      avatar: prefs.avatar,
    }))
  }

  useEffect(() => {
    userData()
  }, [])

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center text-primary-foreground">
                    <img src="/assets/icon.png" alt="logo" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">ABCeez Dash</span>
                    <span className="truncate text-xs text-muted-foreground">Dashboard</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent >
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {MenuItems.map((item) => {
                  for (let i = 0; i < item.allowAccess.length; i++) {
                    if (item.allowAccess[i] === user.labels[0]) {
                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link to={item.url} className="flex items-center gap-2 !py-4 text-gray-700 font-medium">
                              <item.icon className="size-4 text-gray-700" />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    }
                  } return null;
                })}
              </SidebarMenu>

              {user.labels[0] === 'admin' && <SidebarSeparator className="my-4 -ml-[0.5px]" />}

              <SidebarMenu>
                {MenuItems2.map((item) => {
                  for (let i = 0; i < item.allowAccess.length; i++) {
                    if (item.allowAccess[i] === user.labels[0]) {
                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link to={item.url} className="flex items-center gap-2 !py-4 text-gray-700 font-medium">
                              <item.icon className="size-4 text-gray-700" />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    }
                  } return null;
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            {bottomItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="flex items-center gap-2 !py-4 text-gray-700 font-medium">
                    <item.icon className="size-4 text-gray-700" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

          <SidebarSeparator className="-ml-[0.5px]" />

          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
                  >
                    <Avatar className="h-10 w-10 rounded-full border">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-full"><User2Icon /></AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user.name} <span className="!text-[13px] font-normal text-gray-700">({user.labels[0]})</span></span>
                      <span className="truncate text-xs text-gray-700">{user.email}</span>
                    </div>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <hr />
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>


  )
}
