import { 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const solutions = [
    {
      icon: Users,
      title: "For Marketing Teams",
      description: "Optimize campaigns and understand customer journeys",
      features: [
        "Campaign performance tracking",
        "Attribution modeling",
        "Customer journey mapping",
        "A/B testing insights",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "For Product Teams",
      description: "Build better products with user behavior insights",
      features: [
        "Feature usage analytics",
        "User flow optimization",
        "Product adoption metrics",
        "Retention analysis",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "For E-commerce",
      description: "Increase conversions and reduce cart abandonment",
      features: [
        "Sales funnel analysis",
        "Shopping behavior tracking",
        "Revenue attribution",
        "Customer lifetime value",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "For Enterprises",
      description: "Enterprise-grade analytics with advanced security",
      features: [
        "Advanced data governance",
        "Custom integrations",
        "White-label reporting",
        "Dedicated support",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Complete analytics solutions
              <br />
              <span className="text-primary">for your business</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From tracking to insights, we provide everything you need 
              to understand your users and grow your business effectively.
            </p>
          </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="group-hover:border-primary/50">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Seamless Integrations</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect WebTick with your existing tools and workflows. We integrate with 
            over 100+ popular platforms and services.
          </p>
          
          {/* Integration Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
            {[
              'Shopify', 'WordPress', 'HubSpot', 'Salesforce', 
              'Slack', 'Google Analytics', 'Zapier', 'API'
            ].map((integration) => (
              <div key={integration} className="bg-muted/50 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">{integration}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;