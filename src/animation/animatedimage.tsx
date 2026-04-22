import { motion } from "motion/react";

type AnimatedImageProps = {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  delay?: number;
  duration?: number;
  yFrom?: number;      // how far it slides from (px)
  scaleFrom?: number;  // slight zoom for polish
};

export default function AnimatedImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  delay = 0,
  duration = 0.8,
  yFrom = 120,
  scaleFrom = 1.03,
}: AnimatedImageProps) {
  return (
    <motion.div
      className={containerClassName}
      initial={{ y: yFrom, scale: scaleFrom }}       // no opacity
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      <img src={src} alt={alt} className={className} />
    </motion.div>
  );
}