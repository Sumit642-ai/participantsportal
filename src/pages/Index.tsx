import { ArrowRight, Calendar, Building2, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Index = () => {
  const stats = [
    { icon: Users, value: "1500+", label: "Participants" },
    { icon: Calendar, value: "44", label: "Sessions" },
    { icon: Building2, value: "21", label: "Halls" },
  ];

  return (
    <Layout>
      <div className="container px-4 py-8">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center mb-12"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          </div>

          

          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 leading-tight tracking-tight">
            Global Entrepreneurship Summit 2026
          </h1>

          <p className="text-gradient-gold font-semibold text-base uppercase tracking-[0.24em] mb-2">
            Odyssey of Opulence
          </p>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 font-medium">
            30st January to 1st February
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 glow-gold">
                View Schedule
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/accommodation">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-border hover:bg-secondary font-medium h-12 px-8"
              >
                Find Your Hall
                <Building2 className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-4 text-center card-glow"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="font-display font-bold text-2xl text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="font-display font-semibold text-lg text-foreground">
            Quick Access
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Link to="/accommodation" className="group">
              <div className="bg-card border border-border rounded-xl p-5 card-glow hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Accommodation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Find your assigned hall
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>

            <Link to="/schedule" className="group">
              <div className="bg-card border border-border rounded-xl p-5 card-glow hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Event Schedule
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Browse all 44 sessions
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          </div>
        </motion.div>

      </div>
    </Layout>
  );
};

export default Index;
