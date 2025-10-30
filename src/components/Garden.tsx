import { motion } from "framer-motion";
import PlantIcon from "./PlantIcon";

interface GardenProps {
  onPlantClick: (articleId: string) => void;
}

const Garden = ({ onPlantClick }: GardenProps) => {
  const plants: Array<{
    id: string;
    size: "small" | "medium" | "large";
    x: string;
    y: string;
    type: "tree" | "flower" | "sprout" | "vine";
  }> = [
    { id: "1", size: "large", x: "20%", y: "40%", type: "tree" },
    { id: "2", size: "medium", x: "45%", y: "30%", type: "flower" },
    { id: "3", size: "small", x: "70%", y: "45%", type: "sprout" },
    { id: "4", size: "medium", x: "35%", y: "60%", type: "vine" },
    { id: "5", size: "large", x: "65%", y: "65%", type: "tree" },
    { id: "6", size: "small", x: "85%", y: "35%", type: "flower" },
  ];

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Garden soil base with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Ambient light effect */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 bg-accent/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Garden ground line */}
      <svg
        className="absolute bottom-0 w-full h-32"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,30 600,50 T1200,50 L1200,100 L0,100 Z"
          fill="hsl(var(--secondary))"
          opacity="0.2"
        />
      </svg>

      {/* Plants */}
      {plants.map((plant, index) => (
        <motion.div
          key={plant.id}
          className="absolute cursor-pointer"
          style={{
            left: plant.x,
            top: plant.y,
            zIndex: 50 - index,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          whileHover={{ scale: 1.1 }}
          onClick={() => onPlantClick(plant.id)}
        >
          <PlantIcon type={plant.type} size={plant.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default Garden;
