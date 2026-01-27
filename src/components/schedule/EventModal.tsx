import { Clock, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Session } from "@/data/eventData";
import { Button } from "@/components/ui/button";

interface EventModalProps {
  session: Session | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ session, isOpen, onClose }: EventModalProps) => {
  if (!session) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:rounded-xl"
          >
            <div className="bg-card border border-border rounded-t-2xl md:rounded-xl p-6 card-glow max-h-[80vh] overflow-y-auto">
              {/* Handle for mobile */}
              <div className="w-12 h-1 bg-border rounded-full mx-auto mb-4 md:hidden" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>

              {/* Time badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <Clock className="w-4 h-4" />
                {session.time}
              </div>

              {/* Title */}
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                {session.title}
              </h2>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {session.desc}
              </p>

              {/* Venue */}
              <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <MapPin className="w-4 h-4" />
                  Venue
                </div>
                <p className="font-medium text-foreground">{session.venue}</p>
              </div>

              {/* Navigate button */}
              <Button
                variant="default"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12"
                onClick={() => window.open(session.venue_map, "_blank")}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Navigate to Venue
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
