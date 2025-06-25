import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { Link } from "react-router"

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-8 max-w-md">
        {/* Company Logo */}
        <div className="flex justify-center">
          <img
            src="/assets/splash_logo.png"
            alt="Company Logo"
            className="h-34 w-auto"
          />
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered
            the wrong URL.
          </p>
        </div>

        {/* Return Home Button */}
        <Link to="/" className="cursor-pointer">
          <Button className="inline-flex items-center gap-2 cursor-pointer">
            <Home className="h-4 w-4" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
