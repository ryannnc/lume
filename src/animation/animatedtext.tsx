import { motion } from "motion/react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "div" | "span";
};

export default function AnimatedText({
  text,
  className = "",
  as = "div",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const MotionTag = motion.create(as);

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((wordText, index) => (
        <motion.span key={index} className="animated-word" variants={word}>
          {wordText}{" "}
        </motion.span>
      ))}
    </MotionTag>
  );
}