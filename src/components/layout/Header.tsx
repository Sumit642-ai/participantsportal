import { User } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border"
    >
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center glow-gold">
            <span className="font-display font-bold text-primary-foreground text-lg">G</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-gradient-gold">GES 2025</span>
            <span className="text-xs text-muted-foreground">IIT Kharagpur</span>
          </div>
        </div>
        
        <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
          <User className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
