import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50"
    >
      <div className="container flex items-center justify-between h-20 px-4">
        <div className="flex items-center gap-4">
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
          )}
          <img src="/ges.png" alt="GES Logo" className="h-14 w-auto" />
        </div>
        
        <div />
      </div>
    </motion.header>
  );
};

export default Header;
