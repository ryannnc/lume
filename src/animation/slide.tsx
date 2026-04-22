import { motion } from "motion/react";

type SlideInProps = {
  children: React.ReactNode;
  className?: string;
  from?: "left" | "right" | "bottom" | "top";
  distance?: number;
  delay?: number;
  duration?: number;
};

export default function SlideIn({
  children,
  className = "",
  from = "right",
  distance = 80,
  delay = 0.15,
  duration = 0.5,
}: SlideInProps) {
  const initial =
    from === "left"
      ? { x: -distance }
      : from === "right"
      ? { x: distance }
      : from === "top"
      ? { y: -distance }
      : { y: distance };

  const animate = { x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}