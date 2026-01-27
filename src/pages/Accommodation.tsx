import { useState, useMemo } from "react";
import { Search, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import HallCard from "@/components/accommodation/HallCard";
import { halls } from "@/data/eventData";
import { Input } from "@/components/ui/input";

const Accommodation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHalls = useMemo(() => {
    if (!searchQuery.trim()) return halls;
    
    const query = searchQuery.toLowerCase();
    return halls.filter(
      (hall) =>
        hall.name.toLowerCase().includes(query) ||
        hall.college_allocation.toLowerCase().includes(query)
    );
  }, [searchQuery]);

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
            <Building2 className="w-6 h-6 text-primary" />
            <h1 className="font-display font-bold text-2xl text-foreground">
              Accommodation
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Find your hall assignment and navigate easily
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-6"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by hall or college name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 bg-card border-border focus:border-primary/50 focus:ring-primary/20"
          />
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground mb-4"
        >
          Showing {filteredHalls.length} hall{filteredHalls.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Hall cards grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredHalls.map((hall, index) => (
            <HallCard key={hall.id} hall={hall} index={index} />
          ))}
        </div>

        {filteredHalls.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No halls found matching your search.</p>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Accommodation;
