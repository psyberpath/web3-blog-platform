import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sprout, Leaf } from "lucide-react";
import Garden from "@/components/Garden";
import PlantSeedModal from "@/components/PlantSeedModal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePlantClick = (articleId: string) => {
    navigate(`/article/${articleId}`);
  };

  const handlePublish = (title: string, content: string) => {
    toast.success("Your seed has been planted!", {
      description: "Your article will begin to grow in the garden.",
    });
    console.log("Published:", { title, content });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <motion.header
        className="border-b border-secondary/30 bg-background/80 backdrop-blur-sm relative z-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <Leaf className="w-8 h-8 text-accent" />
            <h1 className="text-2xl md:text-3xl font-cinzel font-bold text-foreground tracking-wide">
              The Overleaf Archive
            </h1>
          </motion.div>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            <Sprout className="w-5 h-5" />
            <span className="hidden sm:inline">Plant a Seed</span>
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-6 pt-16 pb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-lora font-semibold mb-6 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Where Content Grows
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          A digital garden where articles are living plants that grow and
          evolve with each reader's touch
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-2 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>Click any plant to explore</span>
        </motion.div>
      </motion.section>

      {/* Garden Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Garden onPlantClick={handlePlantClick} />
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="border-t border-secondary/30 mt-16 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>Cultivated with care in the Web3 ecosystem</p>
        </div>
      </motion.footer>

      {/* Plant Seed Modal */}
      <PlantSeedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPublish={handlePublish}
      />
    </div>
  );
};

export default Index;
