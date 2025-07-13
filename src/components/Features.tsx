import { BarChart3, Shield, Zap, Globe, Users, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Get instant insights with live data tracking and comprehensive reporting dashboards.",
    },
    {
      icon: Shield,
      title: "Privacy-First",
      description: "GDPR compliant analytics that respects user privacy while delivering powerful insights.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with minimal impact on your website's loading speed.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Track users across all continents with our distributed data collection network.",
    },
    {
      icon: Users,
      title: "User Journey",
      description: "Understand how users navigate through your site with detailed user flow analysis.",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and monitor conversion goals to measure the success of your digital initiatives.",
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              understand your users
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From real-time tracking to advanced user journey analysis, WebTick provides 
            all the tools you need to make data-driven decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-card hover:bg-card/70 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-primary">
            <span className="text-sm">And much more...</span>
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;