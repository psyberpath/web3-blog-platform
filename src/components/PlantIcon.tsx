import { motion } from "framer-motion";

interface PlantIconProps {
  type: "tree" | "flower" | "sprout" | "vine";
  size: "small" | "medium" | "large";
}

const PlantIcon = ({ type, size }: PlantIconProps) => {
  const sizeMap = {
    small: 60,
    medium: 90,
    large: 130,
  };

  const dimension = sizeMap[size];

  const renderPlant = () => {
    switch (type) {
      case "tree":
        return (
          <svg width={dimension} height={dimension} viewBox="0 0 100 100">
            <motion.path
              d="M50,80 L50,40"
              stroke="hsl(var(--secondary))"
              strokeWidth="4"
              fill="none"
              className="plant-sway"
              style={{ transformOrigin: "50% 80%" }}
            />
            <motion.circle
              cx="50"
              cy="30"
              r="20"
              fill="hsl(var(--accent))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.circle
              cx="35"
              cy="35"
              r="15"
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            />
            <motion.circle
              cx="65"
              cy="35"
              r="15"
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            />
          </svg>
        );

      case "flower":
        return (
          <svg width={dimension} height={dimension} viewBox="0 0 100 100">
            <motion.path
              d="M50,85 Q45,60 50,40"
              stroke="hsl(var(--secondary))"
              strokeWidth="3"
              fill="none"
              className="plant-sway"
              style={{ transformOrigin: "50% 85%" }}
            />
            {[0, 72, 144, 216, 288].map((rotation, i) => (
              <motion.ellipse
                key={i}
                cx="50"
                cy="35"
                rx="12"
                ry="18"
                fill="hsl(var(--accent))"
                transform={`rotate(${rotation} 50 35)`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              />
            ))}
            <motion.circle
              cx="50"
              cy="35"
              r="8"
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            />
          </svg>
        );

      case "sprout":
        return (
          <svg width={dimension} height={dimension} viewBox="0 0 100 100">
            <motion.path
              d="M50,80 L50,50"
              stroke="hsl(var(--secondary))"
              strokeWidth="3"
              fill="none"
              className="plant-sway"
              style={{ transformOrigin: "50% 80%" }}
            />
            <motion.path
              d="M50,50 Q35,40 40,30"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              fill="hsl(var(--accent))"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
            <motion.ellipse
              cx="38"
              cy="30"
              rx="12"
              ry="18"
              fill="hsl(var(--accent))"
              transform="rotate(-30 38 30)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            />
          </svg>
        );

      case "vine":
        return (
          <svg width={dimension} height={dimension} viewBox="0 0 100 100">
            <motion.path
              d="M50,80 Q40,60 50,40 Q60,20 50,10"
              stroke="hsl(var(--secondary))"
              strokeWidth="3"
              fill="none"
              className="plant-sway"
              style={{ transformOrigin: "50% 80%" }}
            />
            {[30, 50, 70].map((y, i) => (
              <motion.circle
                key={i}
                cx={i % 2 === 0 ? 40 : 60}
                cy={y}
                r="8"
                fill="hsl(var(--accent))"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              />
            ))}
          </svg>
        );
    }
  };

  return (
    <motion.div
      className="relative filter drop-shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {renderPlant()}
    </motion.div>
  );
};

export default PlantIcon;
