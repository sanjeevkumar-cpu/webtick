import { BarChart3, TrendingUp, Users, Eye } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const Dashboard = () => {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Trust Section */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-8">Trusted by growing teams and leading businesses</p>
          <div className="flex flex-wrap items-center justify-center space-x-8 space-y-4 opacity-60">
            {['TechCorp', 'StartupXYZ', 'Enterprise Inc', 'Digital Agency', 'Growth Co'].map((company) => (
              <div key={company} className="bg-muted/50 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-muted-foreground font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-3xl opacity-20"></div>
          
          {/* Dashboard Image */}
          <div className="relative bg-card/80 backdrop-blur-lg border border-border/50 rounded-3xl p-2 shadow-card overflow-hidden">
            <img 
              src={dashboardPreview} 
              alt="WebTick Analytics Dashboard" 
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Overlay with live indicators */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">WebTick Analytics</h3>
              </div>
              <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Live Data</span>
              </div>
            </div>

            {/* Floating metric cards */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
              <div className="bg-background/90 backdrop-blur-sm rounded-xl p-3 border border-border/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">Page Views</span>
                  <Eye className="w-3 h-3 text-primary" />
                </div>
                <div className="text-lg font-bold">124,832</div>
                <div className="flex items-center space-x-1 text-xs">
                  <TrendingUp className="w-2 h-2 text-green-500" />
                  <span className="text-green-500">+12.3%</span>
                </div>
              </div>

              <div className="bg-background/90 backdrop-blur-sm rounded-xl p-3 border border-border/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">Users</span>
                  <Users className="w-3 h-3 text-primary" />
                </div>
                <div className="text-lg font-bold">42,156</div>
                <div className="flex items-center space-x-1 text-xs">
                  <TrendingUp className="w-2 h-2 text-green-500" />
                  <span className="text-green-500">+8.7%</span>
                </div>
              </div>

              <div className="bg-background/90 backdrop-blur-sm rounded-xl p-3 border border-border/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">Conversion</span>
                  <BarChart3 className="w-3 h-3 text-primary" />
                </div>
                <div className="text-lg font-bold">3.2%</div>
                <div className="flex items-center space-x-1 text-xs">
                  <TrendingUp className="w-2 h-2 text-green-500" />
                  <span className="text-green-500">+0.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;