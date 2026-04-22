import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const menuVariants = {
  hidden: {
    y: '-100%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    y: '-100%',
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.64, 0, 0.78, 0],
    },
  },
}

const linkVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu-overlay"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="mobile-menu-links">
            <motion.div variants={linkVariants}>
              <Link to="/" onClick={onClose}>HOME</Link>
            </motion.div>

            <motion.div variants={linkVariants}>
              <Link to="/product" onClick={onClose}>PRODUCT</Link>
            </motion.div>

            <motion.div variants={linkVariants}>
              <Link to="/resources" onClick={onClose}>RESOURCES</Link>
            </motion.div>

            <motion.div variants={linkVariants}>
              <Link to="/download" onClick={onClose}>DOWNLOAD</Link>
            </motion.div>

            <motion.div variants={linkVariants}>
              <Link to="/account" onClick={onClose}>ACCOUNT</Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}