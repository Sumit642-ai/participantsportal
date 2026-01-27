import { Clock, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Session } from "@/data/eventData";

interface EventCardProps {
  session: Session;
  index: number;
  onClick: () => void;
}

const EventCard = ({ session, index, onClick }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="relative flex gap-4"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary glow-gold" />
        <div className="w-0.5 flex-1 bg-border" />
      </div>

      {/* Card content */}
      <div
        onClick={onClick}
        className="flex-1 mb-6 group cursor-pointer"
      >
        <div className="bg-card rounded-xl border border-border p-4 card-glow hover:border-primary/50 transition-all duration-300 group-hover:translate-x-1">
          <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
            <Clock className="w-4 h-4" />
            {session.time}
          </div>
          
          <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
            {session.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {session.desc}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              {session.venue}
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
