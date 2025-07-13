import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Marketing",
      company: "TechFlow Inc",
      avatar: "SC",
      content: "WebTick transformed how we understand our users. The insights we get are incredible and the interface is so intuitive. Our conversion rates improved by 40% in just 3 months.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "StartupVision",
      avatar: "MR",
      content: "Finally, an analytics platform that doesn't require a PhD to understand. WebTick gives us exactly what we need without the complexity. Game changer for our small team.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      company: "Digital Dynamics",
      avatar: "EW",
      content: "The real-time data and user journey tracking features are phenomenal. We can see exactly how users interact with our product and optimize accordingly. Highly recommended!",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Growth Lead",
      company: "ScaleUp Co",
      avatar: "DK",
      content: "WebTick's privacy-first approach was exactly what we needed for GDPR compliance. Great analytics without compromising user privacy. The team loves the clean dashboard.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Digital Marketing Director",
      company: "BrandForward",
      avatar: "LT",
      content: "The goal tracking and conversion analysis tools helped us identify bottlenecks we never knew existed. ROI increased by 60% since implementing WebTick.",
      rating: 5,
    },
    {
      name: "Alex Rivera",
      role: "CTO",
      company: "InnovateNow",
      avatar: "AR",
      content: "Lightning-fast implementation and the performance impact on our site is virtually zero. The technical integration was seamless and the support team is fantastic.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Customer Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Loved by thousands of
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              businesses worldwide
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how companies of all sizes use WebTick to understand their users 
            and grow their business.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-card hover:bg-card/70 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-semibold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">5,000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
            <div className="text-muted-foreground">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;