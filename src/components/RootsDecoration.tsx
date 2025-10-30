import { motion } from "framer-motion";

const RootsDecoration = ({ side }: { side: "left" | "right" }) => {
  const paths = [
    "M20,0 Q15,100 20,200 T15,400 Q20,500 15,600",
    "M40,50 Q35,150 30,250 T35,450 Q30,550 35,650",
    "M10,100 Q5,200 10,300 T5,500 Q10,600 5,700",
  ];

  return (
    <div
      className={`fixed top-0 ${
        side === "left" ? "left-4" : "right-4"
      } h-full pointer-events-none hidden md:block`}
      style={{ width: "60px" }}
    >
      <svg
        width="60"
        height="100%"
        className={side === "right" ? "scale-x-[-1]" : ""}
      >
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="hsl(var(--secondary))"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            opacity="0"
            className="root-grow"
            style={{
              animationDelay: `${index * 0.3}s`,
            }}
          />
        ))}

        {/* Decorative leaves along the roots */}
        {[100, 250, 400, 550].map((y, index) => (
          <motion.ellipse
            key={`leaf-${index}`}
            cx={side === "left" ? 25 : 35}
            cy={y}
            rx="8"
            ry="12"
            fill="hsl(var(--accent))"
            opacity="0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{
              delay: 1 + index * 0.2,
              duration: 0.6,
            }}
            transform={`rotate(${side === "left" ? -30 : 30} ${
              side === "left" ? 25 : 35
            } ${y})`}
          />
        ))}
      </svg>
    </div>
  );
};

export default RootsDecoration;
