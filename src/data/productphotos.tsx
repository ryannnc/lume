import './productphoto.css'
import { motion } from 'framer-motion'
import { productPhotos } from '../data/productphoto'

export default function ProductPhotos() {
  return (
    <section className="photo-grid">
      {productPhotos.map((photo, index) => {
        const row = Math.floor(index / 3)

        return (
          <motion.div
            key={photo.src}
            className="photo-grid__item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: row * 0.15,
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="photo-grid__image"
              loading="eager"
              decoding="sync"
            />
          </motion.div>
        )
      })}
    </section>
  )
}