import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", company: "", message: "" });
  };

  const faqs = [
    {
      question: "What is WebTick and how can it help my business?",
      answer: "WebTick is a powerful analytics platform that helps you understand your users better. Whether you're a startup or an established business, we provide real-time insights, user journey tracking, and privacy-first analytics to help you make data-driven decisions and grow your online presence."
    },
    {
      question: "How fast can I get started with WebTick?",
      answer: "You can get started in minutes! Simply sign up for a free trial, add our tracking code to your website, and you'll begin seeing data immediately. No complex setup required."
    },
    {
      question: "What does 'privacy-first' analytics mean?",
      answer: "Privacy-first means we respect user privacy while delivering powerful insights. Our platform is GDPR compliant, doesn't use cookies by default, and gives users control over their data while still providing comprehensive analytics."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Absolutely! You can change your plan at any time. Upgrade to get more features and higher limits, or downgrade if you need to scale back. All changes take effect immediately."
    },
    {
      question: "Do I need technical knowledge to use WebTick?",
      answer: "Not at all! WebTick is designed to be user-friendly. If you can copy and paste a code snippet, you're good to go. Our intuitive dashboard makes it easy to understand your data without technical expertise."
    },
    {
      question: "What if I need custom features or integrations?",
      answer: "We offer custom solutions for enterprise clients. If you need specific features, custom integrations, or white-label options, our team will work with you to build exactly what you need."
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us",
      details: "hello@webtick.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Come say hello at our office"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                We're here to help — <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">whenever you need us</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Whether you have a question, need support, or just want to say hello, our team is ready to chat.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold mb-2">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
                        <p className="text-muted-foreground">Your message has been sent. We'll be in touch soon.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                              First Name *
                            </label>
                            <Input
                              id="firstName"
                              name="firstName"
                              type="text"
                              required
                              value={form.firstName}
                              onChange={handleChange}
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                              Last Name *
                            </label>
                            <Input
                              id="lastName"
                              name="lastName"
                              type="text"
                              required
                              value={form.lastName}
                              onChange={handleChange}
                              placeholder="Enter your last name"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                              Subject *
                            </label>
                            <Input
                              id="subject"
                              name="subject"
                              type="text"
                              required
                              value={form.subject}
                              onChange={handleChange}
                              placeholder="What's this about?"
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium mb-2">
                              Company Name
                            </label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Enter your company name"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us how we can help you..."
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">Response Time</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-10 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4">
                  Start Understanding Your Users Better Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Experience the full power of WebTick free — no credit card required, no commitments, and absolutely no hassle. Just sign up and see how easy data-driven growth can be.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button size="lg" className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90">
                    Get Started Free
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto">
                    Talk to Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
