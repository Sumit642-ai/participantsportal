import { useState } from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import EventCard from "@/components/schedule/EventCard";
import EventModal from "@/components/schedule/EventModal";
import { events, Session } from "@/data/eventData";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("1");
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSessionClick = (session: Session) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSession(null), 300);
  };

  return (
    <Layout>
      <div className="container px-4 py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-6 h-6 text-primary" />
            <h1 className="font-display font-bold text-2xl text-foreground">
              Event Schedule
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            3 days of inspiring sessions and networking
          </p>
        </motion.div>

        {/* Day tabs */}
        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <TabsList className="w-full grid grid-cols-3 h-12 bg-card border border-border mb-6">
              <TabsTrigger
                value="1"
                className="font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Day 1
              </TabsTrigger>
              <TabsTrigger
                value="2"
                className="font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Day 2
              </TabsTrigger>
              <TabsTrigger
                value="3"
                className="font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Day 3
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {events.map((dayEvent) => (
            <TabsContent key={dayEvent.day} value={String(dayEvent.day)} className="mt-0">
              <div className="relative">
                {dayEvent.sessions.map((session, index) => (
                  <EventCard
                    key={session.id}
                    session={session}
                    index={index}
                    onClick={() => handleSessionClick(session)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Event detail modal */}
      <EventModal
        session={selectedSession}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Layout>
  );
};

export default Schedule;
