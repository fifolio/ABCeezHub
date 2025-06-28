import { useEffect, useState } from "react"

// UIS
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// ICONS
import { FileText, Clock, User, Link, Tag, Star, Send } from "lucide-react"
import { BarLoader } from "react-spinners"

// BACKEND
import { account } from "@/backend/configs/configs"
import { adminsCreateArticle } from "@/backend/services/articles/adminsCreateArticle"
import { memberCreateArticle } from "@/backend/services/articles/memberCreateArticle"
import { toast } from "sonner"

export default function AddArticle() {

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    coverURL: "",
    hook: "",
    readingTime: "",
    category: "",
    featured: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {

    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required"
    }

    if (!formData.coverURL.trim()) {
      newErrors.coverURL = "Cover URL is required"
    } else {
      try {
        new URL(formData.coverURL)
      } catch {
        newErrors.coverURL = "Please enter a valid URL"
      }
    }

    if (!formData.hook.trim()) {
      newErrors.hook = "Hook is required"
    }

    if (!formData.readingTime.trim()) {
      newErrors.readingTime = "Reading time is required"
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const [user, setUser] = useState<{ userId: string; name: string; email: string; labels: string[], avatar: string }>({ userId: "", name: "", email: "", labels: [], avatar: "" })

  const [loadingToPost, setLoadingToPost] = useState(false);

  async function userData() {

    const data = await account.get()
    const prefs = await account.getPrefs()

    setUser(prev => ({
      ...prev,
      userId: data.$id,
      name: data.name,
      email: data.email,
      labels: data.labels ?? [],
      avatar: prefs.avatar,
    }))
  }


  useEffect(() => {
    userData()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoadingToPost(true)
    if (validateForm()) {

      if (user.labels[0] === 'admin') {
        await adminsCreateArticle({
          userId: user.userId,
          title: formData.title,
          content: formData.content,
          author: user.name,
          coverURL: formData.coverURL,
          hook: formData.hook,
          readingTime: formData.readingTime,
          category: formData.category,
          featured: formData.featured
        }).then((res) => {
          console.log(res)
        }).finally(() => {
          setLoadingToPost(false)
          toast.success(`Article published successfully`);
          setFormData({
            title: "",
            content: "",
            author: "",
            coverURL: "",
            hook: "",
            readingTime: "",
            category: "",
            featured: false,
          })
        })
      } else {
        await memberCreateArticle({
          userId: user.userId,
          title: formData.title,
          content: formData.content,
          author: user.name,
          coverURL: formData.coverURL,
          hook: formData.hook,
          readingTime: formData.readingTime,
          category: formData.category,
          featured: false
        }).then((res) => {
          console.log(res)
        }).finally(() => {
          setLoadingToPost(false)
          toast.success(`Article sent to preview successfully`);
          setFormData({
            title: "",
            content: "",
            author: "",
            coverURL: "",
            hook: "",
            readingTime: "",
            category: "",
            featured: false,
          })
        })
      }
    }
    setLoadingToPost(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="p-6 space-y-8 mb-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Create New Article</h1>
        <p className="text-muted-foreground">Fill in the details below to create and publish your new article.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Article Details
            </CardTitle>
            <CardDescription>Basic information about your article</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                <Input
                  id="title"
                  placeholder="Enter article title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className={errors.title ? "border-red-500" : ""}
                />
                {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="author" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Author <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="author"
                  placeholder="Enter author name"
                  value={user.name}
                  disabled
                  className={errors.author ? "border-red-500" : ""}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hook">Hook <span className="text-red-500">*</span></Label>
              <Input
                id="hook"
                placeholder="Enter a compelling hook for your article"
                value={formData.hook}
                onChange={(e) => handleInputChange("hook", e.target.value)}
                className={errors.hook ? "border-red-500" : ""}
              />
              {errors.hook && <p className="text-sm text-red-500">{errors.hook}</p>}
            </div>

            <div className="space-y-2 overflow-hidden">
              <Label htmlFor="content">Content <span className="text-red-500">*</span></Label>
              <Textarea
                id="content"
                placeholder="Write your article content here..."
                value={formData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                className={`min-h-[200px] ${errors.content ? "border-red-500" : ""}`}
              />
              {errors.content && <p className="text-sm text-red-500">{errors.content}</p>}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="h-5 w-5" />
              Media & Metadata
            </CardTitle>
            <CardDescription>Additional information and media for your article</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="coverURL">Cover Image URL <span className="text-red-500">*</span></Label>
              <Input
                id="coverURL"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={formData.coverURL}
                onChange={(e) => handleInputChange("coverURL", e.target.value)}
                className={errors.coverURL ? "border-red-500" : ""}
              />
              {errors.coverURL && <p className="text-sm text-red-500">{errors.coverURL}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="readingTime" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Reading Time (in minutes)<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="readingTime"
                  type="number"
                  placeholder="e.g., 3, 5, or 6 "
                  value={formData.readingTime}
                  onChange={(e) => handleInputChange("readingTime", e.target.value)}
                  className={errors.readingTime ? "border-red-500" : ""}
                />
                {errors.readingTime && <p className="text-sm text-red-500">{errors.readingTime}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Category <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className={errors.category ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
              </div>
            </div>

            {user.labels[0] === 'admin' && (
              <>
                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="featured" className="flex items-center gap-2 text-base">
                      <Star className="h-4 w-4" />
                      Featured Article
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Mark this article as featured to highlight it on your homepage
                    </p>
                  </div>
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => handleInputChange("featured", checked)}
                  />
                </div>
              </>
            )}

          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          {user.labels[0] !== 'admin' && (
            <p className="text-sm italic text-yellow-700 bg-yellow-50 border border-yellow-500 rounded-lg p-2">
              Note: Your article will be reviewed before it’s published.
            </p>
          )}
          <Button disabled={loadingToPost} type="submit" className="flex justify-evenly bg-blue-600 hover:bg-blue-700 cursor-pointer font-bold w-[180px]">
            {loadingToPost ? (<BarLoader
              color="#ffffff"
              loading={loadingToPost}
            />) : (
              <>
                <Send /> Publish Article
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
