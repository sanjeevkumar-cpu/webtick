import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Users, Shield, Globe, Heart } from "lucide-react";

const TEAM = [
  {
    name: "Sophie Turner",
    role: "CEO & Co-Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fallback: "ST",
  },
  {
    name: "James Lee",
    role: "CTO & Co-Founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fallback: "JL",
  },
  {
    name: "Priya Patel",
    role: "Head of Product",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    fallback: "PP",
  },
  {
    name: "Carlos Gomez",
    role: "Lead Engineer",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    fallback: "CG",
  },
];

const VALUES = [
  {
    icon: <Shield className="w-6 h-6 text-primary" />, title: "Privacy-First", desc: "We put user privacy at the core of everything we build." },
  {
    icon: <Globe className="w-6 h-6 text-primary" />, title: "Global Impact", desc: "Our solutions empower businesses worldwide to grow with confidence." },
  {
    icon: <Heart className="w-6 h-6 text-primary" />, title: "Customer Love", desc: "We obsess over customer success and support at every step." },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />, title: "Innovation", desc: "We constantly push boundaries to deliver the best analytics experience." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Company Story */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 mx-auto">About WebTick</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Our Mission: <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Empower Data-Driven Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                WebTick was founded with a simple belief: every business deserves powerful, privacy-first analytics. Our platform helps you understand your users, make smarter decisions, and grow with confidence—no matter your size.
              </p>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold mb-2">Our Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg mb-4">
                    Founded in 2022 by a team of passionate engineers and marketers, WebTick set out to make analytics accessible, ethical, and actionable. Today, we serve thousands of businesses worldwide, helping them unlock the full potential of their data while respecting user privacy.
                  </p>
                  <p className="text-muted-foreground">
                    We believe in transparency, innovation, and putting our customers first. Our journey is just beginning—and we invite you to be part of it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 mx-auto" variant="secondary">Our Values</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We are committed to building a better analytics future—one that is ethical, innovative, and customer-obsessed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {VALUES.map((value, idx) => (
                <Card key={idx} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl font-semibold mb-2">{value.title}</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
          <div className="relative z-10 container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 mx-auto" variant="outline">Meet the Team</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                The People Behind WebTick
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our diverse, passionate team is dedicated to helping you succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {TEAM.map((member, idx) => (
                <Card key={idx} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.fallback}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg font-semibold mb-1">{member.name}</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-10 max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold mb-2">Join Us on Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to experience analytics that put you first? Start your journey with WebTick today.
                </p>
                <Button size="lg" className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
