import { MapPin, Building2, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Hall } from "@/data/eventData";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HallCardProps {
  hall: Hall;
  index: number;
}

const HallCard = ({ hall, index }: HallCardProps) => {
  const occupancyPercent = ((hall.total - hall.available) / hall.total) * 100;
  const isLowAvailability = hall.available <= 10;

  const handleClick = () => {
    window.open(hall.map_url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onClick={handleClick}
      className="group relative bg-card rounded-xl border border-border p-5 card-glow hover:border-primary/50 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <Building2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground">
              {hall.name}
            </h3>
            <Badge variant="outline" className="mt-1 text-xs border-primary/30 text-primary">
              {hall.college_allocation}
            </Badge>
          </div>
        </div>
        <MapPin className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-2">
            <Users className="w-4 h-4" />
            Availability
          </span>
          <span className={`font-semibold ${isLowAvailability ? "text-destructive" : "text-primary"}`}>
            {hall.available} / {hall.total}
          </span>
        </div>
        <Progress
          value={occupancyPercent}
          className="h-2 bg-secondary"
        />
        {isLowAvailability && (
          <p className="text-xs text-destructive">Limited spots remaining!</p>
        )}
        <p className="text-xs text-muted-foreground text-center pt-2 group-hover:text-primary transition-colors">
          Tap to open in Google Maps
        </p>
      </div>
    </motion.div>
  );
};

export default HallCard;
