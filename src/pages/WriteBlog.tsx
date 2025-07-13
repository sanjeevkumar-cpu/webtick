import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WriteBlog = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    readTime: ""
  });

  const [isPreview, setIsPreview] = useState(false);

  const categories = ["Analytics", "Metrics", "UX", "Growth", "Technology"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.content || !formData.category) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would save to a database
    toast({
      title: "Blog Post Saved!",
      description: "Your blog post has been published successfully."
    });
    
    // Redirect to blog list
    navigate("/blog");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
                
                <div className="flex items-center justify-between">
                  <h1 className="text-4xl font-bold">Write New Blog Post</h1>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsPreview(!isPreview)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {isPreview ? "Edit" : "Preview"}
                    </Button>
                  </div>
                </div>
              </div>

              {!isPreview ? (
                /* Edit Mode */
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Post Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="title">Title *</Label>
                          <Input
                            id="title"
                            placeholder="Enter blog post title"
                            value={formData.title}
                            onChange={(e) => handleInputChange("title", e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="category">Category *</Label>
                          <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="author">Author</Label>
                          <Input
                            id="author"
                            placeholder="Author name"
                            value={formData.author}
                            onChange={(e) => handleInputChange("author", e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="readTime">Read Time</Label>
                          <Input
                            id="readTime"
                            placeholder="e.g., 5 min read"
                            value={formData.readTime}
                            onChange={(e) => handleInputChange("readTime", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                          id="excerpt"
                          placeholder="Brief description of your blog post"
                          rows={3}
                          value={formData.excerpt}
                          onChange={(e) => handleInputChange("excerpt", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="content">Content *</Label>
                        <Textarea
                          id="content"
                          placeholder="Write your blog post content here..."
                          rows={15}
                          value={formData.content}
                          onChange={(e) => handleInputChange("content", e.target.value)}
                          required
                        />
                        <p className="text-sm text-muted-foreground">
                          You can use HTML tags for formatting (h2, h3, p, ul, ol, li, strong, em, etc.)
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Button type="submit" className="bg-primary hover:bg-primary/90">
                          <Save className="w-4 h-4 mr-2" />
                          Publish Post
                        </Button>
                        <Button type="button" variant="outline" onClick={() => navigate("/blog")}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                /* Preview Mode */
                <Card>
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <article className="space-y-6">
                      <header>
                        {formData.category && (
                          <div className="mb-4">
                            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                              {formData.category}
                            </span>
                          </div>
                        )}
                        
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                          {formData.title || "Your Blog Title"}
                        </h1>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          {formData.author && <span>By {formData.author}</span>}
                          {formData.readTime && <span>{formData.readTime}</span>}
                          <span>{new Date().toLocaleDateString()}</span>
                        </div>
                        
                        {formData.excerpt && (
                          <p className="text-lg text-muted-foreground mb-8">
                            {formData.excerpt}
                          </p>
                        )}
                      </header>
                      
                      <div className="aspect-video bg-muted rounded-lg mb-8 flex items-center justify-center">
                        <div className="text-4xl text-muted-foreground">📊</div>
                      </div>
                      
                      <div 
                        className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground"
                        dangerouslySetInnerHTML={{ 
                          __html: formData.content || "<p>Your blog content will appear here...</p>" 
                        }}
                      />
                    </article>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WriteBlog;